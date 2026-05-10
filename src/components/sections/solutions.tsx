import { motion } from 'motion/react'
import { MessageSquare, Zap, Brain, BarChart3, ArrowRight } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/src/components/ui/card'

const solutions = [
  {
    icon: MessageSquare,
    title: 'Chatbot WhatsApp Cerdas',
    description: 'Jawab pertanyaan pelanggan 24/7 dengan konteks produk Anda secara instan dan akurat.',
    link: '#'
  },
  {
    icon: Zap,
    title: 'Automasi Admin',
    description: 'Input data otomatis dan sinkronisasi pesanan ke spreadsheet tanpa sentuhan manual.',
    link: '#'
  },
  {
    icon: Brain,
    title: 'RAG Technology',
    description: 'Bot yang benar-benar paham spesifikasi produk Anda layaknya sales handal manusia.',
    link: '#'
  },
  {
    icon: BarChart3,
    title: 'Analytics Real-time',
    description: 'Track performa chatbot, konversi penjualan, dan ROI insights dalam satu dashboard.',
    link: '#'
  }
]

export function Solutions() {
  return (
    <section id="solusi" className="py-24 bg-zinc-50 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[11px] font-black tracking-[0.3em] text-indigo-600 uppercase mb-4 block">
            EFEKTIVITAS MAKSIMAL
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-950 mb-8 tracking-tighter">
            Solusi <span className="italic font-light text-indigo-600">Lengkap</span> untuk Bisnis Anda
          </h2>
          <div className="h-2 w-32 bg-indigo-600" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group rounded-sm overflow-hidden bg-white">
                <CardHeader className="p-8">
                  <div className="w-16 h-16 bg-zinc-50 flex items-center justify-center mb-8 border border-zinc-100 group-hover:bg-indigo-600 transition-colors duration-500">
                    <item.icon size={32} className="text-indigo-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <CardTitle className="text-2xl font-black mb-4 tracking-tight">{item.title}</CardTitle>
                  <CardDescription className="text-zinc-500 leading-relaxed font-medium">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="p-8 pt-0">
                  <a href={item.link} className="flex items-center gap-3 text-[11px] font-black tracking-[0.2em] text-indigo-600 uppercase group/link">
                    PELAJARI <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
