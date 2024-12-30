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
import emailjs from 'emailjs-com'

export default function ContactForm() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
    honeypot: '', // Honeypot field
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Honeypot validation
    if (formState.honeypot) {
      console.warn("Honeypot field filled out, submission blocked.")
      return
    }

    // Prevent repeated submissions
    if (isSubmitting) {
      setError('Votre message est déjà en cours d\'envoi.')
      return
    }

    setError(null)
    setIsSubmitting(true)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // Utilisation de la variable d'environnement
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // Utilisation de la variable d'environnement
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
          subject: formState.subject,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! // Utilisation de la variable d'environnement
      )
      setIsSubmitting(false)
      setIsSubmitted(true)
    } catch (err) {
      console.error("Erreur lors de l'envoi du message :", err)
      setError('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.')
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col items-center space-y-6">
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
            Votre moniteur guide de pêche, est là pour vous !
          </p>
          <Button
            onClick={() => setIsFormOpen(true)}
            className="bg-foreground text-primary font-semibold hover:bg-background transition-all duration-300 py-2 px-6 rounded-md shadow-lg"
          >
            Contactez-moi
          </Button>
        </motion.div>
      )}

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
                      id="name"
                      name="name"
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
                    <Select
                      onValueChange={value =>
                        setFormState(prev => ({ ...prev, subject: value }))
                      }
                    >
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
                  <div className="hidden">
                    <Input
                      id="honeypot"
                      name="honeypot"
                      value={formState.honeypot}
                      onChange={handleInputChange}
                      tabIndex={-1}
                      autoComplete="off"
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
                  {error && (
                    <p className="text-sm text-red-500 mt-2">{error}</p>
                  )}
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
