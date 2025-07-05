// FILE: /components/Footer.tsx
import React from 'react';
import { Aperture, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
              <div className="flex items-center gap-2">
                  <Aperture className="h-8 w-8 text-cyan-400" />
                  <span className="font-bold text-xl">KubeExperts</span>
              </div>
            <p className="text-gray-400 text-base">
              Votre partenaire stratégique pour l&apos;excellence Cloud-Native & IA.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                      <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Solutions</h3>
                      <ul className="mt-4 space-y-4">
                          <li><Link href="/services" className="text-base text-gray-400 hover:text-white">Infrastructure K8s</Link></li>
                          <li><Link href="/services" className="text-base text-gray-400 hover:text-white">Solutions IA</Link></li>
                          <li><Link href="/services" className="text-base text-gray-400 hover:text-white">Formation</Link></li>
                      </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                      <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contact</h3>
                      <ul className="mt-4 space-y-4">
                          <li className="flex items-center"><Mail className="h-5 w-5 mr-2 text-cyan-400"/> contact@kubeexperts.fr</li>
                          <li className="flex items-center"><Phone className="h-5 w-5 mr-2 text-cyan-400"/> +33 6 00 00 00 00</li>
                      </ul>
                  </div>
              </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; {new Date().getFullYear()} KubeExperts. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};