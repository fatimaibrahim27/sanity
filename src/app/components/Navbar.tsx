'use client'
import { useState } from "react";
import Link from "next/link";
import SocialMedia from "./Socialmedia";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between py-2 border-b-2 border-accentDarkSecondary sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="text-3xl font-bold text-dark dark:text-light">
          Fatima&apos;s<span className="text-3xl text-accentDarkPrimary">Blog</span>
        </Link>
        <div className="hidden md:flex md:items-center md:gap-x-6">
          <Link href="/" className="text-dark dark:text-light">
            Home
          </Link>
          <Link href="/Aboutus" className="text-dark dark:text-light">
            Aboutus
          </Link>
          <Link href="/Contact" className="text-dark dark:text-light">
            Contact
          </Link>
        </div>
        <SocialMedia />
        <ThemeToggle />
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-800 text-white w-full">
          <Link href="/" className="py-2" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/Aboutus" className="py-2" onClick={toggleMenu}>
            About Us
          </Link>
          <Link href="/contact" className="py-2" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
