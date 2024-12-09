'use client'

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from 'next/image'

const services = [
  {
    title: "Guidage Silure",
    description: "Guidage silure sur le fleuve Aude, du bord ou en float tube. Sensation garantie !",
    image: "/test2.jpg",
  },
  {
    title: "Animation pêche au coup",
    description: "Animation pêche au coup pour les enfants et les personnes en situation de handicap.",
    image: "/test.png",
  },
  {
    title: "Optimisation SEO",
    description: "Amélioration de votre visibilité en ligne grâce à des stratégies SEO efficaces.",
    image: "/test3.jpg",
  },
  {
    title: "Marketing Digital",
    description: "Stratégies de marketing digital sur mesure pour booster votre présence en ligne.",
    image: "/test4.jpg",
  },
]

export default function ServicesShowcase() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Nos Prestations
      </h2>
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-100 w-full"> {/* Conserver la taille globale de la carte */}
                    <CardContent className="flex flex-col items-center justify-start p-4">
                      {/* Image avec un cadre rectangulaire plus long */}
                      <div className="w-3/4 h-36 mb-4 relative">
                        <Image
                          src={service.image}
                          alt={service.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md"
                        />
                      </div>
                      {/* Titre */}
                      <h3 className="text-xl font-semibold text-center">{service.title}</h3>
                      {/* Description */}
                      <p className="mt-2 text-center text-gray-600 dark:text-gray-300">
                        {service.description}
                      </p>
                      {/* Bouton */}
                      <Button className="mt-4 w-full bg-foreground hover:background text-background">
                        En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10">
            <ChevronLeft className="h-5 w-5 text-gray-800 dark:text-white" />
          </CarouselPrevious>
          <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10">
            <ChevronRight className="h-5 w-5 text-gray-800 dark:text-white" />
          </CarouselNext>
        </Carousel>
      </div>
    </div>
  )
}
