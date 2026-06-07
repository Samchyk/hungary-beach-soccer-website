import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/scroll-reveal'
import { PageHero, SectionTitle } from '@/components/editorial'
import { PointList, ContentColumns, PageCta } from '@/components/content-blocks'

export const metadata: Metadata = {
  title: 'Fizikai felkészülés — Hungary Strandfoci',
  description:
    'Állóképesség, robbanékonyság, erő és regeneráció a homokon. Edzésmódszerek és táplálkozás a strandfocihoz.',
}

const pillars = [
  {
    title: 'Állóképesség',
    text: 'A homokon minden lépés több energiát kíván. Az aerob alap és a hosszú intervallumok adják a kitartást a három harmadon át.',
  },
  {
    title: 'Robbanékonyság',
    text: 'A rövid sprintek, ugrások és irányváltások fejlesztése. A homok ellenállása természetes plyometrikus edzéssé teszi a mozgást.',
  },
  {
    title: 'Erő és stabilitás',
    text: 'A láb, a boka és a törzs ereje tartja stabilan a testet a puha felületen. A funkcionális erőedzés a kulcs.',
  },
  {
    title: 'Mozgékonyság',
    text: 'A bokát és a csípőt érő terhelés miatt a mobilitás és a nyújtás megelőzi a sérüléseket.',
  },
  {
    title: 'Regeneráció',
    text: 'A homokon végzett edzés intenzív, ezért a pihenés, az alvás és a hidegterápia gyorsítja a felépülést.',
  },
  {
    title: 'Táplálkozás',
    text: 'A hidratálás a melegben létfontosságú. A szénhidrát és a fehérje megfelelő aránya tartja fenn a teljesítményt.',
  },
]

const blocks = [
  {
    heading: 'Miért más a homok?',
    paragraphs: [
      'A homok instabil felülete minden mozdulatnál apró korrekciókat kíván, ami folyamatosan dolgoztatja a stabilizáló izmokat. Ezért a homokon végzett edzés egyszerre kíméletes az ízületekre és rendkívül megterhelő az izomzatra.',
      'A puha talaj csökkenti az ütközéses sérülések kockázatát, miközben növeli az energiabefektetést — ideális a kondicionáláshoz.',
    ],
  },
  {
    heading: 'Egy edzéshét felépítése',
    paragraphs: [
      'A jól felépített hét váltogatja az intenzív és a regeneráló napokat. A sprint- és erőblokkokat technikai és játékos napok követik, a héten legalább egy teljes pihenőnappal.',
      'A bemelegítés mindig dinamikus, a levezetés pedig nyújtással és könnyű mozgással zárul.',
    ],
  },
  {
    heading: 'Sérülésmegelőzés',
    paragraphs: [
      'A boka és a vádli a leginkább terhelt területek. A fokozatos terhelésnövelés, a megfelelő bemelegítés és a talp erősítése csökkenti a kockázatot.',
      'A meleg homok és a tűző nap miatt a fejvédelem és a rendszeres folyadékpótlás is a felkészülés része.',
    ],
  },
]

export default function Page() {
  return (
    <main>
      <ScrollReveal />
      <PageHero
        index="05"
        eyebrow="Fizikai · Felkészülés"
        title="Erő a homokban"
        intro="Állóképesség, robbanékonyság és regeneráció — a test felkészítése a homok kíméletlen, mégis kíméletes terhelésére."
        image="/images/physical-training.png"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="reveal mb-10">
          <SectionTitle eyebrow="Pillérek" title="A felkészülés hat területe" />
        </div>
        <PointList points={pillars} />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="reveal mb-12 max-w-2xl">
          <SectionTitle eyebrow="Módszertan" title="Hogyan épül fel az edzés" />
        </div>
        <ContentColumns blocks={blocks} />
      </section>

      <PageCta
        title="Csiszold a technikád"
        text="A fizikai alap mellett a labdás készségek teszik teljessé a játékot. Nézd meg a technikai útmutatót."
        links={[
          { label: 'Technika és edzés', href: '/technika' },
          { label: 'Kezdő útmutató', href: '/kezdo-utmutato' },
        ]}
      />
    </main>
  )
}
