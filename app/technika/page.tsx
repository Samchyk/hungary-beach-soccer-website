import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/scroll-reveal'
import { PageHero, SectionTitle } from '@/components/editorial'
import { PointList, ContentColumns, PageCta } from '@/components/content-blocks'

export const metadata: Metadata = {
  title: 'Technika és edzés — Hungary Strandfoci',
  description:
    'Labdakezelés a homokon, egyensúly, mozgás, gyorsasági edzés és lövéstechnika kezdő és haladó szinten.',
}

const skills = [
  {
    title: 'Labdakezelés a homokon',
    text: 'A puha felületen a labda lassabban gurul és kiszámíthatatlanul pattan. A finom, mezítlábas érintés és a labda levegőben tartása a kulcs.',
  },
  {
    title: 'Egyensúly és testtartás',
    text: 'Alacsony súlypont, behajlított térd, aktív törzs. A stabilitás a homokjáték alapja minden mozdulatnál.',
  },
  {
    title: 'Gyorsasági edzés',
    text: 'Rövid, robbanékony sprintek és irányváltások a homokban. A cél a gyors indulás és a kontrollált megállás.',
  },
  {
    title: 'Lövéstechnika',
    text: 'A levegőben lévő labda rúgása, a teli és a csavart lövés. A homokon a lábfej teljes felülete dolgozik.',
  },
  {
    title: 'Mozgás és koordináció',
    text: 'A test és a láb összehangolt mozgása a puha talajon. A ritmusérzék és a finom korrekciók fejlesztése.',
  },
  {
    title: 'Páros gyakorlatok',
    text: 'Átadások, fal-passzok és helycserék kis területen. A csapatjáték a homokon közös ritmust kíván.',
  },
]

const beginnerBlocks = [
  {
    heading: 'Kezdő gyakorlatok',
    paragraphs: [
      'A kezdő játékos először a homokon való járást és állást sajátítja el. Egyszerű labdavezetés, lassú átadások és helyben végzett érintések segítik a felület megismerését.',
      'Fontos a fokozatosság: rövid edzések, sok pihenő, és a talp hozzászoktatása a meleg homokhoz.',
    ],
  },
  {
    heading: 'Haladó gyakorlatok',
    paragraphs: [
      'A haladó szinten a légi technika kerül előtérbe: labda levegőben tartása, ollózó megoldások és a gyors irányváltások kombinációja.',
      'A robbanékony sprintek, a hirtelen megállások és a páros taktikai gyakorlatok finomítják a játékot.',
    ],
  },
  {
    heading: 'Az edzés ritmusa',
    paragraphs: [
      'A homokon az edzés intenzívebb, mint a füvön, ezért érdemes rövidebb, fókuszált blokkokban dolgozni. A bemelegítés és a nyújtás elengedhetetlen.',
      'A hűvösebb reggeli és esti órák ideálisak a hosszabb gyakorláshoz.',
    ],
  },
]

export default function Page() {
  return (
    <main>
      <ScrollReveal />
      <PageHero
        index="02"
        eyebrow="Technika · Edzés"
        title="A homok mestersége"
        intro="Labdakezelés, egyensúly, gyorsaság és lövéstechnika — a strandfoci készségei lépésről lépésre."
        image="/images/technique-ball.png"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="reveal mb-10">
          <SectionTitle eyebrow="Készségek" title="A technika hat pillére" />
        </div>
        <PointList points={skills} />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="reveal mb-12 max-w-2xl">
          <SectionTitle eyebrow="Gyakorlás" title="Kezdőtől a haladóig" />
        </div>
        <ContentColumns blocks={beginnerBlocks} />
      </section>

      <PageCta
        title="Edzd a tested is"
        text="A technika mellett a fizikai felkészülés adja a homokjáték alapját. Nézd meg a kondicionálás világát."
        links={[
          { label: 'Fizikai felkészülés', href: '/fizikai-felkeszules' },
          { label: 'Felszerelés', href: '/felszereles' },
        ]}
      />
    </main>
  )
}
