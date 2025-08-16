"use client";

import Hero from "@/components/Hero/Hero";
import VantaBackground from "@/components/VantaBackground/VantaBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <VantaBackground />
      </div>

      {/* Page Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <title>Emperato</title>
        <section id="hero" className="w-full">
          <Hero />
        </section>
      </main>
    </div>
  );
}
