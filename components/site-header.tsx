'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MAIN_NAV, SITE } from '@/lib/site'
import { Wordmark } from '@/components/wordmark'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled
            ? 'border-b border-border/60 bg-background/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:h-20">
          <Link href="/" aria-label={SITE.name} className="group">
            <Wordmark showTagline />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {MAIN_NAV.slice(0, 5).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground',
                  pathname === item.href && 'text-foreground',
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/rolunk"
              className="hidden items-center gap-1.5 rounded-full border border-border/70 bg-secondary/40 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground transition-colors hover:border-primary hover:text-primary sm:inline-flex"
            >
              Kapcsolat
              <ArrowUpRight className="size-3.5" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Menü bezárása' : 'Menü megnyitása'}
              aria-expanded={open}
              className="inline-flex size-11 items-center justify-center rounded-full border border-border/70 bg-secondary/40 text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 transition-all duration-500',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-2xl" />
        <div
          aria-hidden
          className="absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px]"
        />
        <div
          aria-hidden
          className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-accent/20 blur-[120px]"
        />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-5 pt-20 sm:px-8">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.4em] text-primary">
            Navigáció
          </p>
          <nav className="flex flex-col">
            {MAIN_NAV.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'group flex items-baseline justify-between gap-4 border-b border-border/40 py-3.5 transition-colors sm:py-4',
                  open ? 'reveal is-visible' : '',
                )}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-heading text-2xl uppercase tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-4xl">
                    {item.label}
                  </span>
                </span>
                <span className="hidden font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:inline">
                  {item.desc}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
