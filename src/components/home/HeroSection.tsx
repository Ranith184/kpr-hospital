"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-accent pt-20 pb-28 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 rounded-l-[100px] -z-10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary leading-tight mb-6"
            >
              Karimnagar&apos;s Most Trusted Multispeciality Hospital
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-text-dark mb-8"
            >
              Advanced Healthcare. Right Here in Karimnagar. 24/7 Emergency | 20+ Specialities | 100+ Expert Doctors
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/appointments"
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:opacity-90 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                Book Appointment <ArrowRight className="w-5 h-5" />
              </Link>

            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="/kpr.png"
              alt="KPR Multispeciality Hospital"
              width={200}
              height={100}
              className="rounded-3xl shadow-2xl object-cover w-full h-auto max-h-[500px]"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
