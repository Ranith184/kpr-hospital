"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function FloatingEmergencyButton() {
  return (
    <motion.a
      href="tel:+919999999999"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-500 text-white px-5 py-3 rounded-full shadow-[0_8px_30px_rgb(220,38,38,0.4)] hover:shadow-[0_8px_30px_rgb(220,38,38,0.6)] transition-shadow border-2 border-white"
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="bg-white text-red-600 p-2 rounded-full shadow-inner animate-pulse">
        <Phone className="w-5 h-5" />
      </div>
      <span className="font-bold tracking-wide text-lg mr-1">Emergency</span>
    </motion.a>
  );
}
