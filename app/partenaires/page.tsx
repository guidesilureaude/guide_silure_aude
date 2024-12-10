'use client';

import React from 'react';
import Header from '@/components/header';
import { motion } from 'framer-motion';
import Image from 'next/image';

const PartnersPage = () => {
  const partners = [
    {
      name: 'Fishing Gear Co.',
      logo: '/alex.png',
      description: 'Fournisseur officiel d’équipements de pêche haut de gamme.',
      website: 'https://fishinggear.com',
    },
    {
      name: 'Boat Adventures',
      logo: '/alex2.png',
      description: 'Spécialistes des embarcations pour les activités nautiques.',
      website: 'https://boatadventures.com',
    },
    {
      name: 'Nature Tours',
      logo: '/alex3.png',
      description: 'Organisation de séjours en pleine nature.',
      website: 'https://naturetours.com',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/60 via-primary/50 to-secondary/60 text-foreground">
      {/* Header */}
      <Header />

      {/* Page Content */}
      <main className="container mx-auto px-4 py-44">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-center mb-10"
        >
          Nos Partenaires
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-center max-w-3xl mx-auto mb-16"
        >
          Nous sommes fiers de collaborer avec des partenaires de confiance pour
          vous offrir une expérience de pêche unique et inoubliable.
        </motion.p>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white bg-opacity-80 text-foreground p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={128} // ou ajustez selon vos besoins
                height={128} // ou ajustez selon vos besoins
                className="w-32 h-32 object-contain mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{partner.name}</h2>
              <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
                {partner.description}
              </p>
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold underline hover:text-secondary"
              >
                Visiter le site
              </a>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PartnersPage;
