'use client'

import { motion } from 'framer-motion'
import { ServiceLayout } from '@/components/ServiceLayout'

export default function RiverFishingPage() {
  return (
    <ServiceLayout
      title="VOTRE ANIMATION SILURE ENFANTS"
      description="UN PREMIER PLONGEON DANS LA DECOUVERTE DU SILURE."
      imageSrc="/couverture-animation-silure.png"
      additionalImages={[
        "/photo-animation-1.png",
        "/photo-animation-2.png",
        "/photo-animation-3.png"
      ]}
    >
      <div className="space-y-12">
        <motion.section>
          <h2 className="text-4xl text-gray-900" style={{ fontFamily: '"DCC-Ash", sans-serif' }}>QU&apos;APPORTE CETTE ANIMATION A VOS ENFANTS ?</h2>
          <ul className="mt-4 space-y-2">
            {[
              "Une journée d'évasion dans un milieu naturel.",
              "Diverses connaissances du domaine piscicole et halieutique.",
              "La découverte du département de l'Aude.",
              "Divers contenus rendant l'animation 'amusante et ludique'.",
              "Un contenu théorique sur le silure.",
              "La mise en place d'un poste de pêche au cassant.",
              "Le partage et la convivialité entre les pêcheurs.",
              "Savoir se mettre en sécurité pour leurs prochaines parties de pêche.",
              "L'apprentissage du respect de la nature.",
              "Un dévotion totale à la réussite et l'apprentissage de vos enfants."

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
        <motion.section>
          <h2 className="text-4xl text-gray-900" style={{ fontFamily: '"DCC-Ash", sans-serif' }}>LE MATERIEL MIS A VOTRE DISPOSITION :</h2>
          <ul className="mt-4 space-y-2">
            {[
              "Floats-tubes de haute qualité.",
              "Cannes et moulinets haut de gamme.",
              "Tout le matériel de montage.",
              "Tapis de réception.",
              "Gants, gilets de sauvetage, trousse de secours, ...",
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
        <motion.section>
          <h2 className="text-4xl text-gray-900" style={{ fontFamily: '"DCC-Ash", sans-serif' }}>LA PRESTATION NE COMPREND PAS : </h2>
          <ul className="mt-4 space-y-2">
            {[
              "Pour cause d'hygiène, aucun waders n'est fourni pendant la prestation.",
              "La carte de pêche",
              "Les boissons et repas",
              "La garantie de capture d'un poisson. Lui seul décide de se nourrir ou non."
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

