'use server'

export type ContactState = {
  ok: boolean
  message: string
} | null

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (!name || !email || !message) {
    return { ok: false, message: 'Kérjük, tölts ki minden mezőt.' }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: 'Kérjük, adj meg egy érvényes e-mail címet.' }
  }

  // In a real deployment this would forward the message to an inbox or store it.
  await new Promise((r) => setTimeout(r, 500))

  return {
    ok: true,
    message: 'Köszönjük az üzeneted! Hamarosan válaszolunk.',
  }
}
