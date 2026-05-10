import React, { useState } from 'react'
import { motion } from 'motion/react'
import { CheckCircle2, Send } from 'lucide-react'

export function CTAForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-indigo-700 to-indigo-900 px-6 md:px-16 lg:px-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20 px-4">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-none tracking-tighter">
            Siap <span className="italic font-light text-indigo-300">Transformasi</span> <br/>
            Bisnis Anda?
          </h2>
          <p className="text-indigo-100 text-xl font-medium opacity-80 max-w-2xl mx-auto leading-relaxed">
            Tim kami akan mendesain solusi AI terbaik untuk industri Anda. Mulai efisiensi hingga 80% hari ini.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-10 md:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] rounded-sm"
        >
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16 text-center"
            >
              <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-100">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-4xl font-black text-zinc-950 mb-4 tracking-tight">Terima Kasih!</h3>
              <p className="text-zinc-500 max-w-sm mx-auto text-lg font-medium">
                Pesan Anda telah kami terima. Tim expert kami akan menghubungi Anda dalam waktu 1x24 jam.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[11px] font-black tracking-[0.2em] text-zinc-400 uppercase ml-1">Nama Bisnis</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Kedai Kopi Makmur"
                  className="w-full h-16 bg-zinc-50 border border-zinc-100 rounded-sm px-6 font-medium focus:ring-2 focus:ring-indigo-600 focus:outline-none focus:bg-white transition-all placeholder:text-zinc-300"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-black tracking-[0.2em] text-zinc-400 uppercase ml-1">Nama Pemilik</label>
                <input
                  required
                  type="text"
                  placeholder="Nama Lengkap"
                  className="w-full h-16 bg-zinc-50 border border-zinc-100 rounded-sm px-6 font-medium focus:ring-2 focus:ring-indigo-600 focus:outline-none focus:bg-white transition-all placeholder:text-zinc-300"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-black tracking-[0.2em] text-zinc-400 uppercase ml-1">WhatsApp</label>
                <input
                  required
                  type="tel"
                  placeholder="+62 8xx xxxx xxxx"
                  className="w-full h-16 bg-zinc-50 border border-zinc-100 rounded-sm px-6 font-medium focus:ring-2 focus:ring-indigo-600 focus:outline-none focus:bg-white transition-all placeholder:text-zinc-300"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-black tracking-[0.2em] text-zinc-400 uppercase ml-1">Email</label>
                <input
                  required
                  type="email"
                  placeholder="hello@bisnis.id"
                  className="w-full h-16 bg-zinc-50 border border-zinc-100 rounded-sm px-6 font-medium focus:ring-2 focus:ring-indigo-600 focus:outline-none focus:bg-white transition-all placeholder:text-zinc-300"
                />
              </div>
              <div className="md:col-span-2 space-y-3">
                <label className="text-[11px] font-black tracking-[0.2em] text-zinc-400 uppercase ml-1">Tantangan Bisnis Utama</label>
                <textarea
                  placeholder="Apa kesulitan terbesar Anda saat ini dalam melayani pelanggan?"
                  className="w-full min-h-[160px] bg-zinc-50 border border-zinc-100 rounded-sm p-6 font-medium focus:ring-2 focus:ring-indigo-600 focus:outline-none focus:bg-white transition-all placeholder:text-zinc-300 resize-none"
                />
              </div>
              <button
                disabled={status === 'submitting'}
                type="submit"
                className="md:col-span-2 w-full h-18 bg-zinc-950 text-white font-black tracking-[0.3em] uppercase rounded-sm hover:bg-brand-blue transition-all shadow-2xl active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-4"
              >
                {status === 'submitting' ? 'MENGIRIM...' : (
                  <>MINTA KONSULTASI GRATIS <Send size={20} /></>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
