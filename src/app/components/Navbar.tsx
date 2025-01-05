import { useState } from "react";
import Link from "next/link";
import { Twitter, Youtube, Github, Facebook, Linkedin } from "./Socialmedia";  // Make sure this file exists and has the icons defined

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

        {/* Navigation links for desktop */}
        <div className="hidden md:flex md:items-center md:gap-x-6">
          <Link href="/" className="text-dark dark:text-light">
            Home
          </Link>
          <Link href="/Aboutus" className="text-dark dark:text-light">
            About Us
          </Link>
          <Link href="/Contact" className="text-dark dark:text-light">
            Contact
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-x-4">
          <Twitter className="w-6 h-6 text-blue-500" />
          <Youtube className="w-6 h-6 text-red-500" />
          <Github className="w-6 h-6 text-black" />
          <Facebook className="w-6 h-6 text-blue-600" />
          <Linkedin className="w-6 h-6 text-blue-700" />
        </div>

        {/* Hamburger menu (mobile view) */}
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-800 text-white w-full">
          <Link href="/" className="py-2" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/Aboutus" className="py-2" onClick={toggleMenu}>
            About Us
          </Link>
          <Link href="/Contact" className="py-2" onClick={toggleMenu}>
            Contact
          </Link>

          {/* Mobile social media icons */}
          <div className="flex gap-x-4 py-4">
            <Twitter className="w-6 h-6 text-blue-500" />
            <Youtube className="w-6 h-6 text-red-500" />
            <Github className="w-6 h-6 text-black" />
            <Facebook className="w-6 h-6 text-blue-600" />
            <Linkedin className="w-6 h-6 text-blue-700" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
