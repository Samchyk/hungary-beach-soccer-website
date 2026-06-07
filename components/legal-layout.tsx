import { ScrollReveal } from '@/components/scroll-reveal'

export function LegalLayout({
  eyebrow,
  title,
  updated,
  sections,
}: {
  eyebrow: string
  title: string
  updated: string
  sections: { heading: string; paragraphs: string[] }[]
}) {
  return (
    <main>
      <ScrollReveal />
      <section className="relative overflow-hidden pt-28 lg:pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 right-0 h-72 w-72 rounded-full bg-primary/10 blur-[130px]"
        />
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="reveal font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            {eyebrow}
          </p>
          <h1 className="reveal mt-4 text-balance font-heading text-4xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl">
            {title}
          </h1>
          <p className="reveal reveal-delay-1 mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Utolsó frissítés: {updated}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8 lg:py-20">
        <div className="space-y-10">
          {sections.map((s, i) => (
            <div key={i} className="reveal">
              <h2 className="mb-3 font-heading text-2xl uppercase leading-tight tracking-tight text-foreground">
                {s.heading}
              </h2>
              <div className="space-y-4 text-pretty text-base leading-relaxed text-muted-foreground">
                {s.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
