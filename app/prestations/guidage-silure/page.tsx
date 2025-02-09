'use client'

import { motion } from 'framer-motion'
import { ServiceLayout } from '@/components/ServiceLayout'


export default function RiverFishingPage() {
  return (
    <ServiceLayout
      title="VOTRE GUIDAGE SILURE"
      description="PLONGEZ A LA DECOUVERTE DU SILURE AVEC VOTRE SPECIALISTE."
      imageSrc="/couverture-guidage.png"
      additionalImages={[
        "/photo-guidage-1.png",
        "/photo-guidage-2.png",
        "/photo-guidage-3.png"
      ]}
    >
      <div className="space-y-12">
        <motion.section >
          <h2 className="text-4xl text-gray-900" style={{ fontFamily: '"DCC-Ash", sans-serif' }}>QUE VOUS APPORTE VOTRE GUIDAGE ?</h2>
          <ul className="mt-4 space-y-2">
            {[
              "Un pur moment d'évasion les pieds dans l'eau.",
              "Une découverte du département de l'Aude.",
              "Des connaissances liées aux fleuves et aux milieux.",
              "Un contenu théorique sur l'espèce ciblé.",
              "Une découverte/perfectionnement sur les techniques choisies.",
              "Une approche approfondie de l'utilisation d'un échosondeur.",
              "Un moment de convivalité et de partage avec votre moniteur guide de pêche.",
              "Une dévotion totale à votre réussite et apprentissage."
            ].map((item, index) => (
              <motion.li 
                key={index} 
                
                className="flex items-center space-x-2"
              >
                <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.section>
        <motion.section >
          <h2 className="text-4xl text-gray-900" style={{ fontFamily: '"DCC-Ash", sans-serif' }}>LE MATERIEL MIS A VOTRE DISPOSITION :</h2>
          <ul className="mt-4 space-y-2">
            {[
              "Floats-tubes de haute qualité équipés de moteur électrique et de sondeur.",
              "Cannes et moulinets haut de gamme.",
              "Clonks, teasers, montures et autres accessoires.",
              "Tapis de réception",
              "Gants et gilets de sauvetage.",
              "Différents appâts.",
            ].map((item, index) => (
              <motion.li 
                key={index} 
                className="flex items-center space-x-2"
              >
                <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.section>
        <motion.section >
          <h2 className="text-4xl text-gray-900" style={{ fontFamily: '"DCC-Ash", sans-serif' }}>LA PRESTATION NE COMPREND PAS :</h2>
          <ul className="mt-4 space-y-2">
            {[
              "Pour cause d'hygiène, aucun waders n'est fourni pendant la prestation.",
              "La carte de pêche",
              "Les boissons et repas",
              "La garantie de capture d'un poisson. Lui seul décide de se nourrir ou non.",
            ].map((item, index) => (
              <motion.li 
                key={index} 
                className="flex items-center space-x-2"
              >
                <span className="h-2 w-2 bg-yellow-500 rounded-full"></span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.section>
      </div>
    </ServiceLayout>
  )
}

