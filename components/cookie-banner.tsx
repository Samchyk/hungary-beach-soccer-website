'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const STORAGE_KEY = 'hsf-cookie-consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) {
        const t = setTimeout(() => setVisible(true), 900)
        return () => clearTimeout(t)
      }
    } catch {
      setVisible(true)
    }
  }, [])

  const decide = (value: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      /* ignore */
    }
    setVisible(false)
  }

  return (
    <div
      className={cn(
        'fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 transition-all duration-500 sm:px-6 sm:pb-6',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0',
      )}
      role="dialog"
      aria-label="Cookie tájékoztató"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-border/70 bg-popover/95 p-5 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="max-w-xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            Sütik
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Az oldal sütiket használ a működéshez és az élmény javításához. A
            részletekért olvasd el a{' '}
            <Link
              href="/cookie-szabalyzat"
              className="text-foreground underline decoration-primary/50 underline-offset-4 hover:text-primary"
            >
              cookie szabályzatot
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decide('declined')}
            className="rounded-full border border-border/70 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Elutasítás
          </button>
          <button
            type="button"
            onClick={() => decide('accepted')}
            className="rounded-full bg-primary px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Elfogadom
          </button>
        </div>
      </div>
    </div>
  )
}
