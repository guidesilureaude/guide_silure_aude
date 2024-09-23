import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ModeToggle } from './toggle.mode';
import { Navbar } from './navbar';

const Header = () => {
  return (
    <div className='h-full w-full p-4 flex items-center justify-between'>
      {/* Icône burger pour petits écrans */}
      <div className='lg:hidden flex items-center'>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <div className='text-2xl cursor-pointer'>☰</div>
            </MenubarTrigger>
            <MenubarContent>
                <MenubarItem>
                    <Link href="/votre-guide" passHref>
                        Votre guide
                    </Link>
                </MenubarItem>
                <MenubarItem>
                    <Link href="/prestations" passHref>
                        Prestations
                    </Link>
                </MenubarItem>
                <MenubarItem>
                    <Link href="/tarifs" passHref>
                    Tarifs
                    </Link>
                </MenubarItem>
                <MenubarItem>
                    <Link href="/contact" passHref>
                    Contact
                    </Link>
                </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      {/* Logo à gauche pour grands écrans */}
      <div className='hidden lg:flex flex-shrink-0'>
        <Link href="/" passHref>
          <Image 
            src="/logo.png" 
            alt="logo" 
            width={100} 
            height={100} 
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/* Navbar pour grands écrans */}
      <div className='hidden lg:flex flex-grow justify-center'>
        <Navbar />
      </div>

      {/* Icônes de connexion, panier et mode */}
      <div className='relative flex items-center space-x-4'>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header