'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useAnimation, useInView } from 'framer-motion'
import Header from '@/components/header' // Assurez-vous que le chemin est correct

interface ServiceLayoutProps {
  title: string;
  description: string;
  imageSrc: string;
  additionalImages: string[];
  children: React.ReactNode;
}

export function ServiceLayout({ title, description, imageSrc, additionalImages, children }: ServiceLayoutProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/60 via-primary/50 to-secondary/60 text-foreground">
      {/* Inclusion du Header en haut de la page */}
      <Header />

      {/* Contenu Principal avec un espacement similaire au header */}
      <div className="max-w-7xl mx-auto pt-44 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {description}
          </p>
        </motion.div>
        <div className="mt-10 flex flex-col lg:flex-row">
          <div className="lg:w-2/3 lg:pr-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={imageSrc}
                alt={title}
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
              }}
              className="mt-10"
            >
              {children}
            </motion.div>
          </div>
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <div className="sticky top-8 space-y-8">
              {additionalImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Image
                    src={img}
                    alt={`Additional image ${index + 1}`}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ajout de l'espacement avant le footer */}
      <div className="mt-16 py-8"></div>
    </div>
  )
}
