import type { Metadata } from 'next'
import { LegalLayout } from '@/components/legal-layout'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Cookie szabályzat — Hungary Strandfoci',
  description:
    'A Hungary Strandfoci cookie (süti) szabályzata: milyen sütiket használunk és hogyan kezelheted őket.',
}

const sections = [
  {
    heading: 'Mik azok a sütik?',
    paragraphs: [
      'A sütik (cookie-k) kis méretű szövegfájlok, amelyeket a böngésződ tárol a látogatásod során. Segítenek a Weboldal megfelelő működésében és a felhasználói élmény javításában.',
    ],
  },
  {
    heading: 'Milyen sütiket használunk',
    paragraphs: [
      'Szükséges sütik: a Weboldal alapvető működéséhez nélkülözhetetlenek, például megjegyzik a süti-hozzájárulásoddal kapcsolatos döntésedet.',
      'Statisztikai sütik: anonim módon segítenek megérteni, hogyan használják a látogatók a Weboldalt, hogy fejleszthessük a tartalmat. Ezeket csak a hozzájárulásoddal alkalmazzuk.',
    ],
  },
  {
    heading: 'A hozzájárulás kezelése',
    paragraphs: [
      'Az első látogatáskor megjelenő sávban dönthetsz a sütik elfogadásáról vagy elutasításáról. A döntésedet bármikor módosíthatod a böngésződ beállításainak törlésével.',
      'A szükséges sütik a Weboldal működéséhez minden esetben aktívak maradnak.',
    ],
  },
  {
    heading: 'Sütik kezelése a böngészőben',
    paragraphs: [
      'A legtöbb böngésző lehetővé teszi a sütik megtekintését, törlését és blokkolását. Felhívjuk a figyelmed, hogy egyes sütik letiltása befolyásolhatja a Weboldal működését.',
    ],
  },
  {
    heading: 'Kapcsolat',
    paragraphs: [
      `A sütik használatával kapcsolatos kérdéseiddel fordulj hozzánk a ${SITE.email} címen.`,
    ],
  },
]

export default function Page() {
  return (
    <LegalLayout
      eyebrow="Jogi · Sütik"
      title="Cookie szabályzat"
      updated="2026. január"
      sections={sections}
    />
  )
}
