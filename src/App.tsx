/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from '@/src/components/sections/navbar'
import { Hero } from '@/src/components/sections/hero'
import { Solutions } from '@/src/components/sections/solutions'
import { Testimonials } from '@/src/components/sections/testimonials'
import { CTAForm } from '@/src/components/sections/cta-form'
import { Footer } from '@/src/components/sections/footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Simple divider */}
        <div className="h-px bg-zinc-100 max-w-7xl mx-auto" />
        
        <Solutions />
        <Testimonials />
        <CTAForm />
      </main>
      <Footer />
    </div>
  )
}
