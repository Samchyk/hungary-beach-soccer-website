import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/scroll-reveal'
import { PageHero, SectionTitle } from '@/components/editorial'
import { PointList, ContentColumns, PageCta } from '@/components/content-blocks'

export const metadata: Metadata = {
  title: 'Érdekességek — Hungary Strandfoci',
  description:
    'Meglepő tények, rekordok és kuriózumok a strandfoci világából — a homokon élő labdarúgás színes oldala.',
}

const facts = [
  {
    title: 'Az ollózó gól otthona',
    text: 'A strandfoci a látványos, levegőben végrehajtott ollózó gólok igazi hazája. A puha homok bátorrá teszi a játékosokat.',
  },
  {
    title: 'Brazil gyökerek',
    text: 'A modern strandfoci szabályait az 1990-es évek elején Brazíliában, Rio de Janeiro partjain fektették le.',
  },
  {
    title: 'Mezítláb a homokon',
    text: 'A cipő hiánya nem véletlen: a mezítlábas játék jobb labdaérzetet ad, és a homok természetes párnaként véd.',
  },
  {
    title: 'Három harmad',
    text: 'A futball ritka kivétele: a strandfoci nem két félidőből, hanem három, egyenként 12 perces harmadból áll.',
  },
  {
    title: 'Gólgazdag mérkőzések',
    text: 'A kis pálya és a támadó szellem miatt egy meccsen átlagosan jóval több gól esik, mint a hagyományos futballban.',
  },
  {
    title: 'Világbajnokság a homokon',
    text: 'A FIFA strandfoci-világbajnokságot kétévente rendezik, ahol a homok királyai mérik össze tudásukat.',
  },
]

const blocks = [
  {
    heading: 'A sport, ami ünnep',
    paragraphs: [
      'A strandfoci sehol sem csupán sport — a tengerparti hangulat, a zene és a közönség közelsége fesztiválszerű élménnyé teszi minden mérkőzést. A lelátó és a pálya között szinte nincs határ.',
      'Ez a közvetlenség teszi a strandfocit a labdarúgás legszórakoztatóbb, leglátványosabb formájává.',
    ],
  },
  {
    heading: 'Magyar érdekességek',
    paragraphs: [
      'Magyarországon a strandfoci a tóparti és folyóparti homokstrandokon talált otthonra. A balatoni és tiszai homok természetes pályaként szolgál a hazai tornákhoz.',
      'A hazai válogatott és a klubcsapatok évről évre erősödnek, és egyre több fiatal fedezi fel a homokjáték örömét.',
    ],
  },
]

export default function Page() {
  return (
    <main>
      <ScrollReveal />
      <PageHero
        index="06"
        eyebrow="Érdekességek · Tények"
        title="A homok titkai"
        intro="Rekordok, kuriózumok és meglepő tények a strandfoci színes, ünnepi világából."
        image="/images/facts-action.png"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="reveal mb-10">
          <SectionTitle eyebrow="Tények" title="Hat érdekesség a homokról" />
        </div>
        <PointList points={facts} />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="reveal mb-12 max-w-2xl">
          <SectionTitle eyebrow="Háttér" title="Több, mint egy játék" />
        </div>
        <ContentColumns blocks={blocks} />
      </section>

      <PageCta
        title="Olvass tovább a magazinban"
        text="Friss írások, elemzések és történetek a homokon élő labdarúgásról."
        links={[
          { label: 'Magazin', href: '/magazin' },
          { label: 'Történelem', href: '/tortenelem' },
        ]}
      />
    </main>
  )
}
