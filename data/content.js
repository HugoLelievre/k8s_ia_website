import { Server, Shield, Award, Zap, Briefcase, BrainCircuit, Bot, TrendingUp } from 'lucide-react';

export const experts = [
  {
    name: "Hugo Lelièvre",
    role: "Expert Kubernetes & Architecte Cloud",
    bio: "Passionné par l'automatisation et les systèmes distribués, Hugo conçoit des architectures robustes et scalables qui propulsent les entreprises vers l'excellence opérationnelle.",
    imageUrl: "https://placehold.co/400x400/1e3a8a/ffffff?text=HL"
  },
  {
    name: "Hugo Guilbot",
    role: "Spécialiste DevOps & Cloud-Native",
    bio: "Avec une expertise pointue en intégration continue et déploiement continu (CI/CD), Hugo transforme les cycles de développement et accélère la mise en production.",
    imageUrl: "https://placehold.co/400x400/1e40af/ffffff?text=HG"
  },
  {
    name: "Gaston Tentillier",
    role: "Data Scientist & Expert IA",
    bio: "Spécialiste de l'apprentissage automatique, Gaston transforme vos données en intelligence actionnable en déployant des modèles d'IA performants et scalables sur Kubernetes.",
    imageUrl: "https://placehold.co/400x400/065f46/ffffff?text=GT"
  }
];

export const k8sServices = [
  {
    icon: <Server className="h-10 w-10 text-cyan-400" />,
    title: "Clusters Kubernetes sur-mesure",
    description: "Nous concevons et déployons des clusters Kubernetes haute disponibilité, optimisés pour vos charges de travail, que ce soit sur vos serveurs (on-premise) ou sur le cloud.",
    details: [
      "Architecture haute disponibilité (HA) pour une résilience maximale.",
      "Déploiement et configuration de toutes vos applications.",
      "Sécurité renforcée à tous les niveaux de l'infrastructure.",
      "Monitoring et logging centralisés pour une visibilité complète."
    ]
  },
  {
    icon: <Shield className="h-10 w-10 text-cyan-400" />,
    title: "Maintenance & Administration Déléguée",
    description: "Concentrez-vous sur votre cœur de métier. Nous prenons en charge la gestion complète de vos clusters Kubernetes, garantissant performance, sécurité et mises à jour continues.",
    details: [
        "Surveillance proactive 24/7 pour anticiper les incidents.",
        "Gestion des mises à jour de sécurité et des versions de K8s.",
        "Optimisation continue des coûts et des performances.",
        "Support réactif par des experts certifiés."
    ]
  },
  {
    icon: <Award className="h-10 w-10 text-cyan-400" />,
    title: "Formation & Accompagnement Cloud-Native",
    description: "Nous montons vos équipes en compétence sur Docker, Kubernetes et l'écosystème cloud-native. Notre objectif : votre autonomie et votre succès à long terme.",
    details: [
        "Formations pratiques adaptées à vos équipes (développeurs, ops).",
        "Ateliers sur les bonnes pratiques de la conteneurisation.",
        "Accompagnement à la mise en place de pipelines CI/CD.",
        "Coaching pour une transition culturelle vers le DevOps."
    ]
  }
];

export const aiServices = [
    {
        icon: <BrainCircuit className="h-10 w-10 text-purple-400" />,
        title: "MLOps as a Service",
        description: "Nous industrialisons vos modèles d'IA. Mettez en place des pipelines automatisés pour l'entraînement, le déploiement et le monitoring de vos algorithmes sur Kubernetes.",
        details: [
            "Usine logicielle pour l'IA (Kubeflow, MLflow).",
            "Gestion de cycle de vie des modèles.",
            "Déploiement scalable avec accès aux GPUs.",
            "Reproductibilité et traçabilité des expérimentations."
        ]
    },
    {
        icon: <Bot className="h-10 w-10 text-purple-400" />,
        title: "Création d'Agents IA Autonomes",
        description: "Développez des agents intelligents sur-mesure pour automatiser vos processus métiers, du support client à la veille concurrentielle, et libérez le potentiel de vos équipes.",
        details: [
            "Analyse des besoins et conception de l'agent.",
            "Intégration avec vos systèmes d'information (CRM, ERP).",
            "Hébergement et maintenance sur une infrastructure sécurisée.",
            "Optimisation continue des performances de l'agent."
        ]
    },
    {
        icon: <TrendingUp className="h-10 w-10 text-purple-400" />,
        title: "FinOps & Sécurité Intelligente",
        description: "Utilisez l'IA pour optimiser vos coûts cloud et renforcer votre sécurité. Nos modèles détectent les gaspillages de ressources et les comportements anormaux en temps réel.",
        details: [
            "Analyse prédictive des coûts d'infrastructure.",
            "Ajustement dynamique des ressources (Predictive Autoscaling).",
            "Détection d'anomalies de sécurité basée sur l'IA.",
            "Rapports et tableaux de bord pour une visibilité totale."
        ]
    }
];


export const projects = [
  {
    client: "Trimane",
    description: "Installation d'un cluster haute disponibilité sur serveurs on-premise, déploiement des applications métiers, et mise en place d'une solution complète de monitoring et d'intégration continue (Gitlab CI/CD).",
    tags: ["On-Premise", "Haute Disponibilité", "Gitlab CI/CD", "Monitoring"]
  },
  {
    client: "DIPTEK",
    description: "Administration et infogérance du cluster Kubernetes de production (Cloud OVH) hébergeant leur application SaaS. Optimisation des performances et de la sécurité, et intégration avec Gitlab CI/CD.",
    tags: ["Cloud OVH", "Administration", "SaaS", "Sécurité"]
  },
  {
    client: "Terres Inovia",
    description: "Création d'un cluster Kubernetes HA on-premise pour supporter leur stack data science. Déploiement des outils d'analyse et de traitement de données, et mise en place d'une surveillance avancée.",
    tags: ["Data Science", "On-Premise", "Stack Data", "Haute Disponibilité"]
  }
];

export const benefits = [
    {
        icon: <Zap className="h-8 w-8 text-cyan-400" />,
        title: "Performance & Scalabilité",
        description: "Votre infrastructure s'adapte en temps réel à la demande, garantissant une expérience utilisateur fluide et des coûts maîtrisés."
    },
    {
        icon: <Shield className="h-8 w-8 text-cyan-400" />,
        title: "Sécurité Renforcée",
        description: "Profitez d'une architecture isolée et de politiques de sécurité natives pour protéger vos données et celles de vos clients."
    },
    {
        icon: <Server className="h-8 w-8 text-cyan-400" />,
        title: "Haute Disponibilité",
        description: "Minimisez les interruptions de service grâce à des mécanismes d'auto-réparation et une infrastructure sans point de défaillance unique."
    },
    {
        icon: <Briefcase className="h-8 w-8 text-cyan-400" />,
        title: "ROI Accéléré",
        description: "Automatisez vos déploiements, réduisez vos coûts d'infrastructure et accélérez la mise sur le marché de vos innovations."
    }
];