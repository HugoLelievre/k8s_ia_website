import { ArrowRight } from 'lucide-react';
import { aiServices, benefits, projects } from '../data/content';
import CTAButton from '../components/CTAButton';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gray-900 z-0">
          <div className="absolute inset-0 bg-grid-cyan-500/10 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
          <div className="absolute inset-0 bg-grid-purple-500/10 [mask-image:linear-gradient(to_top,white_20%,transparent_100%)]"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[50%] bg-radial-gradient-at-bottom from-blue-900/80 via-gray-900 to-transparent z-10"></div>
        </div>
        <div className="relative z-20 max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400">Infrastructure Robuste.</span><br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white">Intelligence Augmentée.</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
            Nous fusionnons l&apos;excellence de Kubernetes et la puissance de l&apos;IA pour transformer votre infrastructure en un avantage concurrentiel décisif.
          </p>
          <div className="mt-10">
            <CTAButton href="/services">Découvrir nos solutions</CTAButton>
          </div>
        </div>
      </section>

      {/* AI Intro Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="text-purple-400">Le futur est intelligent.</span> Votre infrastructure aussi.
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">Au-delà de l&apos;hébergement, nous intégrons l&apos;IA au cœur de vos opérations pour automatiser, optimiser et innover.</p>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {aiServices.map(service => (
            <div key={service.title} className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors duration-300 flex flex-col">
              <div className="flex-shrink-0">{service.icon}</div>
              <h3 className="mt-4 text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-2 text-gray-400 flex-grow">{service.description}</p>
              <Link href="/services" className="mt-6 text-purple-400 font-semibold hover:text-purple-300 flex items-center">
                En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Un socle <span className="text-cyan-400">Cloud-Native</span> pour votre performance</h2>
          <p className="mt-4 text-lg text-gray-400">Les avantages concrets d&apos;une infrastructure moderne et maîtrisée.</p>
        </div>
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <div key={item.title} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-medium text-white">{item.title}</h3>
              <p className="mt-2 text-base text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Projects Overview */}
      <section className="bg-gray-900/70 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Ils nous font confiance</h2>
            <p className="mt-4 text-lg text-gray-400">Des partenariats solides pour des résultats concrets.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map(p => (
              <div key={p.client} className="text-center p-8 bg-gray-800 rounded-lg">
                <h3 className="text-2xl font-bold text-white">{p.client}</h3>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/projects" className="text-cyan-400 font-semibold hover:text-cyan-300 text-lg flex items-center justify-center mx-auto">
              Voir tous nos projets <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}