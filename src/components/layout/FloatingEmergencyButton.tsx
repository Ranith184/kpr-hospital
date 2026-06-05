"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function FloatingEmergencyButton() {
  return (
    <motion.a
      href="tel:+919999999999"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-center gap-2 md:gap-3 bg-gradient-to-r from-red-600 to-red-500 text-white px-3 py-2 md:px-5 md:py-3 rounded-full shadow-[0_8px_30px_rgb(220,38,38,0.4)] hover:shadow-[0_8px_30px_rgb(220,38,38,0.6)] transition-all border md:border-2 border-white"
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="bg-white text-red-600 p-1.5 md:p-2 rounded-full shadow-inner animate-pulse">
        <Phone className="w-4 h-4 md:w-5 md:h-5" />
      </div>
      <span className="font-bold tracking-wide text-sm md:text-lg mr-1">Emergency</span>
    </motion.a>
  );
}
