import type { Metadata } from 'next'
import { LegalLayout } from '@/components/legal-layout'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Adatvédelmi tájékoztató — Hungary Strandfoci',
  description:
    'A Hungary Strandfoci adatvédelmi tájékoztatója: milyen adatokat kezelünk, milyen célból és milyen jogaid vannak.',
}

const sections = [
  {
    heading: 'Bevezetés',
    paragraphs: [
      `A jelen tájékoztató a ${SITE.domain} weboldal (a továbbiakban: Weboldal) adatkezelési gyakorlatát ismerteti. Elkötelezettek vagyunk a látogatók személyes adatainak védelme iránt, és adatkezelésünk megfelel a hatályos adatvédelmi jogszabályoknak, így az Európai Unió Általános Adatvédelmi Rendeletének (GDPR).`,
    ],
  },
  {
    heading: 'Milyen adatokat kezelünk',
    paragraphs: [
      'Kapcsolatfelvételi űrlap: amennyiben üzenetet küldesz, kezeljük az általad megadott nevet, e-mail címet és az üzenet tartalmát, kizárólag a megkeresés megválaszolása céljából.',
      'Naplóadatok és sütik: a Weboldal működése és látogatottsági statisztikák céljából automatikusan rögzülhetnek technikai adatok, mint az IP-cím, böngészőtípus és a látogatás időpontja.',
    ],
  },
  {
    heading: 'Az adatkezelés célja és jogalapja',
    paragraphs: [
      'A kapcsolatfelvételi adatokat a megkeresésed megválaszolása érdekében, a te hozzájárulásod alapján kezeljük.',
      'A technikai adatokat a Weboldal biztonságos működtetéséhez fűződő jogos érdek alapján kezeljük.',
    ],
  },
  {
    heading: 'Az adatok megőrzése',
    paragraphs: [
      'A kapcsolatfelvételi adatokat csak addig őrizzük, ameddig a megkeresés megválaszolásához vagy az esetleges utókövetéshez szükséges, ezt követően töröljük azokat.',
    ],
  },
  {
    heading: 'Adattovábbítás',
    paragraphs: [
      'Személyes adataidat harmadik félnek nem adjuk el. Adattovábbításra kizárólag jogszabályi kötelezettség esetén, vagy a Weboldal működését biztosító technikai szolgáltatók (pl. tárhelyszolgáltató) felé kerülhet sor, megfelelő garanciák mellett.',
    ],
  },
  {
    heading: 'A te jogaid',
    paragraphs: [
      'Jogosult vagy tájékoztatást kérni az általunk kezelt adatokról, kérheted azok helyesbítését, törlését vagy kezelésük korlátozását, valamint visszavonhatod a hozzájárulásodat.',
      `Jogaid gyakorlásához vagy bármely adatvédelmi kérdésben írj nekünk a ${SITE.email} címre.`,
    ],
  },
  {
    heading: 'Kapcsolat',
    paragraphs: [
      `Adatvédelemmel kapcsolatos kérdéseiddel fordulj hozzánk bizalommal a ${SITE.email} e-mail címen.`,
    ],
  },
]

export default function Page() {
  return (
    <LegalLayout
      eyebrow="Jogi · Adatvédelem"
      title="Adatvédelmi tájékoztató"
      updated="2026. január"
      sections={sections}
    />
  )
}
