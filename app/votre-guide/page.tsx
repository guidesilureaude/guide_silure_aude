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
  { src: "/carroussel1.jpg", alt: "Pêcheur en action" },
  { src: "/carroussel2.jpg", alt: "Belle prise du jour" },
  { src: "/carroussel3.jpg", alt: "Paysage de pêche" },
  { src: "/test2.jpg", alt: "Paysage de pêche" },
  { src: "/carroussel7.jpg", alt: "Paysage de pêche" },
  { src: "/carroussel6.jpg", alt: "Paysage de pêche" },
];

export default function VotreGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/60 via-primary/50 to-secondary/60 text-foreground">
      {/* Header fixé en haut de la page */}
      <Header />

      {/* Section de l'image de couverture */}
      <motion.div
        className="relative h-[50vh] sm:h-[60vh] md:h-[70vh]  overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/votre-guide_couverture.jpg"
          alt="Guide de pêche en action"
          fill={true}
          className="object-cover w-full h-full"
        />
      </motion.div>
      {/* Contenu principal */}
      <main className="container mx-auto px-2 py-12">
        {/* À propos */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl mb-6" style={{ fontFamily: '"DCC-Ash", sans-serif' }}>A Propos de Votre Guide</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="-ml-40"
            >
              <Image
                src="/alex4.png"
                alt="Portrait du guide"
                width={1000}
                height={300}
               
              />
            </motion.div>
            <div>
              <p className="text-lg mb-4 leading-relaxed text-justify">
                Je me nomme <strong>Alexis Boreau</strong>, un pur produit de l’Aude depuis maintenant 25 ans.
                <br />
                La nature, la pêche et moi menons une grande histoire d’amour depuis que mes jambes m’ont permis de faire mes premiers pas.
              </p>
              <p className="text-lg mb-4 leading-relaxed text-justify">
                Cet amour du monde extérieur m’est venu grâce à mes grands-parents. J’ai pu découvrir les reptiles, les insectes, les oiseaux, ainsi que la flore locale, 
                pour ensuite être initié à la pêche de loisir.
              </p>
              <p className="text-lg mb-4 leading-relaxed text-justify">
                Comme nous tous, j&apos;ai commencé par la pêche au coup avec un bambou, du nylon et un hameçon. 
                J’ai rapidement évolué dans le milieu de la pêche de loisir en ciblant par la suite les carnassiers avec la pêche du sandre et du brochet sous toutes ses formes, 
                avant de tomber amoureux du plus gros poisson d’eau douce !
              </p>
              <p className="text-lg mb-4 leading-relaxed text-justify">
                Un jour, vient le drame : je perds un de mes meilleurs amis dans un accident de voiture et tombe dans une dépression. 
                La seule façon pour moi de me sentir à nouveau vivant à l’intérieur de moi était de pratiquer la pêche au moindre moment de temps libre.
              </p>
              <p className="text-lg mb-4 leading-relaxed text-justify">
                Le midi à la pause déjeuner au travail, le soir en sortant du travail, et quelquefois même le matin avant d’aller travailler. 
                C’est là que j’ai pris conscience des bienfaits de la pêche et que je devais partager ça avec vous, mes chers clients.
              </p>
              <p className="text-lg mb-4 leading-relaxed text-justify">
                Je me suis donc lancé en février 2024 : j’ai tout plaqué pour devenir moniteur, animateur et guide de pêche pour l’année 2025.
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
          <h2 className="text-5xl mb-6" style={{ fontFamily: '"DCC-Ash", sans-serif' }}>Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Cartes existantes */}
            {[
              {
                icon: MapPin,
                title: "L'Aude, mon terrain de jeu",
                description:
                  "De nombreuses années d'études et de prospections sur le fleuve Aude, me permettent à ce jour de vous faire découvrir les meilleurs spots sauvages et peu péchés.",
              },
              {
                icon: Fish,
                title: "La traque du spécimen",
                description:
                  "Spécialisé dans la pêche du silure avec comme technique de prédilection le 'Clonk teaser', je pratique également les pêches plus traditionnelles comme le 'cassant'. En 2024 j'ai également inscrit un record de 261 cm sur l'Aude.",
              },
              {
                icon: Award,
                title: "Certification",
                description:
                  "Diplômé d'Etat BPJEPS mention 'pêche de loisirs' obtenu le 25/11/2024.",
              },
              {
                icon: Users,
                title: "Tous Niveaux",
                description:
                  "Adapte les conseils à tous niveaux, du débutant au confirmé et pour tous les publics.",
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
            <div className="flex items-center justify-center mt-9 mb-16">
              <motion.div
                className="bg-background p-4 rounded-lg shadow-md w-full max-w-md text-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/photojournal.jpg"
                  alt="Article de journal parlant du guide"
                  width={500}
                  height={300}
                  className="rounded-lg mb-4 w-full"
                />
                <h3 className="text-xl font-semibold mb-2">Parution dans le journal</h3>
                <p className="mb-4">
                  Découvrez l&apos;article qui met en lumière mon parcours et ma passion pour la pêche.
                </p>
                <a
                  href="https://www.lindependant.fr/2024/10/25/cest-un-record-apres-un-combat-titanesque-il-peche-un-silure-geant-de-plus-de-2-m-60-12284133.php?fbclid=IwZXh0bgNhZW0CMTEAAR1VWpRNiJq1vPRoKx3npDgnbyEshFFMcuiXq5YbMlUYUhSrTRYcB6zuX7Y_aem_YNQaZLD3GpkVS60Nsd3G6Q&deeplink_ref_surface=instagram_direct&direct_share_include_copy=1&fb_entity_type=unknown#g2m88ify288l1v803tvu5wcwkblepaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  Lire l&apos;article complet
                </a>
              </motion.div>
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
          <h2 className="text-5xl mb-6" style={{ fontFamily: '"DCC-Ash", sans-serif' }}>Ils témoignent</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Martin L.",
                text: "C'était ma première expérience à la pêche du silure au clonk teaser, et c'était vraiment une journée exceptionnelle en compagnie d’Alexis ! Grâce à son expertise et son approche passionnée, j’ai vécu une expérience de pêche au silure inoubliable. Il a su trouver les meilleurs spots et m’a guidé avec des conseils précis qui ont fait toute la différence. " ,
              },
              {
                name: "Jérémy S.",
                text: "Grâce à ses conseils et à sa parfaite connaissance des lieux, nous avons eu de nombreuses touches, de superbes poissons, et même un silure impressionnant de 2 m ! Ce guide ne se contente pas de vous faire pêcher, il transmet sa passion avec une énergie communicative. Je recommande à 100 % pour une expérience mémorable !",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-background p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mb-4 italic">&quot;{testimonial.text}&quot;</p>
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
          <h2 className="text-5xl mb-6" style={{ fontFamily: '"DCC-Ash", sans-serif' }}>Vos plus beaux sourires</h2>
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