'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, ChevronDown, Send } from "lucide-react"

export default function LandingPage() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Ici, vous pouvez ajouter la logique pour envoyer le formulaire
    console.log('Formulaire soumis')
  }

  return (
    <div>
      <main>
        <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
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
              className="text-6xl font-bold text-white mb-6 leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Découvrez l&apos;Innovation
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl text-foreground mb-8"
            >
              Une expérience unique pour votre entreprise
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button className="bg-gradient-to-r from-primary to-secondary text-foreground hover:from-secondary hover:to-primary transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                Commencer <ArrowRight className="ml-2" />
              </Button>
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
        

        <section id="fonctionnalités" className="py-20 bg-secondary/60">
          <div className="container mx-auto px-4">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center mb-12 bg-clip-text text-foreground"
            >
              Prestations
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-background p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <h4 className="text-xl font-semibold mb-4 text-foreground">Fonctionnalité {item}</h4>
                  <p className="text-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="tarifs" className="py-20 bg-primary/50">
          <div className="container mx-auto px-4 text-center">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-foreground"
            >
              Nos Tarifs
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {['Basic', 'Pro', 'Enterprise'].map((plan, index) => (
                <motion.div
                  key={plan}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h4 className="text-2xl font-bold mb-4 text-foreground">{plan}</h4>
                  <p className="text-4xl font-bold mb-6">{`${(index + 1) * 9.99}€`}<span className="text-sm text-background">/mois</span></p>
                  <ul className="text-left mb-6 space-y-2">
                    {['Fonctionnalité 1', 'Fonctionnalité 2', 'Fonctionnalité 3'].map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-foreground/50 hover:bg-primary text-white transition-colors duration-300">
                    Choisir ce plan
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center mb-12 bg-clip-text text-foreground"
            >
              Contactez-nous
            </motion.h3>
            <div className="max-w-2xl mx-auto">
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Nom</label>
                    <Input type="text" id="name" name="name" required placeholder="Votre nom" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                    <Input type="email" id="email" name="email" required placeholder="votre@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">Sujet</label>
                  <Input type="text" id="subject" name="subject" required placeholder="Sujet de votre message" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                  <Textarea id="message" name="message" rows={4} required placeholder="Votre message ici..." />
                </div>
                <div>
                  <Button type="submit" className="w-full text-foreground hover:bg-foreground/50  transition-all duration-300 shadow-lg hover:shadow-xl">
                    Envoyer le message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}