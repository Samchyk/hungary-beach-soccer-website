import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function IntroStory() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        <div className="reveal relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/60">
            <Image
              src="/images/sand-texture.png"
              alt="Homok textúra lábnyomokkal"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          <div className="absolute -right-4 bottom-8 hidden rounded-2xl border border-border/60 bg-popover/90 p-5 backdrop-blur-md sm:block">
            <p className="font-heading text-4xl text-primary">5</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              játékos oldalanként
            </p>
          </div>
        </div>

        <div className="reveal reveal-delay-1 order-1 lg:order-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            A játék lényege
          </p>
          <h2 className="mt-5 text-balance font-heading text-4xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Ahol a homok diktálja a tempót
          </h2>
          <div className="mt-6 space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            <p>
              A strandfoci a labdarúgás leglátványosabb, leggyorsabb és
              legtechnikásabb formája. A puha homok minden mozdulatot átír: itt nem a
              futás dominál, hanem az egyensúly, a kreativitás és a robbanékonyság.
            </p>
            <p>
              A mezítlábas játék, a levegőben tartott labda és a látványos megoldások
              teszik egyedivé. A homokon mindenki újratanulja a focit — és ez a
              szépsége.
            </p>
          </div>
          <Link
            href="/mi-a-strandfoci"
            className="group mt-8 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-foreground transition-colors hover:text-primary"
          >
            Tudj meg többet
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

const STATS = [
  { v: '36', l: 'méteres homokpálya' },
  { v: '3×12', l: 'perces játékrész' },
  { v: '0', l: 'döntetlen — mindig van győztes' },
  { v: '∞', l: 'látványos megoldás' },
]

export function StatsBand() {
  return (
    <section className="border-y border-border/50 bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 sm:px-8 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={i}
            className="reveal flex flex-col gap-2 py-10 text-center lg:py-14"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="font-heading text-5xl text-primary text-glow sm:text-6xl lg:text-7xl">
              {s.v}
            </span>
            <span className="mx-auto max-w-[14ch] text-pretty font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:text-[11px]">
              {s.l}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
