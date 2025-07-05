import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Nous utilisons Inter, une police très lisible
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KubeExperts - Infrastructure & IA",
  description: "Nous fusionnons l'excellence de Kubernetes et la puissance de l'IA pour transformer votre infrastructure en un avantage concurrentiel décisif.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}