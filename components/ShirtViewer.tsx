"use client";

import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Float,
} from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

/* ── Rotating shirt mesh ── */
function ShirtMesh({ color }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <group>
        {/* Body */}
        <mesh ref={meshRef} castShadow>
          <boxGeometry args={[2.4, 2.8, 0.12]} />
          <meshStandardMaterial
            color={color}
            roughness={0.7}
            metalness={0.05}
          />
        </mesh>

        {/* Left sleeve */}
        <mesh position={[-1.65, 0.7, 0]} rotation={[0, 0, -0.5]} castShadow>
          <boxGeometry args={[1.1, 0.7, 0.1]} />
          <meshStandardMaterial color={color} roughness={0.7} metalness={0.05} />
        </mesh>

        {/* Right sleeve */}
        <mesh position={[1.65, 0.7, 0]} rotation={[0, 0, 0.5]} castShadow>
          <boxGeometry args={[1.1, 0.7, 0.1]} />
          <meshStandardMaterial color={color} roughness={0.7} metalness={0.05} />
        </mesh>

        {/* Collar */}
        <mesh position={[0, 1.35, 0.01]} castShadow>
          <torusGeometry args={[0.38, 0.1, 12, 32, Math.PI]} />
          <meshStandardMaterial color={color} roughness={0.8} />
        </mesh>

        {/* Cyan emissive logo panel */}
        <mesh position={[0, 0.1, 0.075]}>
          <planeGeometry args={[1.2, 0.9]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={0.6}
            transparent
            opacity={0.15}
            roughness={0.3}
          />
        </mesh>
      </group>
    </Float>
  );
}

/* ── Rotating grid ring ── */
function GridRing() {
  const ringRef = useRef<THREE.Mesh>(null!);
  useFrame((_, d) => {
    ringRef.current.rotation.y += d * 0.3;
    ringRef.current.rotation.x += d * 0.05;
  });
  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[3.2, 0.015, 8, 80]} />
      <meshStandardMaterial
        color="#06b6d4"
        emissive="#06b6d4"
        emissiveIntensity={1.5}
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

/* ── Main exported component ── */
const colorOptions = [
  { label: "CARBON", hex: "#1a1a2e" },
  { label: "CRIMSON", hex: "#7f1d1d" },
  { label: "NAVY", hex: "#1e3a5f" },
  { label: "OLIVE", hex: "#3d4a1f" },
  { label: "BURGUNDY", hex: "#4a0e1e" },
  { label: "SLATE", hex: "#334155" },
];

