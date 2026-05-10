import { Instagram, MessageCircle, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-10 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div className="space-y-8">
          <h3 className="text-3xl font-black tracking-tighter">LOXIS<span className="text-indigo-600">.</span></h3>
          <p className="text-zinc-500 text-base leading-relaxed font-medium">
            Premium AI Solutions specifically designed for Indonesian SMEs. Transform your logic into business success.
          </p>
          <div className="flex gap-5">
            <a href="#" className="w-12 h-12 bg-zinc-900 flex items-center justify-center rounded-sm hover:bg-indigo-600 transition-colors border border-zinc-800">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 bg-zinc-900 flex items-center justify-center rounded-sm hover:bg-indigo-600 transition-colors border border-zinc-800">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[11px] font-black tracking-[0.3em] uppercase text-zinc-600 mb-10">Quick Links</h4>
          <ul className="space-y-5 text-sm font-black tracking-[0.1em] uppercase">
            <li><a href="#hero" className="text-zinc-400 hover:text-white transition-colors">Home</a></li>
            <li><a href="#solusi" className="text-zinc-400 hover:text-white transition-colors">Solusi</a></li>
            <li><a href="#teknologi" className="text-zinc-400 hover:text-white transition-colors">Teknologi</a></li>
            <li><a href="#klien" className="text-zinc-400 hover:text-white transition-colors">Testimonial</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 mb-8">Layanan</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><a href="#" className="text-zinc-300 hover:text-white transition-colors">WhatsApp Chatbot</a></li>
            <li><a href="#" className="text-zinc-300 hover:text-white transition-colors">Admin Automation</a></li>
            <li><a href="#" className="text-zinc-300 hover:text-white transition-colors">Custom AI Integration</a></li>
            <li><a href="#" className="text-zinc-300 hover:text-white transition-colors">ROI Analytics</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 mb-8">Hubungi Kami</h4>
          <ul className="space-y-4 text-sm text-zinc-300">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-indigo-500" />
              hello@loxis.id
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle size={16} className="text-indigo-500" />
              +62-812-3456-7890
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-indigo-500" />
              Sudirman, Jakarta Selatan
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-zinc-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold tracking-widest text-zinc-500 uppercase">
        <p>© 2024 LOXIS INDONESIA. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
