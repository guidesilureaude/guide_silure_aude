"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Importer l'image du logo
import LogoImage from "/public/logo1.png";

const NavItems = () => (
  <>
    {/* Accueil avec un fond par mot */}
    <Link
      href="/"
      className="text-xl font-semibold transition-colors px-1 py-1 bg-background rounded-md md:hover:bg-secondary"
    >
      Accueil
    </Link>
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center text-xl font-semibold transition-colors px-1 py-1 bg-background rounded-md md:hover:bg-secondary">
        Prestations
        <ChevronDown className="ml-1 h-6 w-6" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href="/prestations/guidage-silure" className="hover:bg-secondary px-2 py-1 rounded-md">
            Guidage Silure
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/prestations/animation-peche-enfants" className="hover:bg-secondary px-2 py-1 rounded-md">
            Animation pêche enfants
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/prestations/animation-peche-au-coup" className="hover:bg-secondary px-2 py-1 rounded-md">
            Animation pêche au coup
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <Link
      href="/votre-guide"
      className="text-xl font-semibold transition-colors px-1 py-1 bg-background rounded-md md:hover:bg-secondary"
    >
      Votre Guide
    </Link>
    <Link
      href="/tarifs"
      className="text-xl font-semibold transition-colors px-1 py-1 bg-background rounded-md md:hover:bg-secondary"
    >
      Tarifs
    </Link>
    <Link
      href="/partenaires"
      className="text-xl font-semibold transition-colors px-1 py-1 bg-background rounded-md md:hover:bg-secondary"
    >
      Partenaires
    </Link>
  </>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="container flex h-20 items-center justify-between px-6 md:px-12">
        {/* Navbar classique pour les écrans larges */}
        <nav className="hidden md:flex items-center space-x-8 justify-center text-xl font-semibold">
          <NavItems />
        </nav>

        {/* Menu mobile ajusté */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="md:hidden px-0 text-lg hover:bg-transparent focus-visible:ring-0"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            {/* Logo plus grand dans la partie mobile */}
            <MobileLink href="/" className="flex items-center p-4">
              <img src={LogoImage.src} alt="Logo" className="h-44 w-auto md:h-16" />
            </MobileLink>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              {/* Ajustement du menu pour avoir un moins large fond */}
              <div className="flex flex-col items-start gap-5">{NavItems()}</div>

            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

interface MobileLinkProps {
  href: string;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({ href, onOpenChange, className, children, ...props }: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => {
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
