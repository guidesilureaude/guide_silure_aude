"use client";

import { motion } from "framer-motion";
import Header from "@/components/header"; // Import du Header
import Image from "next/image";
import { Fish, Award, Users, MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Liste des images du carrousel
const carouselImages = [
  { src: "/test2.jpg", alt: "Pêcheur en action" },
  { src: "/test3.jpg", alt: "Belle prise du jour" },
  { src: "/test4.jpg", alt: "Paysage de pêche" },
];

export default function VotreGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/60 via-primary/50 to-secondary/60 text-foreground">
      {/* Header fixé en haut de la page */}
      <Header />

      {/* Section de l'image de couverture */}
      <motion.div
        className="relative h-[50vh] mt-[60px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/votre-guide_couverture.jpg"
          alt="Guide de pêche en action"
          fill={true}
          className="brightness-50 object-cover"
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Votre Guide de Pêche
          </h1>
        </motion.div>
      </motion.div>

      {/* Contenu principal */}
      <main className="container mx-auto px-4 py-12">
        {/* À propos */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-6">À Propos de Votre Guide</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/votre-guide_alex.jpg"
                alt="Portrait du guide"
                width={300}
                height={300}
                className="rounded-full shadow-lg"
              />
            </motion.div>
            <div>
              <p className="text-lg mb-4 leading-relaxed text-justify">
                Je me nomme <strong>Alexis Boreau</strong>, un pur produit de
                l’Aude depuis maintenant 25 ans. <br />
                La nature, la pêche et moi menons une grande histoire d’amour
                depuis que mes jambes m’ont permis de faire mes premiers pas.
              </p>
              <p className="text-lg">
                Découvrez les secrets des meilleurs spots de pêche et
                perfectionnez vos techniques avec un professionnel dévoué à
                votre réussite.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Expertise */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: "Pêche sur l'Aude",
                description:
                  "Maîtrise la rivière Aude sur le bout des doigts de part les nombreuses sessions de pêches pratiquées",
              },
              {
                icon: Fish,
                title: "Pêche du Silure",
                description:
                  "Expert dans la traque des grands moustachus. Venez vous confronter à des combats mémorables.",
              },
              {
                icon: Award,
                title: "Certification",
                description:
                  "Diplôme d'Etat 'BPJEPS' mention 'Pêche de Loisir' obtenu en 2024",
              },
              {
                icon: Users,
                title: "Tous Niveaux",
                description:
                  "Adapte les conseils à tous les niveaux, du débutant à l'expert et pour tous les publics.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-background p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <item.icon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Témoignages */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Témoignages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Marie L.",
                text: "Une expérience inoubliable ! Le guide connaît vraiment son métier et les meilleurs coins de pêche.",
              },
              {
                name: "Thomas R.",
                text: "J'ai appris plus en une journée qu'en des années de pêche en solitaire. Vraiment recommandé !",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-background p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Galerie */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Galerie</h2>
          {carouselImages && carouselImages.length > 0 ? (
            <Carousel className="w-full max-w-3xl mx-auto">
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <motion.div
                      className="p-2"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center justify-center p-4 h-[450px]">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={600}
                          height={450}
                          objectFit="cover"
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md" />
              <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md" />
            </Carousel>
          ) : (
            <p>Aucune image disponible dans la galerie pour le moment.</p>
          )}
        </motion.section>
      </main>
    </div>
  );
}
