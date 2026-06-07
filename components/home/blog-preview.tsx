import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ARTICLES } from '@/lib/articles'

export function BlogPreview() {
  const items = ARTICLES.slice(0, 3)
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="reveal mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            Magazin
          </p>
          <h2 className="mt-4 max-w-2xl text-balance font-heading text-4xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl">
            Írások a homokról
          </h2>
        </div>
        <Link
          href="/magazin"
          className="group inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-foreground transition-colors hover:text-primary"
        >
          Összes írás
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((a, i) => (
          <Link
            key={a.slug}
            href={`/magazin/${a.slug}`}
            className="group reveal flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card transition-colors hover:border-primary/50"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="relative aspect-[16/11] overflow-hidden">
              <Image
                src={a.cover || '/placeholder.svg'}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-border/60 bg-background/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground backdrop-blur-md">
                {a.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-balance font-heading text-xl uppercase leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary">
                {a.title}
              </h3>
              <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                {a.excerpt}
              </p>
              <span className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                {a.readingHint} →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
