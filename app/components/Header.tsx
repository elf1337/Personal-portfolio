'use client';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import Mobnav from './Mobnav';

export default function Header() {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  return (
    <header
      className={`${
        header
          ? 'py-4 bg-white shadow-lg'
          : 'py-4 bg-[#fef9f5]'
      } sticky top-0 z-30 transition-all bg-[#fef9f5]`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div>
            <Navbar
              ContainerStyle="hidden md:inline-flex gap-x-8 items-center"
              LinkStyle="relative group"
            />
          </div>
          <div className='md:hidden'>
            <Mobnav/>
          </div>
        </div>
      </div>
    </header>
  );
}
