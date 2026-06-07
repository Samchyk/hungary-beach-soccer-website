import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { PageHero } from '@/components/editorial'
import { ARTICLES } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Magazin — Hungary Strandfoci',
  description:
    'Írások, elemzések és történetek a homokon élő labdarúgásról: technika, edzés, taktika és kultúra.',
}

export default function Page() {
  const [lead, ...rest] = ARTICLES

  return (
    <main>
      <ScrollReveal />
      <PageHero
        index="09"
        eyebrow="Magazin · Írások"
        title="Hangok a homokról"
        intro="Elemzések, útmutatók és történetek a strandfoci világából — minden, ami a homokon zajlik."
        image="/images/blog-cover.png"
      />

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        {/* Lead article */}
        <Link
          href={`/magazin/${lead.slug}`}
          className="reveal group grid overflow-hidden rounded-3xl border border-border/60 bg-card transition-colors hover:border-primary/50 lg:grid-cols-2"
        >
          <div className="relative aspect-[16/11] overflow-hidden lg:aspect-auto">
            <Image
              src={lead.cover || '/placeholder.svg'}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 640px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent lg:bg-gradient-to-r" />
          </div>
          <div className="flex flex-col justify-center gap-5 p-7 sm:p-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">
              Kiemelt · {lead.category}
            </span>
            <h2 className="text-balance font-heading text-3xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {lead.title}
            </h2>
            <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
              {lead.excerpt}
            </p>
            <span className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-foreground transition-colors group-hover:text-primary">
              Olvasd el
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </Link>

        {/* Grid of the rest */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((a, i) => (
            <Link
              key={a.slug}
              href={`/magazin/${a.slug}`}
              className="reveal group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-colors hover:border-primary/50"
              style={{ transitionDelay: `${(i % 3) * 70}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={a.cover || '/placeholder.svg'}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/70 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-background/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-primary backdrop-blur">
                  {a.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="text-balance font-heading text-xl uppercase leading-tight tracking-tight text-foreground">
                  {a.title}
                </h3>
                <p className="line-clamp-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {a.excerpt}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground transition-colors group-hover:text-primary">
                  {a.readingHint}
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
