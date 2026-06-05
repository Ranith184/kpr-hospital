"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-28">
          {/* Logo Area */}
          <Link href="/" className="flex items-center transition-transform hover:scale-105 duration-300">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo.png`}
              alt="KPR Hospital Logo"
              width={220}
              height={80}
              className="h-24 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3 font-semibold">
            <Link href="/" className="px-6 py-2.5 rounded-full text-sm border-2 border-primary text-primary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Home
            </Link>
            <Link href="/about" className="px-6 py-2.5 rounded-full text-sm border-2 border-primary text-primary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              About Us
            </Link>
            <Link href="/departments" className="px-6 py-2.5 rounded-full text-sm border-2 border-primary text-primary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Departments
            </Link>
            <Link href="/doctors" className="px-6 py-2.5 rounded-full text-sm border-2 border-primary text-primary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Doctors
            </Link>
            <Link href="/contact" className="px-6 py-2.5 rounded-full text-sm border-2 border-primary text-primary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Contact
            </Link>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-text-dark p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
          <nav className="flex flex-col p-4 space-y-3 font-semibold">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-xl border border-gray-100 text-primary hover:bg-primary hover:text-white transition-all duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-xl border border-gray-100 text-primary hover:bg-primary hover:text-white transition-all duration-200"
            >
              About Us
            </Link>
            <Link
              href="/departments"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-xl border border-gray-100 text-primary hover:bg-primary hover:text-white transition-all duration-200"
            >
              Departments
            </Link>
            <Link
              href="/doctors"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-xl border border-gray-100 text-primary hover:bg-primary hover:text-white transition-all duration-200"
            >
              Doctors
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-xl border border-gray-100 text-primary hover:bg-primary hover:text-white transition-all duration-200"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
