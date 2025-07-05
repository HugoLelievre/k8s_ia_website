# === STAGE 1: Dépendances ===
# Installe les dépendances dans une première étape pour optimiser le cache Docker.
FROM node:20-alpine AS deps
WORKDIR /app

# Copie les fichiers de dépendances et les installe.
COPY package.json package-lock.json* ./
RUN npm ci

# === STAGE 2: Builder ===
# Construit l'application Next.js.
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Variable d'environnement pour désactiver la télémétrie de Next.js.
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# === STAGE 3: Production Runner ===
# Étape finale qui exécute l'application dans un environnement de production léger.
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1

# Crée un utilisateur et un groupe non-root pour des raisons de sécurité.
RUN addgroup --system --gid 1001 nextjs
RUN adduser --system --uid 1001 nextjs

# Copie les fichiers nécessaires depuis l'étape de build.
# Le mode "standalone" a préparé un dossier optimisé pour nous.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nextjs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nextjs /app/.next/static ./.next/static

# Définit l'utilisateur non-root pour exécuter l'application.
USER nextjs

EXPOSE 3000

ENV PORT 3000

# Lance le serveur Next.js.
# Next.js en mode standalone utilise le fichier "server.js".
CMD ["node", "server.js"]