"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ModeToggle } from "./toggle.mode";
import Image from "next/image"; // Import de l'image

const Header = () => {
  // Détection du scroll
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full transition-all duration-300 z-50 ${
        isScrolled
          ? "bg-primary/50 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Remplace le texte par le logo PNG */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/logo1.png" // Assurez-vous que l'image est dans le dossier public
            alt="Logo de l'entreprise"
            width={100} // Ajustez les dimensions du logo
            height={50} // Ajustez les dimensions du logo
            priority={true} // Chargement prioritaire
            className="h-auto w-auto"
          />
        </motion.div>

        <nav>
          <ul className="flex space-x-6">
            {["Accueil", "Fonctionnalités", "Tarifs", "Contact"].map(
              (item, index) => (
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
              )
            )}
          </ul>
        </nav>

        {/* Icônes de connexion, panier et mode */}
        <div className="flex items-center space-x-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
