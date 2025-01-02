'use client'

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'

// Données de services
const services = [
  {
    title: "Guidage Silure",
    description: "En float-tube ou du bord, vivez l'expèrience d'une traque au silure inoubliable.",
    image: "/Guidage-silure-2.jpg",
    slug: "/guidage-silure",
  },
  {
    title: "Animation silure enfants",
    description: "Plongez dans l'aventure, à la découverte du silure avec des pêches ludiques du bord.",
    image: "/test4.jpg",
    slug: "/animation-peche-enfants",
  },
  {
    title: "Animation pêche au coup",
    description: "Pour les nouveaux pêcheurs, à la recherche de leurs premières sensations.",
    image: "/animation-peche-coup.jpg",
    slug: "/animation-peche-au-coup",
  },
  {
    title: "Autres prestations",
    description: "Pour des animations sur mesures destinées aux associations, écoles, campings, ...",
    image: "/autre-presta.jpg",
    slug: "/autres-animations",
  },
]

export default function ServicesShowcase() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Titre de la section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
        style={{ fontFamily: '"DCC-Ash", sans-serif' }}
      >
        <h2 className="text-3xl text-gray-700 dark:text-white sm:text-4xl">
          Nos Prestations
        </h2>
      </motion.div>

      {/* Carousel avec les services */}
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4"
              >
                <Card className="h-full shadow-lg bg-white dark:bg-gray-800 rounded-lg flex flex-col justify-between">
                  <CardContent className="flex flex-col items-center justify-start p-4">
                    {/* Affichage de l'image */}
                    <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
            
                    {/* Titre du service */}
                    <h3 className="text-xl font-semibold text-center text-gray-700 dark:text-white">
                      {service.title}
                    </h3>
                    {/* Description du service */}
                    <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-300">
                      {service.description}
                    </p>
            
                    {/* Bouton pour en savoir plus */}
                    <Link href={`/prestations/${service.slug}`}>
                      <Button className="mt-4 w-3/4 bg-foreground text-primary font-semibold hover:bg-primary/90 hover:scale-95 hover:text-black transition-all duration-300 py-2 px-6 rounded-md shadow-lg">
                        Je découvre ! <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
            
            ))}
          </CarouselContent>

          {/* Navigation du carousel */}
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
            <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-white" />
          </CarouselPrevious>
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
            <ChevronRight className="h-6 w-6 text-gray-700 dark:text-white" />
          </CarouselNext>
        </Carousel>
      </div>
    </div>
  )
}
