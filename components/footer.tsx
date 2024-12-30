"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h5 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              À Propos
            </h5>
            <p className="text-gray-400">
              Entreprise individuelle <br /> 11290-Montréal <br /> SIRET: 93835579900017
            </p>
          </div>
          <div>
            <h5 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              Prestations
            </h5>
            <ul className="space-y-2">
              {[{ name: "Guidage silure", link: "/prestations/guidage-silure" },
                { name: "Animation pêche enfants", link: "/prestations/animation-peche-enfants" },
                { name: "Animation pêche au coup", link: "/prestations/animation-peche-au-coup" },
                { name: "Autres animations", link: "/prestations/autres-animations" }].map((item) => (
                <li key={item.name}>
                  <Link href={item.link} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              Suivez-moi
            </h5>
            <div className="flex space-x-4 ">
              <Link href="https://www.facebook.com/people/Alex-Guide-Silure-Aude/100005099056688/" target="_blank" rel="noopener noreferrer">
                <Facebook className="text-gray-400 hover:text-white hover:scale-110 transition-colors duration-300" size={24} />
              </Link>
              <Link href="https://www.instagram.com/guidesilureaude/" target="_blank" rel="noopener noreferrer">
                <Instagram className="text-gray-400 hover:text-white hover:scale-110 transition-colors duration-300" size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Guide Silure Aude. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
