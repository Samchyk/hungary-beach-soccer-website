import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Globe, MessageSquare } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { PageHero, SectionTitle } from '@/components/editorial'
import { ContactForm } from '@/components/contact-form'
import { ContentColumns } from '@/components/content-blocks'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Rólunk és kapcsolat — Hungary Strandfoci',
  description:
    'A Hungary Strandfoci projekt küldetése és a kapcsolatfelvétel lehetőségei. Írj nekünk a homokjátékról.',
}

const blocks = [
  {
    heading: 'A küldetésünk',
    paragraphs: [
      'A Hungary Strandfoci egy független, ismeretterjesztő projekt, amelynek célja, hogy magyar nyelven mutassa be a homokon élő labdarúgás világát. Hisszük, hogy a strandfoci a futball legszórakoztatóbb, legközösségibb formája.',
      'Oldalunkon a technikától a történelmen át a szabályokig minden megtalálható, ami segít megismerni és megszeretni ezt a sportot.',
    ],
  },
  {
    heading: 'Kiknek szól',
    paragraphs: [
      'Tartalmaink egyaránt szólnak a kezdőknek, akik most ismerkednek a homokjátékkal, és a haladóknak, akik mélyebb tudásra vágynak. A cél, hogy mindenki találjon valami hasznosat.',
      'Nem klubhoz vagy szövetséghez kötődünk — a sport iránti szenvedély vezet minket.',
    ],
  },
]

export default function Page() {
  return (
    <main>
      <ScrollReveal />
      <PageHero
        index="10"
        eyebrow="Rólunk · Kapcsolat"
        title="A homok híradói"
        intro="Egy magyar nyelvű ismeretterjesztő projekt a strandfociról — a homokjáték szerelmeseitől, neked."
        image="/images/history-beach.png"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="reveal mb-12 max-w-2xl">
          <SectionTitle eyebrow="Bemutatkozás" title="Mi a Hungary Strandfoci" />
        </div>
        <ContentColumns blocks={blocks} />
      </section>

      {/* Contact */}
      <section className="border-t border-border/50">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <div className="reveal">
            <SectionTitle eyebrow="Írj nekünk" title="Vegyük fel a kapcsolatot" />
            <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Kérdésed van, javaslatod, vagy együttműködnél velünk? Töltsd ki az
              űrlapot, és hamarosan válaszolunk.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground">
                <span className="flex size-10 items-center justify-center rounded-full border border-border/60 text-primary">
                  <Mail className="size-4" />
                </span>
                <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-primary">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <span className="flex size-10 items-center justify-center rounded-full border border-border/60 text-primary">
                  <Globe className="size-4" />
                </span>
                {SITE.domain}
              </li>
            </ul>
          </div>

          <div className="reveal reveal-delay-1 rounded-3xl border border-border/60 bg-card p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="border-t border-border/50">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
          <p className="text-sm text-muted-foreground">
            Tudj meg többet az adataid kezeléséről az{' '}
            <Link href="/adatvedelem" className="text-primary underline-offset-4 hover:underline">
              Adatvédelmi tájékoztatóban
            </Link>{' '}
            és a{' '}
            <Link href="/cookie-szabalyzat" className="text-primary underline-offset-4 hover:underline">
              Cookie szabályzatban
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  )
}
