import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/scroll-reveal'
import { PageHero, SectionTitle, Prose } from '@/components/editorial'
import { Timeline, PageCta } from '@/components/content-blocks'

export const metadata: Metadata = {
  title: 'A strandfoci története Magyarországon — Hungary Strandfoci',
  description:
    'A magyar strandfoci fejlődésének története: a szabadtéri játéktól a szervezett sportágig, idővonalon bemutatva.',
}

const timeline = [
  {
    era: 'A kezdetek',
    title: 'Játék a parton',
    text: 'A homokon játszott foci kötetlen, szabadtéri örömként jelent meg a magyar tóparti és folyóparti strandokon. A nyári pihenés természetes része lett a labdarúgás.',
  },
  {
    era: 'Formálódás',
    title: 'Az első szervezett mérkőzések',
    text: 'A baráti összecsapásokból fokozatosan szabályozott mérkőzések lettek. Megjelentek a kijelölt pályák, a kapuk és az első közösen elfogadott szabályok.',
  },
  {
    era: 'Terjedés',
    title: 'A sportág gyökeret ver',
    text: 'A strandfoci egyre több helyszínen jelent meg az ország vizei mentén. A homokpályák közösségi térré váltak, ahol generációk találkoztak a játék öröméért.',
  },
  {
    era: 'Szervezettség',
    title: 'Rendszeres tornák',
    text: 'A nyári időszakban visszatérő tornák és találkozók adtak rendszeres keretet a játéknak. A strandfoci a hazai nyári sportkultúra részévé vált.',
  },
  {
    era: 'Napjaink',
    title: 'Élő, fejlődő sport',
    text: 'Ma a strandfoci a technikás, látványos és közösségi sportok közé tartozik Magyarországon. A homok továbbra is vonzza azokat, akik a mozgás szabadságát keresik.',
  },
]

export default function Page() {
  return (
    <main>
      <ScrollReveal />
      <PageHero
        index="03"
        eyebrow="Történelem"
        title="A magyar strandfoci útja"
        intro="A tóparti játéktól a szervezett sportágig — a homoklabdarúgás fejlődése Magyarországon."
        image="/images/history-beach.png"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="reveal mb-12 max-w-2xl">
          <SectionTitle eyebrow="Áttekintés" title="Honnan indult a homokjáték" />
          <div className="mt-6">
            <Prose>
              <p>
                A strandfoci Magyarországon a szabadtéri, nyári játék öröméből nőtt
                ki. A vizek menti homokos partok természetes terepet adtak a
                kötetlen labdarúgásnak, amely idővel szervezett formát öltött.
              </p>
            </Prose>
          </div>
        </div>

        <div className="reveal mb-10">
          <SectionTitle eyebrow="Idővonal" title="A fejlődés állomásai" />
        </div>
        <Timeline items={timeline} />
      </section>

      <PageCta
        title="Ismerd meg a játékot"
        text="A történet után fedezd fel, hogyan épül fel egy mérkőzés, vagy merülj el a technika világában."
        links={[
          { label: 'Szabályok', href: '/szabalyok' },
          { label: 'Technika és edzés', href: '/technika' },
        ]}
      />
    </main>
  )
}
