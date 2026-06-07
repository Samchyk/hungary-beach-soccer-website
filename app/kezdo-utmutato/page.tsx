import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/scroll-reveal'
import { PageHero, SectionTitle } from '@/components/editorial'
import { Timeline, ContentColumns, PageCta } from '@/components/content-blocks'

export const metadata: Metadata = {
  title: 'Kezdő útmutató — Hungary Strandfoci',
  description:
    'Az első lépések a strandfociban: hogyan kezdj hozzá, mire figyelj a homokon, és hogyan fejlődj lépésről lépésre.',
}

const steps = [
  {
    era: '01. lépés',
    title: 'Szokd a homokot',
    text: 'Mielőtt labdához nyúlnál, járkálj, fuss és állj meg a homokon. Érezd, hogyan reagál a talaj a mozgásodra.',
  },
  {
    era: '02. lépés',
    title: 'Az első érintések',
    text: 'Kezdd lassú labdavezetéssel és egyszerű átadásokkal. A cél a labda kontrollja a puha, kiszámíthatatlan felületen.',
  },
  {
    era: '03. lépés',
    title: 'Egyensúly és lövés',
    text: 'Gyakorold az alacsony súlypontú állást, majd próbáld ki a levegőben lévő labda rúgását. Türelem és ismétlés.',
  },
  {
    era: '04. lépés',
    title: 'Játssz másokkal',
    text: 'Keress társakat egy kis pályás meccshez. A játékban tanulsz a leggyorsabban — ritmust, taktikát és helyezkedést.',
  },
  {
    era: '05. lépés',
    title: 'Építsd a kondíciót',
    text: 'Fokozatosan növeld az edzések hosszát és intenzitását. A homok megdolgoztat — adj időt a tested felépülésére.',
  },
]

const blocks = [
  {
    heading: 'Mire figyelj az elején?',
    paragraphs: [
      'A kezdő játékos leggyakoribb hibája a túl gyors tempó. A homokon minden mozdulat fárasztóbb, ezért rövidebb, fókuszált edzésekkel érdemes indulni.',
      'A bemelegítés, a folyadékpótlás és a napvédelem már az első naptól a rutin része kell, hogy legyen.',
    ],
  },
  {
    heading: 'Hogyan fejlődj?',
    paragraphs: [
      'A fejlődés kulcsa a rendszeresség és a sokszínűség. Váltogasd a technikai gyakorlatokat, a kondicionálást és a játékos meccseket.',
      'Filmezd le magad, kérj visszajelzést, és figyeld a tapasztaltabb játékosokat — a homokon a megfigyelés sokat tanít.',
    ],
  },
]

export default function Page() {
  return (
    <main>
      <ScrollReveal />
      <PageHero
        index="08"
        eyebrow="Kezdő · Útmutató"
        title="Az első lépések"
        intro="Lépésről lépésre a homokon: hogyan kezdj hozzá, mire figyelj, és hogyan fejlődj kezdőből magabiztos játékossá."
        image="/images/beginner.png"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="reveal mb-12 max-w-2xl">
          <SectionTitle eyebrow="Lépésről lépésre" title="Öt lépés a homokra" />
        </div>
        <Timeline items={steps} />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="reveal mb-12 max-w-2xl">
          <SectionTitle eyebrow="Tanácsok" title="Amit jó tudni" />
        </div>
        <ContentColumns blocks={blocks} />
      </section>

      <PageCta
        title="Mélyülj el a technikában"
        text="Az alapok megvannak — most jöhet a labdakezelés és a fizikai felkészülés finomítása."
        links={[
          { label: 'Technika és edzés', href: '/technika' },
          { label: 'Felszerelés', href: '/felszereles' },
        ]}
      />
    </main>
  )
}
