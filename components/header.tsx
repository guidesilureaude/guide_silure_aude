"use client";

import React from "react";
import { motion } from "framer-motion";
import { ModeToggle } from "./toggle.mode";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";

const Header = () => {
  return (
    <header className="fixed w-full mt-8 transition-all duration-300 z-50 bg-transparent">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 relative">
        
        {/* Logo fixe à gauche uniquement sur bureau */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block absolute left-4 items-center"
        >
          <Link href="/" passHref>
            <Image
              src="/logo1.png"
              alt="Logo"
              width={120}
              height={50}
              priority={true}
              className="h-auto w-auto transform scale-150 cursor-pointer"
            />
          </Link>
        </motion.div>

        {/* Navbar alignée à gauche uniquement sur mobile */}
        <div className="flex md:hidden absolute left-4 items-center">
          <Navbar />
        </div>

        {/* Navbar centrée uniquement sur bureau */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center">
          <Navbar />
        </div>

        {/* Bouton de mode-toggle aligné à droite */}
        <div className="absolute right-4 flex items-center space-x-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
