'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='w-full p-4 flex flex-col lg:flex-row items-center justify-between bg-background text-foreground'>
      {/* Left Section: FlipIt Text */}
      <div className='mb-4 lg:mb-0 lg:flex-1 flex justify-center lg:justify-start'>
        <span className='text-2xl lg:text-3xl font-extrabold tracking-wider'>Guide silure Aude</span>
      </div>

      {/* Center Section: Social Media Links */}
      <div className='lg:flex-1 flex justify-center'>
        <div className='flex space-x-4'>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-transform duration-300 ease-out transform-gpu will-change-transform'>
            <Facebook className='h-6 w-6' />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-transform duration-300 ease-out transform-gpu will-change-transform'>
            <Twitter className='h-6 w-6' />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-transform duration-300 ease-out transform-gpu will-change-transform'>
            <Instagram className='h-6 w-6' />
          </Link>
        </div>
      </div>

      {/* Right Section: Contact, About Us, Privacy */}
      <div className='lg:flex-1 flex justify-center lg:justify-end'>
        <div className='flex space-x-4'>
          <Link href="/contact" className='hover:scale-110 transition-transform duration-300 ease-out transform-gpu will-change-transform'>Contact</Link>
          <Link href="/about" className='hover:scale-110 transition-transform duration-300 ease-out transform-gpu will-change-transform'>About me</Link>
          <Link href="/privacy" className='hover:scale-110 transition-transform duration-300 ease-out transform-gpu will-change-transform'>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
