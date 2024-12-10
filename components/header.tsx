"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ModeToggle } from "./toggle.mode";
import Image from "next/image";
import Link from "next/link"; // Import de Link pour la navigation
import { HiMenu } from "react-icons/hi";
import { Navbar } from "@/components/navbar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full transition-all duration-300 z-50 bg-transparent`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo à gauche avec redirection */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link href="/" passHref>
            <Image
              src="/logo1.png"
              alt="Logo de l'entreprise"
              width={120}
              height={50}
              priority={true}
              className="h-auto w-auto transform scale-150 cursor-pointer"
            />
          </Link>
        </motion.div>

        {/* Navbar */}
        <div className="flex-grow flex justify-center">
          {(!isScrolled || isMenuOpen) && <Navbar />}
        </div>

        {/* Bouton de menu et icônes de mode */}
        <div className="flex items-center space-x-4">
          {isScrolled && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center space-x-2 bg-background border border-primary text-primary px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Toggle Menu"
            >
              <HiMenu className="h-5 w-5" />
              <span>Menu</span>
            </button>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
