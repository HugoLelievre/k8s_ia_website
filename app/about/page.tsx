import { experts } from '../../data/content';
import Image from 'next/image'; // Importez le composant Image

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Notre Équipe d&apos;Experts</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Une équipe passionnée, une mission commune : démystifier le Cloud-Native et le rendre accessible.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          {experts.map((expert) => (
            <div key={expert.name} className="bg-gray-800/50 rounded-xl p-8 text-center border border-gray-700">
              <Image 
                className="w-32 h-32 rounded-full mx-auto ring-4 ring-cyan-500 object-cover" 
                src={expert.imageUrl} 
                alt={`Photo de ${expert.name}`}
                width={128}
                height={128}
              />
              <h2 className="mt-6 text-2xl font-bold text-white">{expert.name}</h2>
              <p className="text-cyan-400 font-semibold">{expert.role}</p>
              <p className="mt-4 text-gray-400">{expert.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};