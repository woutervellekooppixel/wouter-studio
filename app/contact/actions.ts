'use server'

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

  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) {
    return { status: 'error', message: 'E-mail is nog niet geconfigureerd.' }
  }

  const textBody = [
    `Naam: ${naam}`,
    organisatie ? `Organisatie: ${organisatie}` : '',
    `\nBericht:\n${bericht}`,
  ].filter(Boolean).join('\n')

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify({
      sender: { name: 'Wouter Studio', email: 'mail@wouter.studio' },
      to: [{ email: 'mail@wouter.studio' }],
      replyTo: { name: naam, email: 'mail@wouter.studio' },
      subject: `Nieuw bericht via wouter.studio — ${naam}`,
      textContent: textBody,
    }),
  })

  if (!res.ok) {
    return { status: 'error', message: 'Er is iets misgegaan. Probeer het later nog eens.' }
  }

  return { status: 'success' }
}
