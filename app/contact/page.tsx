export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Contactez-nous</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Prêt à discuter de votre projet ? Remplissez le formulaire ou contactez-nous directement.
          </p>
        </div>

        <div className="mt-16 bg-gray-800/50 rounded-xl p-8 border border-gray-700">
          <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-300">Prénom</label>
              <div className="mt-1">
                <input 
                  type="text" 
                  name="first-name" 
                  id="first-name" 
                  autoComplete="given-name" 
                  className="py-3 px-4 block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 border-gray-600 rounded-md bg-gray-700 text-white" 
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-300">Nom</label>
              <div className="mt-1">
                <input 
                  type="text" 
                  name="last-name" 
                  id="last-name" 
                  autoComplete="family-name" 
                  className="py-3 px-4 block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 border-gray-600 rounded-md bg-gray-700 text-white" 
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm font-medium text-gray-300">Entreprise</label>
              <div className="mt-1">
                <input 
                  type="text" 
                  name="company" 
                  id="company" 
                  autoComplete="organization" 
                  className="py-3 px-4 block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 border-gray-600 rounded-md bg-gray-700 text-white" 
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <div className="mt-1">
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  autoComplete="email" 
                  className="py-3 px-4 block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 border-gray-600 rounded-md bg-gray-700 text-white" 
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <div className="mt-1">
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  className="py-3 px-4 block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 border-gray-600 rounded-md bg-gray-700 text-white"
                ></textarea>
              </div>
            </div>
            <div className="sm:col-span-2 text-center">
              <button 
                type="submit" 
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Envoyer le message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
