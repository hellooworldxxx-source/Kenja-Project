import React from 'react'
import { motion } from 'motion/react'

export function NeuralCore() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(99,102,241,0.1),transparent_70%)] animate-pulse"></div>
      
      {/* Core Sphere */}
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        {/* Outer Ring */}
        <motion.div
           animate={{ rotate: 360 }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="absolute inset-0 border-2 border-dashed border-indigo-500/20 rounded-full"
        />
        
        {/* Middle Ring */}
        <motion.div
           animate={{ rotate: -360 }}
           transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
           className="absolute inset-4 border border-indigo-500/10 rounded-full flex items-center justify-center"
        >
          <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent rotate-45"></div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent -rotate-45"></div>
        </motion.div>

        {/* Floating Particles (Pseudo-3D) */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
              x: Math.cos(i * 60 * Math.PI / 180) * 120,
              y: Math.sin(i * 60 * Math.PI / 180) * 120,
            }}
            transition={{ 
              duration: 4 + i, 
              repeat: Infinity, 
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.8)]"
          />
        ))}

        {/* Central Core */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-32 h-32 bg-indigo-600 rounded-full shadow-[0_0_60px_rgba(99,102,241,0.4)] flex items-center justify-center relative z-10"
          >
            {/* Core Lens Effect */}
            <div className="absolute inset-1 bg-gradient-to-br from-indigo-400 to-indigo-800 rounded-full opacity-50 blur-[2px]"></div>
            <div className="w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm border border-white/20"></div>
          </motion.div>
        </div>

        {/* Scanning Beam */}
        <motion.div
           animate={{ y: [-160, 160] }}
           transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
           className="absolute left-1/2 -translate-x-1/2 w-[200%] h-1 bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent blur-sm z-0"
        />
      </div>

      {/* Floating Status Codes */}
      <div className="absolute bottom-10 left-10 font-mono text-[10px] text-indigo-500/40 space-y-1">
        <p>CORE_PHASE: ACTIVE</p>
        <p>NEURAL_ID: LX-99</p>
        <p>LATENCY: 4MS</p>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
    </div>
  )
}
