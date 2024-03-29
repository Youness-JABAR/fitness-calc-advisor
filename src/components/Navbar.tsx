"use client"; // This is a client component 👈🏽

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-dark absolute w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 mr-2"
                src="/images/logo.webp"
                alt="Logo"
              />
            </div>
            <Link href="/" className="text-blue-light text-xl font-bold">
              FitnessCalcAdvisor
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="#" className="text-blue-light hover:bg-blue-dark hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="fitness-calculators" className="text-blue-light hover:bg-blue-dark hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calculators</Link>
                <Link href="workout-plans" className="text-blue-light hover:bg-blue-dark hover:text-white px-3 py-2 rounded-md text-sm font-medium">Workout Plans</Link>
                <Link href="blogs" className="text-blue-light hover:bg-blue-dark hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blogs</Link>
                <Link href="about-us" className="text-blue-light hover:bg-blue-dark hover:text-white px-3 py-2 rounded-md text-sm font-medium">AboutUs</Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-dark focus:outline-none focus:bg-blue-dark focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="#" className="text-gray-300 hover:bg-blue-dark hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link href="fitness-calculators" className="text-gray-300 hover:bg-blue-dark hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calculators</Link>
          <Link href="workout-plans" className="text-gray-300 hover:bg-blue-dark hover:text-white block px-3 py-2 rounded-md text-base font-medium">Workout Plans</Link>
          <Link href="blogs" className="text-gray-300 hover:bg-blue-dark hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blogs</Link>
          <Link href="about-us" className="text-gray-300 hover:bg-blue-dark hover:text-white block px-3 py-2 rounded-md text-base font-medium">AboutUs</Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
