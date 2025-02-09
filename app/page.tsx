'use client'

import { motion } from 'framer-motion'
import { ChevronDown, } from "lucide-react"
import ContactForm from '@/components/contact-form'
import ServicesShowcase from '@/components/prestation-carrousel'
import Header from '@/components/header'

export default function LandingPage() {
  return (
    <div>
      <Header/>
      <main>
        <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-secondary/50 to-secondary/60">
          <video 
            autoPlay 
            loop 
            muted 
            className="absolute w-full h-full object-cover"
          >
            <source src="/video.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo.
          </video>
          <div className="absolute inset-0 bg-background opacity-50"></div>
            <div className="relative z-10 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-10 text-center leading-tight tracking-widest whitespace-nowrap"
              style={{
                fontSize: "clamp(3rem, 8vw, 8rem)", // Ajuste la taille du texte pour s'adapter à l'écran
                fontFamily: '"DCC-Ash", sans-serif',
              }}
            >
              <span className="bg-clip-text text-foreground bg-background">
                GUIDE SILURE AUDE
              </span>
            </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl text-foreground mb-12"
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                  fontFamily: '"DCC-Ash", sans-serif' }}
              >
                PLONGEZ DANS UNE AVENTURE EXTREME !
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
              </motion.div>
            </div>

          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="text-foreground w-10 h-10" />
          </motion.div>
        </section>
        
        <section id="presentation" className="py-20 relative">
        {/* Couche de dégradé */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/50 to-secondary/60"></div>
        
        {/* Contenu principal */}
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl text-center text-foreground mb-8"
              style={{ fontFamily: '"DCC-Ash", sans-serif' }}
            >
              LA TRAQUE DU SILURE COMMENCE ICI !
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-lg text-center text-gray-700 dark:text-white max-w-3xl mx-auto leading-relaxed"
            >
              Découvrez une expérience de pêche inoubliable avec votre moniteur guide de pêche diplomé. Partez à la conquête du SILURE, notre géant d&apos;eau douce, sur le fleuve Aude et plans d&apos;eau Ariégeois.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="bg-white bg-opacity-80 text-foreground p-6 rounded-lg shadow-lg"
              >
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  Embarquez à bord de floats-tubes robustes et fun, équipés de moteurs et sondeurs. Stabilité, sécurité et sensations seront au rendez-vous !
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="bg-white bg-opacity-80 text-foreground p-6 rounded-lg shadow-lg"
              >
                <p className="text-lg text-gray-700 leading-relaxed">
                  Défiez le Silure à la verticale, au leurre de surface ou avec ma spécialité : le clonk-teaser. Matériel robuste, pour des poissons pouvant dépasser 2m50 et 100kg !
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="bg-white bg-opacity-80 text-foreground p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-8"
            >
              <p className="text-lg leading-relaxed text-center text-gray-700">
                Que vous soyez débutant ou confirmé, je vous propose des journées conviviales, remplies de rires et de bonnes sensations ! De 13 à 80 ans, venez vivre une aventure extrême !
              </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center mt-10"
            >
              <a
                href="/tarifs"
                className="bg-foreground text-primary font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-background transition-all duration-300"
              >
                Je plonge !
              </a>
            </motion.div>
          </div>
        </div>
      </section>


        <section id="prestations" className="py-20 bg-gradient-to-b from-secondary/60 via-secondary/50 to-primary/50">
          <div className="container mx-auto px-4">
            <ServicesShowcase/>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gradient-to-b from-primary/50 via-primary/40 to-secondary/50 flex justify-center items-center">
          <ContactForm/>
        </section>
      </main>
    </div>
  )
}
