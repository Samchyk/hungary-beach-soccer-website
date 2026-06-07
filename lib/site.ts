export type NavItem = {
  label: string
  href: string
  desc?: string
}

export const SITE = {
  name: 'Hungary Strandfoci',
  wordmark: 'STRANDFOCI',
  domain: 'hungarystrandfoci.com',
  email: 'info@hungarystrandfoci.com',
  tagline: 'A homokon élő labdarúgás',
}

export const MAIN_NAV: NavItem[] = [
  { label: 'Mi a strandfoci', href: '/mi-a-strandfoci', desc: 'A homok játékának alapjai' },
  { label: 'Technika és edzés', href: '/technika', desc: 'Labdakezelés a homokon' },
  { label: 'Történelem', href: '/tortenelem', desc: 'A magyar strandfoci útja' },
  { label: 'Szabályok', href: '/szabalyok', desc: 'Mérkőzés és pontozás' },
  { label: 'Fizikai felkészülés', href: '/fizikai-felkeszules', desc: 'Állóképesség és mozgás' },
  { label: 'Érdekességek', href: '/erdekessegek', desc: 'A homok kuriózumai' },
  { label: 'Felszerelés', href: '/felszereles', desc: 'Amire szükséged van' },
  { label: 'Kezdő útmutató', href: '/kezdo-utmutato', desc: 'Az első lépések' },
  { label: 'Magazin', href: '/magazin', desc: 'Írások a homokról' },
  { label: 'Rólunk', href: '/rolunk', desc: 'A projektről és kapcsolat' },
]
