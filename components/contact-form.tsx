'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { Send } from 'lucide-react'
import { submitContact, type ContactState } from '@/app/rolunk/actions'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.18em] text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60"
    >
      {pending ? 'Küldés…' : 'Üzenet küldése'}
      <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
    </button>
  )
}

const fieldClass =
  'w-full rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary'

export function ContactForm() {
  const [state, formAction] = useActionState<ContactState, FormData>(
    submitContact,
    null,
  )

  return (
    <form action={formAction} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
          >
            Név
          </label>
          <input id="name" name="name" type="text" required className={fieldClass} placeholder="Teljes neved" />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
          >
            E-mail
          </label>
          <input id="email" name="email" type="email" required className={fieldClass} placeholder="te@example.com" />
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
        >
          Üzenet
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-none`}
          placeholder="Miben segíthetünk?"
        />
      </div>

      {state && (
        <p
          role="status"
          className={`text-sm ${state.ok ? 'text-primary' : 'text-destructive'}`}
        >
          {state.message}
        </p>
      )}

      <SubmitButton />
    </form>
  )
}
