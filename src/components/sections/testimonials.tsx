import { motion } from 'motion/react'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Budi Santoso',
    role: 'CEO Kedai Kopi Makmur',
    quote: 'Loxis benar-benar memangkas waktu kerja admin kami. Sekarang 90% chat terjawab otomatis tanpa kesalahan.',
    rating: 5
  },
  {
    name: 'Sari Wijaya',
    role: 'Owner Butik Pesona',
    quote: 'Interface yang sangat bersih dan mudah dikonfigurasi. Customer kami merasa dilayani secara premium 24 jam.',
    rating: 5
  },
  {
    name: 'Hadi Yusuf',
    role: 'Founder TechUp Indonesia',
    quote: 'Teknologi RAG mereka sangat impresif. Bot paham detail produk teknis dengan akurasi yang luar biasa.',
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section id="klien" className="py-24 bg-white px-6 md:px-16 lg:px-24 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-zinc-950 tracking-tighter">
            Dipercaya oleh <br/>
            <span className="italic font-light text-indigo-600 underline underline-offset-[12px] decoration-indigo-100">Ratusan</span> UMKM
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-50 p-10 border-l-[6px] border-indigo-600 shadow-sm relative group"
            >
              <div className="absolute top-10 right-10 text-6xl text-indigo-100 font-serif opacity-50 group-hover:opacity-100 transition-opacity duration-500">“</div>
              <div className="flex gap-1 mb-8">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <p className="text-zinc-500 italic mb-10 leading-relaxed text-base font-medium">"{item.quote}"</p>
              <div>
                <p className="font-black text-zinc-950 text-sm tracking-tight">{item.name}</p>
                <p className="text-[10px] text-zinc-400 font-black tracking-[0.2em] uppercase mt-1">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
