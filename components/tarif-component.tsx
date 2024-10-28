'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: 'Basique',
    price: '49€',
    features: ['Demi-journée', 'Matériel fourni', '1 personne'],
  },
  {
    name: 'Standard',
    price: '99€',
    features: ['Journée complète', 'Matériel fourni', '2 personnes'],
  },
  {
    name: 'Premium',
    price: '149€',
    features: ['Journée complète', 'Repas inclus', '2 personnes + 1 enfant'],
  },
];

export default function DynamicPricing() {
  return (
      <div className="container mx-auto px-4 text-center">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-foreground"
        >
          Nos Tarifs
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-background  backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-2xl transform transition-transform hover:scale-105"
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </motion.div>
              </div>
              <h4 className="text-2xl font-semibold mb-4 mt-8">{plan.name}</h4>
              <p className="text-3xl font-bold text-primary mb-4">{plan.price}</p>
              <ul className="text-lg text-foreground mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center">
                    <span className="mr-2">✔️</span> {feature}
                  </li>
                ))}
              </ul>
              <Button className="bg-primary text-background hover:bg-foreground transition-all w-full">
                Choisir
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
  );
}
