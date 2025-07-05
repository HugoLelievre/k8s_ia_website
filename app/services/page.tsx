import { k8sServices, aiServices } from '../../data/content';
import { Zap } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

const ServiceCard = ({ service, color }: { service: Service, color: 'cyan' | 'purple' }) => {
  const colorClasses = {
    cyan: 'border-cyan-500/50 hover:border-cyan-500',
    purple: 'border-purple-500/50 hover:border-purple-500'
  };
  const iconColorClass = color === 'cyan' ? 'text-cyan-400' : 'text-purple-400';

  return (
    <div className={`bg-gray-800/50 rounded-xl p-8 border ${colorClasses[color]} transition-colors duration-300 h-full flex flex-col`}>
      <div className="mb-4">{service.icon}</div>
      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
      <p className="mt-4 text-lg text-gray-400 flex-grow">{service.description}</p>
      <ul className="mt-6 space-y-3">
        {service.details.map((detail: string) => (
          <li key={detail} className="flex items-start">
            <Zap className={`h-5 w-5 ${iconColorClass} mt-1 mr-3 flex-shrink-0`} />
            <span className="text-gray-300">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Nos Deux Pôles d&apos;Excellence</h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-400">
            Une expertise complète, de la fondation de votre infrastructure à l&apos;intelligence de vos applications.
          </p>
        </div>

        <div className="mt-20 space-y-20">
          {/* K8S Services */}
          <div>
            <div className="relative mb-12">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-cyan-500/30"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-gray-900 px-4 text-2xl font-semibold text-cyan-400">Infrastructure & Cloud-Native</span>
              </div>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
              {k8sServices.map((service) => (
                <ServiceCard key={service.title} service={service} color="cyan" />
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <div className="relative mb-12">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-purple-500/30"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-gray-900 px-4 text-2xl font-semibold text-purple-400">Intelligence Artificielle & Data</span>
              </div>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
              {aiServices.map((service) => (
                <ServiceCard key={service.title} service={service} color="purple" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};