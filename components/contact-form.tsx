'use client'

import { useActionState } from 'react'
import { sendContactForm, type FormState } from '@/app/contact/actions'

const initial: FormState = { status: 'idle' }

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContactForm, initial)

  if (state.status === 'success') {
    return (
      <div className="border border-[#e8e8e8] p-8 max-w-[480px]">
        <p className="font-medium text-[#111] mb-2">Bericht ontvangen.</p>
        <p className="text-[15px] text-[#555]">
          Ik neem zo snel mogelijk contact met je op.
        </p>
      </div>
    )
  }

  return (
    <form action={action} className="max-w-[480px] space-y-6">
      <div>
        <label htmlFor="naam" className="block text-[11px] tracking-[0.12em] text-[#999] uppercase font-normal mb-2">
          Naam
        </label>
        <input
          id="naam"
          name="naam"
          type="text"
          required
          autoComplete="name"
          className="w-full border border-[#e8e8e8] bg-white px-4 py-3 text-[15px] text-[#111] placeholder:text-[#bbb] focus:outline-none focus:border-[#111] focus:ring-0 transition-colors"
          placeholder="Je naam"
        />
      </div>

      <div>
        <label htmlFor="organisatie" className="block text-[11px] tracking-[0.12em] text-[#999] uppercase font-normal mb-2">
          Organisatie <span className="normal-case tracking-normal text-[#bbb]">(optioneel)</span>
        </label>
        <input
          id="organisatie"
          name="organisatie"
          type="text"
          autoComplete="organization"
          className="w-full border border-[#e8e8e8] bg-white px-4 py-3 text-[15px] text-[#111] placeholder:text-[#bbb] focus:outline-none focus:border-[#111] focus:ring-0 transition-colors"
          placeholder="Je organisatie"
        />
      </div>

      <div>
        <label htmlFor="bericht" className="block text-[11px] tracking-[0.12em] text-[#999] uppercase font-normal mb-2">
          Bericht
        </label>
        <textarea
          id="bericht"
          name="bericht"
          rows={5}
          required
          className="w-full border border-[#e8e8e8] bg-white px-4 py-3 text-[15px] text-[#111] placeholder:text-[#bbb] focus:outline-none focus:border-[#111] focus:ring-0 transition-colors resize-none"
          placeholder="Vertel me kort wat er speelt"
        />
      </div>

      {state.status === 'error' && (
        <p className="text-[13px] text-[#C4714A]">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-block border border-[#111] bg-transparent text-[#111] text-[13px] tracking-[0.06em] uppercase px-7 py-3.5 hover:bg-[#111] hover:text-white transition-colors duration-200 disabled:opacity-40"
      >
        {pending ? 'Versturen…' : 'Verstuur bericht'}
      </button>
    </form>
  )
}
