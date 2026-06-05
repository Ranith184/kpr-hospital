"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Keep track of whether the splash screen has played in the current tab session.
// This module-level variable persists across client-side navigation but resets on a page refresh/reload.
let hasPlayedSplash = false;

export default function SplashScreen() {
  const [show, setShow] = useState(!hasPlayedSplash);

  // Fallback timeout to limit video duration to exactly 6 seconds
  useEffect(() => {
    if (hasPlayedSplash) {
      return;
    }

    // Set the flag to true immediately on mount so subsequent renders/navigation skips it
    hasPlayedSplash = true;

    const timer = setTimeout(() => {
      setShow(false);
    }, 6000); // Max 6 seconds before hiding
    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnd = () => {
    setShow(false);
    hasPlayedSplash = true;
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center overflow-hidden"
        >
          <video
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="w-full h-full object-contain md:object-cover bg-white"
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/intro.mp4`}
          >
            Your browser does not support the video tag.
          </video>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
