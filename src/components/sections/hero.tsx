import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { SplineScene } from '@/src/components/ui/spline-scene'
import { Spotlight } from '@/src/components/ui/spotlight'
import ErrorBoundary from '@/src/components/ErrorBoundary'
import { NeuralCore } from '@/src/components/ui/neural-core'

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-0 flex flex-col md:flex-row overflow-hidden bg-white">
      {/* Background decoration */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 opacity-30" fill="#6366f1" />
      
      {/* Left Column: Content */}
      <div className="w-full md:w-1/2 flex items-center px-6 md:px-16 lg:px-24 z-10 py-16 md:py-0 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-24 bg-indigo-600 hidden md:block"></div>
        
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="text-[11px] font-black tracking-[0.3em] text-indigo-600 uppercase">
              PREMIUM AI SOLUTIONS FOR INDONESIA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-zinc-950 mb-8 tracking-tighter"
          >
            Logic Sebagai <br/>
            <span className="italic font-light text-indigo-600 underline decoration-indigo-100 underline-offset-8">Pusat Kesuksesan</span> <br/>
            Bisnis Anda
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-500 mb-12 leading-relaxed font-medium"
          >
            AI Chatbot & Automation cerdas untuk UMKM Indonesia. Tingkatkan efisiensi bisnis Anda hingga 80% hari ini.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <button className="bg-zinc-950 text-white flex items-center justify-center gap-3 px-10 py-5 text-sm font-black tracking-widest uppercase hover:bg-indigo-600 transition-all group rounded-sm shadow-xl shadow-zinc-950/20">
              LIHAT DEMO <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white text-zinc-950 border-2 border-zinc-950 px-10 py-5 text-sm font-black tracking-widest uppercase hover:bg-zinc-50 hover:border-indigo-600 hover:text-indigo-600 transition-all rounded-sm">
              HUBUNGI KAMI
            </button>
          </motion.div>
        </div>
      </div>

      {/* Right Column: 3D Visualization */}
      <div className="w-full md:w-1/2 relative min-h-[500px] md:min-h-0 bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
        {/* Abstract Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-[140px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-[140px] opacity-10"></div>
        
        {/* Stable 3D Visualization */}
        <div className="w-full h-full relative z-10">
          <ErrorBoundary fallback={
            <div className="w-full h-full flex items-center justify-center bg-[#0a0a0a] flex-col p-10 text-center">
              <h3 className="text-white font-black text-lg mb-2 tracking-tight uppercase">System Offline</h3>
              <p className="text-zinc-500 text-xs font-medium max-w-xs">Connecting to backup core...</p>
            </div>
          }>
            <NeuralCore />
          </ErrorBoundary>
        </div>

        {/* Stats Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-12 right-12 z-20 bg-white p-8 shadow-2xl flex space-x-10 rounded-sm"
        >
          <div>
            <p className="text-3xl font-black text-indigo-600 tracking-tighter">98%</p>
            <p className="text-[10px] font-black text-zinc-400 tracking-[0.2em] uppercase">ACCURACY</p>
          </div>
          <div className="w-px h-12 bg-zinc-100"></div>
          <div>
            <p className="text-3xl font-black text-indigo-600 tracking-tighter">24/7</p>
            <p className="text-[10px] font-black text-zinc-400 tracking-[0.2em] uppercase">ACTIVE</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
