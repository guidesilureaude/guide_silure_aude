'use client'

import { useState } from 'react'
import { motion, } from 'framer-motion'
import { Loader2, Send, CheckCircle } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simuler l'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const inputVariants = {
    focus: { scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 10 } }
  }

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)' },
    tap: { scale: 0.95 }
  }

  return (
    <div>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Contactez-moi</CardTitle>
          <CardDescription>Pour plus de renseignement, envoyez moi un message et je vous répondrai rapidement.</CardDescription>
        </CardHeader>
        <CardContent>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nom</Label>
                <motion.div variants={inputVariants} whileFocus="focus">
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    className="w-full transition-all duration-300 focus:ring-2 focus:ring-purple-400"
                  />
                </motion.div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <motion.div variants={inputVariants} whileFocus="focus">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    className="w-full transition-all duration-300 focus:ring-2 focus:ring-purple-400"
                  />
                </motion.div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <motion.div variants={inputVariants} whileFocus="focus">
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                    className="w-full h-32 transition-all duration-300 focus:ring-2 focus:ring-purple-400"
                  />
                </motion.div>
              </div>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-background font-semibold py-2 px-4 rounded-md transition-all duration-300"
                >
                  {isSubmitting ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="mr-2 h-4 w-4" />
                  )}
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                </Button>
              </motion.div>
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
              <p className="text-gray-600">Merci de nous avoir contacté. Nous vous répondrons bientôt.</p>
            </motion.div>
          )}
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-sm text-gray-500">
            Nous respectons votre vie privée et ne partagerons jamais vos informations.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}