export default function ShirtViewer() {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);
  const [isRotating, setIsRotating] = useState(true);

  return (
    <section
      id="customiser"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0e17 0%, #0d1420 50%, #0a0e17 100%)" }}
    >
      {/* Animated grid bg */}
      <div className="absolute inset-0 cyber-grid opacity-40 pointer-events-none" aria-hidden />

      {/* Glow orbs */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ── Left: Text + Controls ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#06b6d4]" />
              <span
                className="text-[10px] tracking-[0.3em] text-[#06b6d4] uppercase"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                INTERACTIVE 3D VIEWER
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl font-black tracking-[-0.02em] text-[#f8fafc] leading-none mb-4"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              CUSTOM{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(90deg, #06b6d4, #f8fafc)" }}
              >
                3D
              </span>
              <br />
              DROP BUILDER
            </h2>

            <p
              className="text-[#94a3b8] text-sm leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              Rotate, inspect, and colour your ZENZ drop before you order.
              360° WebGL powered preview — drag to spin the shirt, pinch
              to zoom. Custom colourway orders dispatched within 72 hours.
            </p>

            {/* Color Picker */}
            <div className="mb-8">
              <div
                className="text-[9px] tracking-[0.25em] text-[#475569] mb-3 uppercase"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                SELECT COLOURWAY
              </div>
              <div className="flex flex-wrap gap-2">
                {colorOptions.map((c) => (
                  <button
                    key={c.label}
                    onClick={() => setSelectedColor(c)}
                    className="flex items-center gap-2 px-3 py-2 text-[10px] font-medium tracking-[0.1em] transition-all duration-200"
                    style={{
                      fontFamily: "var(--font-orbitron)",
                      border:
                        selectedColor.label === c.label
                          ? "1px solid #06b6d4"
                          : "1px solid rgba(30,41,59,0.8)",
                      background:
                        selectedColor.label === c.label
                          ? "rgba(6,182,212,0.08)"
                          : "transparent",
                      color:
                        selectedColor.label === c.label ? "#06b6d4" : "#94a3b8",
                      boxShadow:
                        selectedColor.label === c.label
                          ? "0 0 8px rgba(6,182,212,0.2)"
                          : "none",
                    }}
                  >
                    <span
                      className="w-3 h-3 rounded-full border border-white/20 shrink-0"
                      style={{ background: c.hex }}
                    />
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Controls info */}
            <div
              className="p-4 border border-[rgba(6,182,212,0.15)] bg-[#111827] mb-8 relative"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#06b6d4]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#06b6d4]" />
              <div
                className="text-[9px] tracking-[0.2em] text-[#06b6d4] mb-2"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                VIEWER CONTROLS
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px] text-[#94a3b8]">
                <div>🖱 <strong>Drag</strong> — rotate</div>
                <div>🖱 <strong>Scroll</strong> — zoom</div>
                <div>👆 <strong>Touch</strong> — drag to spin</div>
                <div>🤏 <strong>Pinch</strong> — zoom in/out</div>
              </div>
            </div>

            {/* Auto-rotate toggle */}
            <button
              onClick={() => setIsRotating((v) => !v)}
              className="flex items-center gap-3 text-xs text-[#94a3b8] hover:text-[#06b6d4] transition-colors mb-8"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              <div
                className="w-10 h-5 rounded-full relative transition-colors duration-300"
                style={{ background: isRotating ? "#06b6d4" : "#1e293b", border: "1px solid rgba(6,182,212,0.3)" }}
              >
                <div
                  className="absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all duration-300"
                  style={{ left: isRotating ? "calc(100% - 18px)" : "2px" }}
                />
              </div>
              AUTO-ROTATE {isRotating ? "ON" : "OFF"}
            </button>

            <button
              className="group relative flex items-center gap-3 px-8 py-4 bg-[#ff5500] text-[#f8fafc] font-bold text-xs tracking-[0.1em] hover:shadow-[0_0_25px_rgba(255,85,0,0.4)] transition-all duration-300 overflow-hidden"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                ORDER CUSTOM DROP — A$69.95
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </button>
          </motion.div>

          {/* ── Right: 3D Canvas ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            {/* Canvas wrapper with HUD border */}
            <div
              className="relative w-full aspect-square"
              style={{
                border: "1px solid rgba(6,182,212,0.3)",
                boxShadow: "0 0 40px rgba(6,182,212,0.1), inset 0 0 40px rgba(6,182,212,0.03)",
              }}
            >
              {/* HUD corner pieces */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#06b6d4] z-10" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#06b6d4] z-10" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#ff5500] z-10" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#ff5500] z-10" />

              {/* HUD labels */}
              <div
                className="absolute top-3 left-8 z-10 text-[8px] tracking-[0.2em] text-[#06b6d4]"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                3D PREVIEW // {selectedColor.label}
              </div>
              <div
                className="absolute bottom-3 right-8 z-10 text-[8px] tracking-[0.2em] text-[#ff5500]"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                DRAG TO ROTATE
              </div>

              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center bg-[#0d1420]">
                    <div className="flex flex-col items-center gap-3">
                      <div
                        className="w-10 h-10 border-2 border-[#06b6d4] border-t-transparent rounded-full animate-spin"
                      />
                      <span
                        className="text-[9px] text-[#06b6d4] tracking-[0.2em]"
                        style={{ fontFamily: "var(--font-orbitron)" }}
                      >
                        LOADING 3D...
                      </span>
                    </div>
                  </div>
                }
              >
                <Canvas
                  camera={{ position: [0, 0, 7], fov: 45 }}
                  shadows
                  gl={{ antialias: true, alpha: true }}
                  style={{ background: "transparent" }}
                >
                  <color attach="background" args={["#0d1420"]} />
                  <ambientLight intensity={0.5} />
                  <directionalLight
                    position={[5, 8, 5]}
                    intensity={1.5}
                    castShadow
                    shadow-mapSize={[1024, 1024]}
                  />
                  <pointLight position={[-4, 2, 3]} color="#06b6d4" intensity={1.2} />
                  <pointLight position={[4, -2, -3]} color="#ff5500" intensity={0.6} />
                  <ShirtMesh color={selectedColor.hex} />
                  <GridRing />
                  <ContactShadows
                    position={[0, -3, 0]}
                    opacity={0.5}
                    scale={8}
                    blur={2}
                    far={4}
                  />
                  <Environment preset="city" />
                  <OrbitControls
                    autoRotate={isRotating}
                    autoRotateSpeed={1.5}
                    enablePan={false}
                    minDistance={4}
                    maxDistance={12}
                    enableDamping
                    dampingFactor={0.05}
                  />
                </Canvas>
              </Suspense>
            </div>

            {/* Selected colorway label */}
            <div
              className="mt-4 flex items-center justify-between px-2"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              <span className="text-[10px] text-[#94a3b8]">
                CURRENT COLOURWAY:{" "}
                <span className="text-[#06b6d4]">{selectedColor.label}</span>
              </span>
              <div className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded border border-white/20"
                  style={{ background: selectedColor.hex }}
                />
                <span className="text-[10px] text-[#475569]">{selectedColor.hex}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
