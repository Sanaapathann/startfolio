"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaInstance = useRef<any>(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    console.log("🚀 Vanta: Initializing with subtle purple lines");

    const instance = NET({
      el: vantaRef.current,
      THREE,
      color: 0xaa71bb,             // Soft purple
      backgroundColor: 0x000A14,   // Deep navy-black
      points: 5.0,                 // ✅ Fewer points → sparser
      spacing: 10.0,               // ✅ More space between points
      maxDistance: 15.0,           // ✅ Shorter connections → smaller nets
      showDots: false,             // ✅ Hide dots completely
      lineWidth: 0.4,              // ✅ Thinner lines (was 0.8)
      waveHeight: 10.0,             // ✅ Smaller wave → calmer motion
      waveSpeed: 0.50,             // ✅ Slower animation
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      scale: 1.0,
      scaleMobile: 1.0,
      blending: "normal",          // ✅ Softer blend (was "add" → too bright)
      colorMode: "lerp",               // ✅ Disable fog for clarity
    });

    vantaInstance.current = instance;

    return () => {
      if (vantaInstance.current?.destroy) {
        console.log("🗑 Vanta: Destroyed");
        vantaInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-20 ">
      {/* 1. Vanta Background */}
      <div
        ref={vantaRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "#021526" }}
      />

      {/* 2. Ultra-Subtle Glass Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
  style={{
    background: 'rgba(0, 3, 8, 0.3)', // Deep near-black with slight transparency
    backdropFilter: 'blur(12px)',     // Slightly stronger blur for smoother glass
    WebkitBackdropFilter: 'blur(12px)', // For Safari support
    border: '1px solid rgba(70, 30, 80, 0.1)', // Subtle purple-tinged border, very faint
    boxShadow: `
      inset 0 0 30px rgba(10, 10, 20, 0.08),   // Soft inner glow for depth
      0 0 20px rgba(0, 0, 0, 0.1)             // Outer ambient shadow for float
    `,
    mask: 'linear-gradient(180deg, rgba(0,0,0,1) 10%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,1) 90%)',
    opacity: 1, // Overall smoothness
    zIndex: 1,
  }}
      />

      {/* 3. Optional: Very Faint Noise Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-3"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.1\'/%3E%3C/svg%3E")'
        }}
      />
    </div>
  );
}