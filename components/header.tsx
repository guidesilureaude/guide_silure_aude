"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ModeToggle } from "./toggle.mode";
import Image from "next/image"; // Import de l'image
import { HiMenu } from "react-icons/hi"; // Import d'une icône de menu

const Header = () => {
  // Détection du scroll
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour contrôler l'ouverture du menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full transition-all duration-300 z-50 bg-transparent`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo à gauche */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center" // Garde le logo à gauche
        >
          <Image
            src="/logo1.png"
            alt="Logo de l'entreprise"
            width={120}
            height={50}
            priority={true}
            className="h-auto w-auto transform scale-150"
          />
        </motion.div>

        {/* Navigation centrée */}
        <div className="flex-grow flex justify-center">
          {(!isScrolled || isMenuOpen) && (
            <nav>
              <ul className="flex space-x-6">
                {["Accueil", "Fonctionnalités", "Tarifs", "Contact"].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-foreground hover:text-primary transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          )}
        </div>

        {/* Bouton de menu et icônes de mode */}
        <div className="flex items-center space-x-4">
          {isScrolled && ( // Afficher le bouton Menu uniquement après le scroll
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="flex items-center space-x-2 bg-background border border-primary text-primary px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Toggle Menu"
            >
              <HiMenu className="h-5 w-5" /> {/* Icône à côté du texte */}
              <span>Menu</span> {/* Texte du bouton */}
            </button>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;