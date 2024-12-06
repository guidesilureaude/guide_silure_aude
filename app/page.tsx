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
              className="text-7xl font-bold mb-6 leading-tight tracking-wider"
              style={{ fontFamily: '"ApeMount", sans-serif' }}
            >
              <span className="bg-clip-text text-foreground bg-background">
                GUIDE SILURE AUDE
              </span>
            </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl text-foreground mb-8"
                style={{ fontFamily: '"ApeMount", sans-serif' }}
              >
                Plongez dans une aventure extrême !
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
        
        <section id="presentation" className="py-20 bg-gradient-to-b from-primary/60 via-primary/50 to-secondary/60">
          <div className="container mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl font-extrabold text-center text-foreground mb-8"
              style={{ fontFamily: '"ApeMount", sans-serif' }}
            >
              Plongez dans une aventure extrême !
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-lg text-center text-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Découvrez une expérience de pêche inoubliable avec Alex, votre guide certifié. Partez à la conquête du SILURE, notre géant des eaux douces, sur les rivières et lacs d’Aude et d’Ariège.
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
                className="bg-white bg-opacity-50 text-foreground p-6 rounded-lg shadow-lg"
              >
                <p className="text-lg leading-relaxed text-center">
                  Montez à bord de nos float-tubes, robustes et fun, équipés de moteurs et sondeurs. Stabilité, sécurité, et sensations garanties !
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="bg-white bg-opacity-50 text-foreground p-6 rounded-lg shadow-lg"
              >
                <p className="text-lg leading-relaxed">
                  Défiez le Silure à la verticale, au leurre de surface ou avec ma spécialité : le clonk-teaser. Matériel robuste, pour des poissons dépassant 2m50 et 100kg !
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="bg-white bg-opacity-50 text-foreground p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-8"
            >
              <p className="text-lg leading-relaxed text-center">
                Que vous soyez débutant ou expert, je vous propose des journées conviviales, remplies de rires et de bonnes vibrations ! De 13 à 80 ans, venez vivre une aventure unique !
              </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center mt-10"
            >
              <a
                href="#services"
                className="bg-foreground text-primary font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-background transition-all duration-300"
              >
                En savoir plus
              </a>
            </motion.div>
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
