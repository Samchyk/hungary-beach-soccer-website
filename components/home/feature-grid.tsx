import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const FEATURES = [
  {
    n: '01',
    title: 'Mi a strandfoci',
    href: '/mi-a-strandfoci',
    text: 'A homokon játszott labdarúgás alapjai, és miben különbözik a klasszikus focitól.',
    image: '/images/hero-beach-soccer.png',
    span: 'lg:col-span-7',
    tall: true,
  },
  {
    n: '02',
    title: 'Technika és edzés',
    href: '/technika',
    text: 'Labdakezelés a homokon, egyensúly, gyorsaság és lövéstechnika.',
    image: '/images/technique-ball.png',
    span: 'lg:col-span-5',
    tall: true,
  },
  {
    n: '03',
    title: 'Történelem',
    href: '/tortenelem',
    text: 'A magyar strandfoci fejlődésének története idővonalon.',
    image: '/images/history-beach.png',
    span: 'lg:col-span-5',
  },
  {
    n: '04',
    title: 'Szabályok és mérkőzés',
    href: '/szabalyok',
    text: 'Pontozás, pályaszerkezet és a mérkőzés alapelvei.',
    image: '/images/rules-field.png',
    span: 'lg:col-span-7',
  },
  {
    n: '05',
    title: 'Fizikai felkészülés',
    href: '/fizikai-felkeszules',
    text: 'Állóképesség, gyorsaság, koordináció és a homokon való mozgás kondicionálása.',
    image: '/images/physical-training.png',
    span: 'lg:col-span-7',
  },
  {
    n: '06',
    title: 'Érdekességek',
    href: '/erdekessegek',
    text: 'A homokon játszott foci kuriózumai, szokatlan helyzetek és tények.',
    image: '/images/facts-action.png',
    span: 'lg:col-span-5',
  },
  {
    n: '07',
    title: 'Felszerelés',
    href: '/felszereles',
    text: 'Labda, homokbarát lábbeli és kényelmes sportviselet alapjai.',
    image: '/images/equipment.png',
    span: 'lg:col-span-5',
  },
  {
    n: '08',
    title: 'Kezdő útmutató',
    href: '/kezdo-utmutato',
    text: 'Az első lépések a strandfociban, mozgásalapok és magabiztosság.',
    image: '/images/beginner.png',
    span: 'lg:col-span-7',
  },
]

export function FeatureGrid() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="reveal mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            Felfedezés
          </p>
          <h2 className="mt-4 max-w-2xl text-balance font-heading text-4xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl">
            A homok minden rétege
          </h2>
        </div>
        <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
          Nyolc kapu egyetlen világba. Válassz egy témát, és merülj el a
          strandlabdarúgás részleteiben.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        {FEATURES.map((f, i) => (
          <Link
            key={f.href}
            href={f.href}
            className={`group reveal reveal-delay-${(i % 3) + 1} relative col-span-1 overflow-hidden rounded-3xl border border-border/60 ${f.span}`}
          >
            <div
              className={`relative w-full overflow-hidden ${f.tall ? 'aspect-[4/5] lg:aspect-[4/4.4]' : 'aspect-[4/3.2]'}`}
            >
              <Image
                src={f.image || '/placeholder.svg'}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/5" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-7">
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">
                {f.n}
              </span>
              <div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-2xl uppercase leading-none tracking-tight text-foreground sm:text-3xl">
                    {f.title}
                  </h3>
                  <ArrowUpRight className="size-6 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="mt-3 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
                  {f.text}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
