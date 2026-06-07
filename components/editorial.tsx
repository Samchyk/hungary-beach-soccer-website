import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ScrollReveal } from '@/components/scroll-reveal'

/** Editorial hero used at the top of every interior page. */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  index,
}: {
  eyebrow: string
  title: string
  intro: string
  image: string
  index?: string
}) {
  return (
    <section className="relative overflow-hidden pt-28 lg:pt-36">
      <ScrollReveal />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 right-0 h-80 w-80 rounded-full bg-primary/15 blur-[130px]"
      />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:pb-16">
        <div className="reveal">
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            {index && <span className="text-muted-foreground">{index}</span>}
            {eyebrow}
          </p>
          <h1 className="mt-5 text-balance font-heading text-5xl uppercase leading-[0.92] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            {title}
          </h1>
        </div>
        <p className="reveal reveal-delay-1 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
          {intro}
        </p>
      </div>
      <div className="reveal reveal-delay-2 relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative aspect-[16/8] w-full overflow-hidden rounded-3xl border border-border/60">
          <Image
            src={image || '/placeholder.svg'}
            alt=""
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
        </div>
      </div>
    </section>
  )
}

/** Section title block. */
export function SectionTitle({
  eyebrow,
  title,
  className,
  align = 'left',
}: {
  eyebrow?: string
  title: string
  className?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      {eyebrow && (
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-4 text-balance font-heading text-4xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        {title}
      </h2>
    </div>
  )
}

/** Bordered prose block for body content. */
export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg [&_strong]:text-foreground">
      {children}
    </div>
  )
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.18em] text-foreground transition-colors hover:text-primary"
    >
      {children}
      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  )
}
