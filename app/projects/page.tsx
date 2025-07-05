import { projects } from '../../data/content';

export default function ProjectsPage() {
  return (
    <div className="pt-24 md:pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Nos Réalisations Clients</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Découvrez comment nous avons aidé des entreprises comme la vôtre à atteindre leurs objectifs.
          </p>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-1">
          {projects.map((project) => (
            <div key={project.client} className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-gray-800 flex items-center justify-center p-8">
                <h2 className="text-3xl font-bold text-white text-center">{project.client}</h2>
              </div>
              <div className="p-8 md:w-2/3">
                <p className="text-lg text-gray-300">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tags.map((tag: string) => (
                    <span key={tag} className="px-3 py-1 text-sm font-medium text-cyan-200 bg-cyan-900/50 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
