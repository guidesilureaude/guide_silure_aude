"use client";

import Header from "@/components/header";
import ContactForm from "@/components/contact-form";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/60 via-primary/50 to-secondary/60 text-foreground">
      {/* Header */}
      <Header />

      {/* Contenu principal */}
      <div className="pt-44 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1
            className="text-6xl text-center mb-8"
            style={{ fontFamily: '"DCC-Ash", sans-serif' }}
          >
            Nos Tarifs
          </h1>
          <p className="text-xl text-center mb-12">
            A vous de choisir votre expérience EXTRÊME !
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Première ligne */}
            <div className="bg-background rounded-lg shadow-lg overflow-hidden">
              <img
                src="/tarif-gsfloat.png"
                alt="Prestation 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-background rounded-lg shadow-lg overflow-hidden">
              <img
                src="/tarif-experience-saumatre.png"
                alt="Prestation 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-background rounded-lg shadow-lg overflow-hidden">
              <img
                src="/tarif-100jeunes.png"
                alt="Prestation 3"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Deuxième ligne */}
            <div className="bg-background rounded-lg shadow-lg overflow-hidden">
              <img
                src="/tarif-anim-silure.png"
                alt="Prestation 4"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-background rounded-lg shadow-lg overflow-hidden">
              <img
                src="/tarif-anim-coup.png"
                alt="Prestation 5"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-background rounded-lg shadow-lg overflow-hidden">
              <img
                src="/tarif-anim-divers.png"
                alt="Prestation 6"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="pt-12 py-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
            Contactez-nous
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
