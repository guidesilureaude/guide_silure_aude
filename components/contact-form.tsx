'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const formSchema = z.object({
    lastname: z.string().min(2, { message: "Name must be at least 2 characters." }),
    firstname: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormData = z.infer<typeof formSchema>

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = (data: FormData) => {
    // Here you would typically send the form data to your server
    console.log(data)
    // Reset the form after submission
    reset()
    // You could also show a success message to the user here
  }

  return (
    <div className="py-12 bg-background">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-accent text-center mb-8">Me Contacter</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
            <Label htmlFor="lastname">Nom</Label>
            <Input id="lastname" {...register('lastname')} placeholder="Doe" />
            {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname.message}</p>}
          </div>
          <div>
            <Label htmlFor="firstname">Prénom</Label>
            <Input id="firstname" {...register('firstname')} placeholder="John" />
            {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname.message}</p>}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register('email')} placeholder="johndoe@gmail.com" />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea 
              id="message"
              {...register('message')}
              placeholder="Ecrivez ici votre message"
              className="resize-none"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
    </div>
  )
}