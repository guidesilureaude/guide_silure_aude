'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Loader2, Send, CheckCircle, X } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulation d'envoi
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Texte introductif */}
      {!isFormOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <p className="text-xl font-semibold text-gray-700 sm:text-2xl dark:text-white">
            💬 Besoin d&apos;un devis ou d&apos;une information ?
          </p>
          <p className="text-gray-500 sm:text-lg dark:text-white">
            Votre moniteur guide de pêche, est la pour vous !
          </p>
          <Button
            onClick={() => setIsFormOpen(true)}
            className="bg-foreground text-primary font-semibold hover:bg-background transition-all duration-300 py-2 px-6 rounded-md shadow-lg"
          >
            Contactez-moi
          </Button>
        </motion.div>
      )}

      {/* Formulaire */}
      {isFormOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-md"
        >
          <Card>
            <CardHeader className="relative">
              <CardTitle className="text-2xl font-bold">Contactez-moi</CardTitle>
              <CardDescription>
                Pour plus de renseignements, envoyez-moi un message et je vous répondrai rapidement.
              </CardDescription>
              {/* Bouton de fermeture */}
              <Button
                className="absolute top-2 right-2 p-1 bg-background text-foreground hover:bg-background hover:scale-105 hover:text-gray-600"
                onClick={() => setIsFormOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </CardHeader>
            <CardContent>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom</Label>
                    <Input
                      id="lastname"
                      name="lastname"
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                      className="w-full transition-all duration-300 focus:ring-2 focus:ring-purple-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">Prénom</Label>
                    <Input
                      id="firstname"
                      name="firstname"
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                      className="w-full transition-all duration-300 focus:ring-2 focus:ring-purple-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                      className="w-full transition-all duration-300 focus:ring-2 focus:ring-purple-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet</Label>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Choisir" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="devis">Devis</SelectItem>
                        <SelectItem value="informations">Demande d&apos;informations</SelectItem>
                        <SelectItem value="partenariat">Partenariat</SelectItem>
                        <SelectItem value="autres">Autres</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      required
                      className="w-full h-32 transition-all duration-300 focus:ring-2 focus:ring-purple-400"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-foreground text-primary font-semibold hover:scale-95 hover:text-black transition-all duration-300 py-2 px-6 rounded-md shadow-lg"
                  >
                    {isSubmitting ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="mr-2 h-4 w-4" />
                    )}
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center space-y-4"
                >
                  <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
                  <h3 className="text-2xl font-bold text-green-700">Message envoyé !</h3>
                  <p className="text-gray-600">
                    Merci de nous avoir contacté. Nous vous répondrons bientôt.
                  </p>
                </motion.div>
              )}
            </CardContent>
            <CardFooter className="justify-center">
              <p className="text-sm text-gray-500">
                Nous respectons votre vie privée et ne partagerons jamais vos informations.
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      )}
    </div>
  )
}
