"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // Hide footer on the Contact page
  if (pathname === "/contact") {
    return null;
  }
  return (
    <footer className="bg-[#160129] text-white pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & About */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-display">Contact Us</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>KPR Multispeciality Hospital, Karimnagar, Telangana 505001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span><a href="tel:+919999999999" className="hover:text-white transition-colors">+91-9999999999</a> (24/7)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <span><a href="mailto:info@kprhospital.com" className="hover:text-white transition-colors">info@kprhospital.com</a></span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-display">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/doctors" className="hover:text-secondary transition-colors">Our Doctors</Link></li>
              <li><Link href="/departments" className="hover:text-secondary transition-colors">Specialities</Link></li>
              <li><Link href="/appointments" className="hover:text-secondary transition-colors">Book Appointment</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Top Departments */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-display">Top Departments</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/departments/cardiology" className="hover:text-secondary transition-colors">Cardiology</Link></li>
              <li><Link href="/departments/orthopedics" className="hover:text-secondary transition-colors">Orthopedics</Link></li>
              <li><Link href="/departments/neurology" className="hover:text-secondary transition-colors">Neurology</Link></li>
              <li><Link href="/departments/gynecology" className="hover:text-secondary transition-colors">Gynecology</Link></li>
              <li><Link href="/departments/pediatrics" className="hover:text-secondary transition-colors">Pediatrics</Link></li>
            </ul>
          </div>

          {/* Location Map */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-display">Our Location</h3>
            <div className="w-full h-48 rounded-lg overflow-hidden shadow-md bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.813008881658!2d79.12977797442879!3d18.446797371425067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccd91ff68994bb%3A0x28580dd11c6c2394!2sKPR%20Multispeciality%20Hospital!5e0!3m2!1sen!2sin!4v1780634921230!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} KPR Multispeciality Hospital. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
