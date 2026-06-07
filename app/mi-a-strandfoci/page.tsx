import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/scroll-reveal'
import { PageHero, SectionTitle, Prose } from '@/components/editorial'
import { PointList, ContentColumns, PageCta } from '@/components/content-blocks'

export const metadata: Metadata = {
  title: 'Mi a strandfoci — Hungary Strandfoci',
  description:
    'A strandfoci alapjai: hogyan különbözik a klasszikus labdarúgástól, milyen a pálya, és mitől egyedi a homokon játszott foci.',
}

const differences = [
  {
    title: 'A felület',
    text: 'Fű helyett puha homok, amely minden mozdulatot lelassít és átalakít. A talaj folyamatosan változik a játék során.',
  },
  {
    title: 'A létszám',
    text: 'Oldalanként öt játékos, köztük a kapus. A szűk tér állandó mozgást és gyors döntéseket követel.',
  },
  {
    title: 'A mezítlábas játék',
    text: 'A csupasz talp közvetlenebb kapcsolatot teremt a labdával, és érzékenyebb technikát igényel.',
  },
  {
    title: 'A légi stílus',
    text: 'A kiszámíthatatlan pattanás miatt a labda gyakran a levegőben él — innen ered a látványos, akrobatikus megoldások sora.',
  },
  {
    title: 'Az időkeret',
    text: 'Három rövid, intenzív játékrész. A mérkőzés sűrű, lüktető és mindig eldől — döntetlen nincs.',
  },
  {
    title: 'A robbanékonyság',
    text: 'A homokon nem a kitartó futás, hanem a rövid, erőteljes mozdulatok és az egyensúly dominál.',
  },
]

const blocks = [
  {
    heading: 'A homok játéka',
    paragraphs: [
      'A strandfoci — vagy strandlabdarúgás — a labdarúgás homokon játszott változata. A puha felület gyökeresen átírja a játék minden elemét: a mozgást, a technikát és a taktikát egyaránt.',
      'A sport a tengerparti, szabadtéri játék öröméből nőtte ki magát szervezett sportággá, miközben megtartotta könnyed, nyári, közösségi jellegét.',
    ],
  },
  {
    heading: 'Miért más?',
    paragraphs: [
      'A klasszikus focihoz képest a strandfoci kisebb téren, kevesebb játékossal és lágyabb talajon zajlik. Ez kreatívabb, gyorsabb és látványosabb játékot eredményez.',
      'A homok lassítja a futást, de felgyorsítja a gondolkodást: az időzítés és a pozícióérzék fontosabbá válik a nyers sebességnél.',
    ],
  },
  {
    heading: 'A szabályok lényege',
    paragraphs: [
      'A mérkőzés három játékrészből áll, a kapus kézzel indíthat támadást, és a játék folyamatosan mozgásban tartja mind az öt mezőnyjátékost.',
      'A részletes szabályokat és a mérkőzés szerkezetét külön oldalon mutatjuk be.',
    ],
  },
]

export default function Page() {
  return (
    <main>
      <ScrollReveal />
      <PageHero
        index="01"
        eyebrow="Az alapok"
        title="Mi a strandfoci"
        intro="A homokon játszott labdarúgás, ahol a felület, a tempó és a technika minden szabályt újraír."
        image="/images/hero-beach-soccer.png"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="reveal mb-12 max-w-2xl">
          <SectionTitle eyebrow="Bevezetés" title="A strandfoci lényege" />
          <div className="mt-6">
            <Prose>
              <p>
                A strandfoci a labdarúgás leglátványosabb, legtechnikásabb és
                legközvetlenebb formája. A homok puhasága és a tenger közelsége
                egyedülálló hangulatot és játékstílust teremt.
              </p>
            </Prose>
          </div>
        </div>
        <ContentColumns blocks={blocks} />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="reveal mb-10">
          <SectionTitle
            eyebrow="Összehasonlítás"
            title="Miben más, mint a klasszikus foci"
          />
        </div>
        <PointList points={differences} />
      </section>

      <PageCta
        title="Indulj el a homokon"
        text="Ha megismerted az alapokat, fedezd fel a technikát és az edzés világát, vagy kezdd a kezdő útmutatóval."
        links={[
          { label: 'Technika és edzés', href: '/technika' },
          { label: 'Kezdő útmutató', href: '/kezdo-utmutato' },
        ]}
      />
    </main>
  )
}
