import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/scroll-reveal'
import { PageHero, SectionTitle } from '@/components/editorial'
import { PointList, ContentColumns, PageCta } from '@/components/content-blocks'

export const metadata: Metadata = {
  title: 'Felszerelés — Hungary Strandfoci',
  description:
    'Amire a homokjátékhoz szükséged van: labda, mez, bokavédelem, naptej és a megfelelő pálya kialakítása.',
}

const gear = [
  {
    title: 'A labda',
    text: 'A strandfocilabda valamivel puhább és könnyebb a hagyományosnál, hogy mezítláb is kényelmes legyen vele játszani.',
  },
  {
    title: 'Mez és nadrág',
    text: 'Könnyű, légáteresztő, gyorsan száradó anyag. A meleg és a homok miatt a kényelem és a szellőzés a legfontosabb.',
  },
  {
    title: 'Bokarögzítés',
    text: 'Bár mezítláb játszanak, a boka és a talp szalagozása megelőzi a sérüléseket az instabil felületen.',
  },
  {
    title: 'Napvédelem',
    text: 'Magas faktorú, vízálló naptej és fejvédelem elengedhetetlen a tűző napon töltött mérkőzéseken.',
  },
  {
    title: 'Hidratálás',
    text: 'Bőséges folyadék és elektrolitok. A homokon és a hőségben a szervezet gyorsan veszít a tartalékaiból.',
  },
  {
    title: 'A pálya',
    text: 'Sima, kő- és kagylómentes, megfelelő mélységű homok és stabil kapuk — a biztonságos játék alapfeltételei.',
  },
]

const blocks = [
  {
    heading: 'Hogyan válassz labdát?',
    paragraphs: [
      'A strandfocilabda nyomása alacsonyabb, felülete pedig gyakran érdesebb, hogy nedves homokon is jól fogható maradjon. A puhább labda kíméli a mezítlábas érintést.',
      'Kezdőként érdemes egy bevizsgált, strandfocira tervezett labdát választani, amely megfelel a méret- és súlyelőírásoknak.',
    ],
  },
  {
    heading: 'A pálya kialakítása',
    paragraphs: [
      'A jó homokpálya legalább 40 centiméter mély, finom szemcséjű homokból áll, megtisztítva minden kőtől és kagylótól. Ez biztosítja a biztonságos, mezítlábas játékot.',
      'A kapukat stabilan kell rögzíteni, a vonalakat pedig színes szalaggal jelölik a homok felszínén.',
    ],
  },
]

export default function Page() {
  return (
    <main>
      <ScrollReveal />
      <PageHero
        index="07"
        eyebrow="Felszerelés · Eszközök"
        title="Amire szükséged van"
        intro="A labdától a napvédelemig — minden eszköz és feltétel, amely biztonságossá és élvezetessé teszi a homokjátékot."
        image="/images/equipment.png"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="reveal mb-10">
          <SectionTitle eyebrow="Eszközök" title="A felszerelés alapjai" />
        </div>
        <PointList points={gear} />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="reveal mb-12 max-w-2xl">
          <SectionTitle eyebrow="Részletek" title="Választás és kialakítás" />
        </div>
        <ContentColumns blocks={blocks} />
      </section>

      <PageCta
        title="Készen állsz az első meccsre?"
        text="A felszerelés megvan — most jön a játék. Kövesd a kezdő útmutatót az első lépésekhez."
        links={[
          { label: 'Kezdő útmutató', href: '/kezdo-utmutato' },
          { label: 'Szabályok', href: '/szabalyok' },
        ]}
      />
    </main>
  )
}
