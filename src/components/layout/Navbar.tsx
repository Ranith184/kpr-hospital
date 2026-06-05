import Link from "next/link";
import Image from "next/image";
import { Phone, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm transition-all duration-300">
      {/* Top Emergency Bar */}


      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo Area */}
          <Link href="/" className="flex items-center transition-transform hover:scale-105 duration-300">
            <Image
              src="/logo.png"
              alt="KPR Hospital Logo"
              width={200}
              height={100}
              className="w-auto h-auto max-h-100 object-contain"
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
            {/* <Link
              href="/appointments"
              className="hidden md:inline-flex items-center justify-center bg-secondary hover:opacity-90 text-white px-8 py-3 rounded-full font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-300"
            >
              Book Appointment
            </Link> */}
            <a href="tel:+919999999999" className="md:hidden text-primary bg-blue-50 p-2 rounded-full">
              <Phone className="w-5 h-5" />
            </a>
            <button className="md:hidden text-text-dark p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
