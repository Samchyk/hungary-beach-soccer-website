import type { Metadata } from 'next'
import { ScrollReveal } from '@/components/scroll-reveal'
import { PageHero, SectionTitle } from '@/components/editorial'
import { PointList, ContentColumns, PageCta } from '@/components/content-blocks'

export const metadata: Metadata = {
  title: 'Szabályok és pontozás — Hungary Strandfoci',
  description:
    'A strandfoci hivatalos szabályai: pályaméret, csapatlétszám, játékidő, cserék és a pontozás rendszere.',
}

const rules = [
  {
    title: 'A pálya',
    text: 'A homokpálya kb. 35–37 méter hosszú és 26–28 méter széles, sima, kő- és kagylómentes homokkal. A kapuk 5,5 méter szélesek és 2,2 méter magasak.',
  },
  {
    title: 'A csapatok',
    text: 'Csapatonként öt játékos van a pályán, közülük egy a kapus. A cserepad legfeljebb hét játékost számlál, a cserék száma korlátlan.',
  },
  {
    title: 'A játékidő',
    text: 'A mérkőzés három, egyenként 12 perces harmadból áll, a harmadok között rövid szünettel. Az óra a játék megszakításakor megáll.',
  },
  {
    title: 'Mezítláb',
    text: 'A játékosok cipő nélkül, mezítláb játszanak. Engedélyezett a talp és a boka rögzítő szalagozása, de merev lábbeli tilos.',
  },
  {
    title: 'A szabadrúgások',
    text: 'A legtöbb szabálytalanságot közvetlen szabadrúgás követi, amelyet a vétkes csapat tagja nem védhet emberfal nélkül. A büntetőrúgás 9 méterről történik.',
  },
  {
    title: 'A döntetlen nincs',
    text: 'Döntetlen állásnál hároperces hosszabbítás következik, ahol az első gól dönt. Ha nincs gól, büntetőrúgások hoznak döntést.',
  },
]

const blocks = [
  {
    heading: 'A pontozás rendszere',
    paragraphs: [
      'A bajnokságokban a rendes játékidőben elért győzelem három pontot ér. A hosszabbításban vagy büntetőkkel megszerzett győzelem két pontot, a vereség pedig nulla pontot jelent.',
      'Ez a rendszer ösztönzi a támadó, gólra törő játékot, hiszen a leggyorsabb győzelem hozza a legtöbb pontot.',
    ],
  },
  {
    heading: 'A kapus szerepe',
    paragraphs: [
      'A kapus kézzel és lábbal is indíthatja a támadást, de a kidobott vagy kirúgott labda közvetlenül gólt is érhet. A kapus négy másodpercig tarthatja a labdát.',
      'A homokon a kapus gyakran indítja a gyors ellentámadásokat, ezért szerepe a mezőnyjátékban is meghatározó.',
    ],
  },
  {
    heading: 'Fegyelem és sportszerűség',
    paragraphs: [
      'A sárga és piros lapok rendszere a teremlabdarúgáshoz hasonló. A kiállított játékos két percig nem pótolható, kivéve ha az ellenfél gólt szerez.',
      'A strandfoci szellemisége a látványos, fair játékot helyezi előtérbe — a durvaságot szigorúan büntetik.',
    ],
  },
]

export default function Page() {
  return (
    <main>
      <ScrollReveal />
      <PageHero
        index="04"
        eyebrow="Szabályok · Pontozás"
        title="A játék rendje"
        intro="Pályaméret, csapatlétszám, játékidő és pontozás — minden, ami a homokon zajló mérkőzést szabályozza."
        image="/images/rules-field.png"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="reveal mb-10">
          <SectionTitle eyebrow="Alapszabályok" title="Hat dolog, amit tudni kell" />
        </div>
        <PointList points={rules} />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="reveal mb-12 max-w-2xl">
          <SectionTitle eyebrow="Részletek" title="A mérkőzés mélyebb rétegei" />
        </div>
        <ContentColumns blocks={blocks} />
      </section>

      <PageCta
        title="Ismerd meg a sport múltját"
        text="A szabályok mögött évtizedes történelem áll. Fedezd fel, hogyan vált világjátékká a strandfoci."
        links={[
          { label: 'Történelem', href: '/tortenelem' },
          { label: 'Mi a strandfoci', href: '/mi-a-strandfoci' },
        ]}
      />
    </main>
  )
}
