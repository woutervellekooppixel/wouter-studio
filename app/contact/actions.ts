'use server'

import { Resend } from 'resend'

export type FormState =
  | { status: 'idle' }
  | { status: 'success' }
  | { status: 'error'; message: string }

export async function sendContactForm(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const naam = (formData.get('naam') as string)?.trim()
  const organisatie = (formData.get('organisatie') as string)?.trim()
  const bericht = (formData.get('bericht') as string)?.trim()

  if (!naam || !bericht) {
    return { status: 'error', message: 'Vul je naam en bericht in.' }
  }

  if (!process.env.RESEND_API_KEY) {
    return { status: 'error', message: 'E-mail is nog niet geconfigureerd.' }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const { error } = await resend.emails.send({
    from: 'contact@wouter.studio',
    to: 'wouter@wouter.studio',
    replyTo: naam,
    subject: `Nieuw bericht via wouter.studio — ${naam}`,
    text: [
      `Naam: ${naam}`,
      organisatie ? `Organisatie: ${organisatie}` : '',
      `\nBericht:\n${bericht}`,
    ]
      .filter(Boolean)
      .join('\n'),
  })

  if (error) {
    return { status: 'error', message: 'Er is iets misgegaan. Probeer het later nog eens.' }
  }

  return { status: 'success' }
}
