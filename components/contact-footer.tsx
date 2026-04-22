'use client'

import { useState } from 'react'

export default function ContactFooter() {
  const [form, setForm] = useState({ naam: '', organisatie: '', bericht: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const fieldClass = 'border border-[#e8e8e8] p-3 w-full text-base md:text-[15px] text-[#111] placeholder:text-[#ccc] focus:border-[#111] focus:outline-none'
  const labelClass = 'block text-[11px] tracking-[0.1em] uppercase text-[#999] mb-1.5'

  return (
    <section id="contact" className="bg-white py-16 md:py-24 border-t border-[#e8e8e8] scroll-mt-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">

          {/* Links — info */}
          <div>
            <p className="text-[11px] tracking-[0.14em] uppercase text-[#999] mb-4">Contact</p>
            <h2
              className="font-black text-[#111] leading-none tracking-tight mb-6"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              Laten we praten.
            </h2>
            <p className="text-[15px] text-[#555] mb-10">
              Een eerste gesprek is altijd vrijblijvend.
            </p>

            <div className="space-y-6">
              <div>
                <p className={labelClass}>Email</p>
                <a
                  href="mailto:mail@wouter.studio"
                  className="text-[14px] text-[#C4714A] hover:opacity-70 transition-opacity duration-200"
                >
                  mail@wouter.studio
                </a>
              </div>
              <div>
                <p className={labelClass}>Telefoon</p>
                <p className="text-[14px] text-[#111]">+31(0)6 16 290 418</p>
              </div>
            </div>
          </div>

          {/* Rechts — formulier */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="naam" className={labelClass}>Naam</label>
              <input
                id="naam"
                name="naam"
                type="text"
                value={form.naam}
                onChange={handleChange}
                placeholder="Jouw naam"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="organisatie" className={labelClass}>Organisatie (optioneel)</label>
              <input
                id="organisatie"
                name="organisatie"
                type="text"
                value={form.organisatie}
                onChange={handleChange}
                placeholder="Jouw organisatie"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="bericht" className={labelClass}>Bericht</label>
              <textarea
                id="bericht"
                name="bericht"
                rows={5}
                value={form.bericht}
                onChange={handleChange}
                placeholder="Waar kan ik je mee helpen?"
                className={`${fieldClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              className="border border-[#111] text-[#111] text-[11px] tracking-[0.08em] uppercase px-7 py-3.5 hover:bg-[#111] hover:text-white transition-colors duration-200 w-full mt-6"
            >
              Verstuur
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}
