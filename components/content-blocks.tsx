import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

/** Numbered list of points with title + text. */
export function PointList({
  points,
}: {
  points: { title: string; text: string }[]
}) {
  return (
    <div className="grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/40 sm:grid-cols-2">
      {points.map((p, i) => (
        <div
          key={i}
          className="reveal flex flex-col gap-3 bg-card p-7 lg:p-8"
          style={{ transitionDelay: `${(i % 2) * 80}ms` }}
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">
            {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className="font-heading text-xl uppercase leading-tight tracking-tight text-foreground sm:text-2xl">
            {p.title}
          </h3>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            {p.text}
          </p>
        </div>
      ))}
    </div>
  )
}

/** Editorial text + sticky aside layout. */
export function ContentColumns({
  blocks,
}: {
  blocks: { heading: string; paragraphs: string[] }[]
}) {
  return (
    <div className="space-y-12">
      {blocks.map((b, i) => (
        <div key={i} className="reveal grid gap-5 lg:grid-cols-[0.35fr_0.65fr] lg:gap-10">
          <h3 className="font-heading text-2xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-3xl">
            {b.heading}
          </h3>
          <div className="space-y-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {b.paragraphs.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

/** Vertical timeline for history. */
export function Timeline({
  items,
}: {
  items: { era: string; title: string; text: string }[]
}) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-border to-transparent sm:left-[9px]"
      />
      <div className="space-y-10">
        {items.map((it, i) => (
          <div
            key={i}
            className="reveal relative pl-8 sm:pl-12"
            style={{ transitionDelay: `${(i % 3) * 70}ms` }}
          >
            <span className="absolute left-0 top-1.5 size-4 rounded-full border-2 border-primary bg-background glow-ring sm:size-5" />
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">
              {it.era}
            </p>
            <h3 className="mt-2 font-heading text-2xl uppercase leading-tight tracking-tight text-foreground sm:text-3xl">
              {it.title}
            </h3>
            <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {it.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

/** Closing call-to-action band linking onward. */
export function PageCta({
  title,
  text,
  links,
}: {
  title: string
  text: string
  links: { label: string; href: string }[]
}) {
  return (
    <section className="relative overflow-hidden border-t border-border/50">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
      />
      <div className="reveal mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 lg:py-28">
        <h2 className="text-balance font-heading text-4xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {text}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className={
                i === 0
                  ? 'group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.18em] text-primary-foreground transition-transform hover:scale-[1.03]'
                  : 'group inline-flex items-center gap-2 rounded-full border border-border/70 px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.18em] text-foreground transition-colors hover:border-primary hover:text-primary'
              }
            >
              {l.label}
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
