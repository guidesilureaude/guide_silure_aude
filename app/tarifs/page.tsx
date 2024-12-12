"use client";

import { PricingCard } from "../../components/PricingCard";
import { pricingOptions } from "@/app/types/pricing";
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
              Découvrez nos différentes prestations et tarifs pour une expérience
              de pêche inoubliable
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {pricingOptions.map((option) => (
                <PricingCard key={option.id} option={option} />
              ))}
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
