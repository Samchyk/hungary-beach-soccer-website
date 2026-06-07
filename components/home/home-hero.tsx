'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowDown } from 'lucide-react'

export function HomeHero() {
  const [y, setY] = useState(0)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      raf = requestAnimationFrame(() => setY(window.scrollY))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Parallax background image */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${y * 0.4}px, 0) scale(1.1)` }}
      >
        <Image
          src="/images/hero-beach-soccer.png"
          alt="Strandfoci játékos a homokon naplementében"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[160px]"
      />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-28 pt-28 sm:px-8 lg:pb-32">
        <div
          className="max-w-5xl"
          style={{ transform: `translate3d(0, ${y * -0.12}px, 0)` }}
        >
          <p className="reveal is-visible flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.34em] text-primary sm:text-xs">
            <span className="h-px w-10 bg-primary" />
            Magyarország · Homoklabdarúgás
          </p>

          <h1 className="mt-6 text-balance font-heading text-[3.4rem] uppercase leading-[0.86] tracking-tight text-foreground text-glow sm:text-8xl lg:text-[9.5rem]">
            <span className="block">A homok</span>
            <span className="block text-primary">ritmusa</span>
          </h1>

          <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            A strandfoci nem csupán labdarúgás. A tenger lehelete, a forró homok és a
            mozdulat szabadsága. Fedezd fel a magyar strandlabdarúgás teljes világát —
            a technikától a történelemig.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/mi-a-strandfoci"
              className="rounded-full bg-primary px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Mi a strandfoci
            </Link>
            <Link
              href="/technika"
              className="rounded-full border border-border/70 bg-background/30 px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.2em] text-foreground backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
            >
              Technika és edzés
            </Link>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          <ArrowDown className="size-4 animate-float text-primary" />
          Görgess a felfedezéshez
        </div>
      </div>
    </section>
  )
}
