'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PricingOption } from '@/app/types/pricing';

export function PricingCard({ option }: { option: PricingOption }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="bg-background rounded-lg shadow-lg overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="px-6 py-8">
        <h3 className="text-2xl font-semibold text-foreground mb-2">{option.name}</h3>
        <p className="text-foreground/60 mb-4">{option.description}</p>
        {isFlipped ? (
          <div className="mt-4">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="py-2"></th>
                  <th className="py-2">Journée</th>
                  <th className="py-2">Demi-journée</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 font-semibold">Adulte</td>
                  <td className="py-2">{option.prices.adult.fullDay}€</td>
                  <td className="py-2">{option.prices.adult.halfDay}€</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Enfant</td>
                  <td className="py-2">{option.prices.child.fullDay}€</td>
                  <td className="py-2">{option.prices.child.halfDay}€</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold">Cliquez pour voir les tarifs</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

