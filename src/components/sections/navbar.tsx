import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/src/lib/utils'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'SOLUSI', href: '#solusi' },
    { name: 'TEKNOLOGI', href: '#teknologi' },
    { name: 'KLIEN', href: '#klien' },
  ]

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        isScrolled ? 'bg-white/80 backdrop-blur-md border-zinc-200 py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex items-center justify-between">
        <a href="/" className="text-2xl font-black tracking-tighter text-zinc-950">
          LOXIS<span className="text-indigo-600">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-black tracking-[0.2em] text-zinc-500 hover:text-indigo-600 transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-zinc-950 text-white px-8 py-3 text-[11px] font-black tracking-[0.2em] hover:bg-indigo-600 transition-all rounded-sm"
          >
            HUBUNGI KAMI
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-zinc-950"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-200 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold tracking-widest text-zinc-600 uppercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-zinc-950 text-white px-6 py-3 rounded-xl text-center text-sm font-bold tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HUBUNGI KAMI
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
