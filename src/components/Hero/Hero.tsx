"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";
export default function Hero() {
  const [activeItem, setActiveItem] = useState<keyof typeof itemContents | null>(null);

  const menuItems: { id: keyof typeof itemContents; label: string }[] = [
    { id: "features", label: "Features" },
    { id: "contact", label: "Contact" },
    { id: "about", label: "About" }
  ];

  const itemContents = {
    features: (
      <p className="text-white/80 mt-2">
        Our platform offers tools for networking, funding, and growth to help your startup thrive.
      </p>
    ),
    contact: (
      <p className="text-white/80 mt-2">
        Reach out to us at info@emperato.com or join our community forum.
      </p>
    ),
    about: (
      <p className="text-white/80 mt-2">
        Emperato is a startup ecosystem designed to help founders build their empires.
      </p>
    )
  };

  return (
    <section className="relative px-6 min-h-screen flex flex-col">
      <div className="flex flex-col justify-between flex-grow z-10">
        {/* Top Row */}
        <div className="flex justify-between items-start px-2 sm:px-6 pt-6">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3"
          >
            {/* Replace the dot with Image component */}
            <div className="relative w-7 h-7">
              <Image
                src="/logo/logo-icon.png"
                alt="Emperato Logo"
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            <span className="text-white font-bold text-lg tracking-wider">
              EMPERATO
            </span>
          </motion.div>

          {/* Static tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-sm text-white/80 font-medium"
          >
            From Idea to Empire
          </motion.div>
        </div>

        {/* Bottom Content */}
        <div className="flex justify-between items-end px-2 sm:px-6 pb-10 flex-wrap gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="max-w-xl"
          >
            <div className="text-sm text-blue-200 mb-4 font-mono">
              STARTUP ECOSYSTEM
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4 leading-tight">
              Build your <span className="text-blue-200">empire</span>
              <br />
              from the ground up
            </h1>
            <p className="text-base text-white/80 mb-6">
              Connect with investors, co-founders, and talent in our curated
              startup network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#features" passHref>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2 bg-white text-gray-900 font-medium rounded-md transition-all"
                >
                  Start Building
                </motion.button>
              </Link>
              <Link href="#contact" passHref>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2 border border-white/20 text-white font-medium rounded-md hover:bg-white/5 transition-all"
                >
                  Explore Startups
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom-right FAQ-style menu */}
      <div className="fixed bottom-6 right-6 z-50 w-64">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="border-b border-white/10 last:border-0"
            >
              <motion.button
                onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
                className="w-full flex justify-between items-center py-3 text-white/90 hover:text-white transition-colors"
              >
                <span className="font-medium text-sm">{item.label}</span>
                <motion.span
                  animate={{ rotate: activeItem === item.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiChevronDown className="text-white/60" />
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {activeItem === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    {itemContents[item.id]}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}