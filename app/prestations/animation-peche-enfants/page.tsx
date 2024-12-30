'use client'

import { motion } from 'framer-motion'
import { ServiceLayout } from '@/components/ServiceLayout'

const listItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
}

export default function RiverFishingPage() {
  return (
    <ServiceLayout
      title="ANIMATION PECHE ENFANTS"
      description="DECOUVREZ LES JOIES DE LA PECHE EN RIVIERE AVEC VOTRE GUIDE EXPERT."
      imageSrc="/couverture-animation-silure.png"
      additionalImages={[
        "/photo-animation-1.png",
        "/photo-animation-2.png",
        "/photo-animation-3.png"
      ]}
    >
      <div className="space-y-12">
        <motion.section variants={listItemVariants}>
          <h2 className="text-3xl font-bold text-gray-900">Déroulement de la journée</h2>
          <ul className="mt-4 space-y-2">
            {[
              "Rendez-vous tôt le matin au point de rencontre",
              "Briefing sur les techniques de pêche et la sécurité",
              "Exploration des meilleurs spots de pêche le long de la rivière",
              "Pause déjeuner avec pique-nique au bord de l'eau",
              "Poursuite de la pêche l'après-midi avec rotation des spots",
              "Débriefing et partage des meilleures prises de la journée"
            ].map((item, index) => (
              <motion.li 
                key={index} 
                variants={listItemVariants}
                className="flex items-center space-x-2"
              >
                <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.section>
        <motion.section variants={listItemVariants}>
          <h2 className="text-3xl font-bold text-gray-900">Équipement fourni</h2>
          <ul className="mt-4 space-y-2">
            {[
              "Cannes à pêche adaptées à la rivière",
              "Leurres et appâts variés",
              "Gilet de sauvetage",
              "Épuisette"
            ].map((item, index) => (
              <motion.li 
                key={index} 
                variants={listItemVariants}
                className="flex items-center space-x-2"
              >
                <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.section>
        <motion.section variants={listItemVariants}>
          <h2 className="text-3xl font-bold text-gray-900">Points forts</h2>
          <ul className="mt-4 space-y-2">
            {[
              "Découverte de spots secrets connus uniquement des locaux",
              "Apprentissage des techniques spécifiques à la pêche en rivière",
              "Possibilité de pêcher des truites, des ombres ou des barbeaux",
              "Immersion totale dans la nature préservée"
            ].map((item, index) => (
              <motion.li 
                key={index} 
                variants={listItemVariants}
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

