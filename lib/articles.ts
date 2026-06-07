export type Article = {
  slug: string
  title: string
  excerpt: string
  category: string
  readingHint: string
  cover: string
  body: { heading?: string; paragraphs: string[] }[]
}

export const ARTICLES: Article[] = [
  {
    slug: 'a-homok-titka',
    title: 'A homok titka: miért más minden lépés',
    excerpt:
      'A puha felület minden mozdulatot átír. Megnézzük, hogyan formálja a homok a strandfoci mozgáskultúráját.',
    category: 'Technika',
    readingHint: 'Olvasmány',
    cover: '/images/sand-texture.png',
    body: [
      {
        paragraphs: [
          'A homok nem egyszerűen pálya — élő felület, amely minden lépésre másként reagál. A talaj enged, elnyeli az energiát, és arra kényszeríti a játékost, hogy újraépítse mozgásának alapjait.',
          'Aki a füvön nőtt fel, a homokon hirtelen úgy érzi, mintha újra tanulna járni. A súlypont alacsonyabb, a lépés rövidebb, a fordulás óvatosabb.',
        ],
      },
      {
        heading: 'Az energia, amit a homok elvesz',
        paragraphs: [
          'Minden elrugaszkodásnál a homok elnyeli az erő egy részét. Ezért a strandfociban a robbanékonyság és a rövid, gazdaságos mozdulatok kerülnek előtérbe.',
          'A tapasztalt játékos nem küzd a homokkal, hanem együtt mozog vele: kihasználja a puha felület fékező hatását a megállásnál és az irányváltásnál.',
        ],
      },
      {
        heading: 'A láb és a felület párbeszéde',
        paragraphs: [
          'A mezítlábas érintés érzékenyebb kapcsolatot teremt a labdával. A talp finom mozdulatai pontosabb kontrollt adnak, mint a stoplis cipő merevsége.',
          'Ez a közvetlenség teszi a strandfocit egyszerre nehézzé és gyönyörűvé.',
        ],
      },
    ],
  },
  {
    slug: 'egyensuly-mindenek-elott',
    title: 'Egyensúly mindenek előtt',
    excerpt:
      'A stabil törzs és az alacsony súlypont a homokjáték titka. Így építheted fel a strandfoci alapját.',
    category: 'Edzés',
    readingHint: 'Gyakorlat',
    cover: '/images/technique-ball.png',
    body: [
      {
        paragraphs: [
          'A strandfociban az egyensúly nem luxus, hanem túlélés. A folyamatosan mozgó talajon a test apró korrekciókkal tartja fenn a stabilitást.',
          'Ez a képesség fejleszthető — és minél előbb kezded, annál természetesebbé válik.',
        ],
      },
      {
        heading: 'Az alacsony súlypont',
        paragraphs: [
          'A behajlított térd és az enyhén előredöntött törzs alacsonyabbra helyezi a súlypontot, így a játékos stabilabban áll a puha felületen.',
          'Ebből a helyzetből gyorsabban indulhatsz bármely irányba.',
        ],
      },
    ],
  },
  {
    slug: 'a-leveg-jateka',
    title: 'A levegő játéka: miért repül annyit a labda',
    excerpt:
      'A homokon a labda gyakran a levegőben él. Megvizsgáljuk, miért épül a strandfoci a légi megoldásokra.',
    category: 'Technika',
    readingHint: 'Olvasmány',
    cover: '/images/facts-action.png',
    body: [
      {
        paragraphs: [
          'A homokon a labda kiszámíthatatlanul pattan, ezért a játékosok inkább a levegőben tartják. Innen ered a strandfoci látványos, akrobatikus stílusa.',
          'Az ollózó rúgások és a fejjátékos megoldások nem mutatványok — gyakran a leghatékonyabb megoldások.',
        ],
      },
      {
        heading: 'A talaj kiszámíthatatlansága',
        paragraphs: [
          'Egy gödör vagy egy egyenetlenség teljesen megváltoztathatja a labda útját a földön. A levegő ezzel szemben stabil közeg.',
          'Ezért a jó strandfocista először a levegőben gondolkodik.',
        ],
      },
    ],
  },
  {
    slug: 'mezitlab-vagy-sem',
    title: 'Mezítláb vagy sem? A láb és a homok kapcsolata',
    excerpt:
      'A mezítlábas játék a strandfoci védjegye. Mit ad a közvetlen érintés, és mire érdemes figyelni?',
    category: 'Felszerelés',
    readingHint: 'Útmutató',
    cover: '/images/equipment.png',
    body: [
      {
        paragraphs: [
          'A strandfoci hagyományosan mezítláb játszott sport. A csupasz talp finomabb érintést és jobb tapintást ad, ami a homokon különösen értékes.',
          'A láb fokozatosan szokik hozzá a meleg homokhoz és a folyamatos terheléshez.',
        ],
      },
      {
        heading: 'A bőrkeményedés mint barát',
        paragraphs: [
          'A rendszeres játék során a talp ellenállóbbá válik. Eleinte rövidebb edzések ajánlottak, hogy a bőr alkalmazkodjon.',
          'A hűvösebb, reggeli vagy esti homok kíméletesebb a kezdők számára.',
        ],
      },
    ],
  },
  {
    slug: 'a-gyorsasag-illuzioja',
    title: 'A gyorsaság illúziója a homokon',
    excerpt:
      'A homokon nem a leggyorsabb futó nyer, hanem a legokosabb mozgó. A tempó újraértelmezése.',
    category: 'Edzés',
    readingHint: 'Olvasmány',
    cover: '/images/physical-training.png',
    body: [
      {
        paragraphs: [
          'A homok lelassítja a sprintet, de felgyorsítja a gondolkodást. A strandfociban a pozícióérzék és az időzítés többet ér a nyers sebességnél.',
          'A jó játékos kevesebbet fut, de mindig a megfelelő helyen van.',
        ],
      },
    ],
  },
  {
    slug: 'a-kapus-szerepe',
    title: 'A kapus szerepe a homokon',
    excerpt:
      'A strandfociban a kapus támadást is indít, és gyakran a játék motorja. A poszt különleges világa.',
    category: 'Taktika',
    readingHint: 'Olvasmány',
    cover: '/images/rules-field.png',
    body: [
      {
        paragraphs: [
          'A strandfociban a kapus nem csak véd: kézzel indított labdái pillanatok alatt támadássá válhatnak. A poszt aktív, dinamikus és kreatív.',
          'A puha homokon a vetődés is másként működik — lágyabb, de kiszámíthatatlanabb.',
        ],
      },
    ],
  },
  {
    slug: 'naplemente-edzes',
    title: 'Naplemente edzés: a nap leghűvösebb órái',
    excerpt:
      'A meleg homokon az időzítés is edzéstervezés. Miért ideálisak a reggeli és esti órák?',
    category: 'Edzés',
    readingHint: 'Útmutató',
    cover: '/images/beginner.png',
    body: [
      {
        paragraphs: [
          'A déli forróságban a homok égetően meleg lehet, ezért a strandfoci edzések gyakran a hűvösebb órákra esnek.',
          'A reggeli homok tömörebb és kíméletesebb, az esti pedig lágy, kellemes fényekkel.',
        ],
      },
    ],
  },
  {
    slug: 'a-csapatjatek-muveszete',
    title: 'A csapatjáték művészete kis területen',
    excerpt:
      'Öt játékos, szűk pálya, állandó mozgás. A strandfoci csapatdinamikájának alapjai.',
    category: 'Taktika',
    readingHint: 'Olvasmány',
    cover: '/images/hero-beach-soccer.png',
    body: [
      {
        paragraphs: [
          'A kis létszám és a szűk pálya miatt a strandfociban minden játékos folyamatosan részt vesz a játékban. Nincs hely a passzivitásnak.',
          'A gyors helycserék és a folyamatos kommunikáció teszik gördülékennyé a csapatjátékot.',
        ],
      },
    ],
  },
  {
    slug: 'a-labda-amely-lebeg',
    title: 'A labda, amely szinte lebeg',
    excerpt:
      'A strandfoci labdája könnyebb és puhább. Hogyan befolyásolja ez a játékot és a technikát?',
    category: 'Felszerelés',
    readingHint: 'Útmutató',
    cover: '/images/equipment.png',
    body: [
      {
        paragraphs: [
          'A strandfoci labdája puhább és könnyebb, hogy a mezítlábas játék kíméletes legyen, és a légi megoldások könnyebben kivitelezhetők.',
          'A kisebb belső nyomás miatt a labda lágyabban viselkedik az érintésnél.',
        ],
      },
    ],
  },
  {
    slug: 'a-homok-mint-edzo',
    title: 'A homok mint edző: természetes ellenállás',
    excerpt:
      'A puha felület minden mozdulatnál dolgoztat. A homok rejtett kondicionáló ereje.',
    category: 'Edzés',
    readingHint: 'Olvasmány',
    cover: '/images/physical-training.png',
    body: [
      {
        paragraphs: [
          'A homokon való mozgás önmagában is komoly terhelés. A lábizmok, a boka és a törzs folyamatosan dolgozik a stabilitásért.',
          'Ezért sok sportoló használja a homokot kiegészítő edzésként — még akkor is, ha nem strandfocizik.',
        ],
      },
    ],
  },
  {
    slug: 'az-elso-mecs',
    title: 'Az első mérkőzés: amit érdemes tudni',
    excerpt:
      'A kezdő strandfocistának más a ritmus, más a tér. Útmutató az első élményhez.',
    category: 'Kezdőknek',
    readingHint: 'Útmutató',
    cover: '/images/beginner.png',
    body: [
      {
        paragraphs: [
          'Az első strandfoci mérkőzés tele van új ingerrel: a homok, a meleg, a gyors tempó. Érdemes alacsony elvárásokkal, de nyitott szívvel érkezni.',
          'A lényeg nem a teljesítmény, hanem a homok ritmusának megérzése.',
        ],
      },
    ],
  },
  {
    slug: 'a-fordulas-tudomanya',
    title: 'A fordulás tudománya puha talajon',
    excerpt:
      'Az irányváltás a homokon külön technika. Hogyan maradj stabil, miközben gyorsan fordulsz?',
    category: 'Technika',
    readingHint: 'Gyakorlat',
    cover: '/images/technique-ball.png',
    body: [
      {
        paragraphs: [
          'A homokon a hirtelen fordulás könnyen instabilitáshoz vezet. A megoldás a kisebb, ellenőrzött lépések és az alacsony súlypont.',
          'A talp teljes felületét érdemes használni a fékezéshez, nem csak a lábujjakat.',
        ],
      },
    ],
  },
  {
    slug: 'regeneracio-a-tengernel',
    title: 'Regeneráció a tengernél',
    excerpt:
      'A strandkörnyezet ideális a pihenéshez. A víz, a séta és a nyújtás szerepe a felépülésben.',
    category: 'Edzés',
    readingHint: 'Útmutató',
    cover: '/images/history-beach.png',
    body: [
      {
        paragraphs: [
          'A homokjáték után a regeneráció kulcsfontosságú. A hűvös vízben való séta csökkenti az izmok terhelését, a nyújtás pedig oldja a feszültséget.',
          'A tenger közelsége természetes lehetőséget ad a felépülésre.',
        ],
      },
    ],
  },
  {
    slug: 'a-jatek-ritmusa',
    title: 'A játék ritmusa: rövid, intenzív, látványos',
    excerpt:
      'A strandfoci tempója sűrű és hullámzó. A három játékrész dramaturgiája.',
    category: 'Szabályok',
    readingHint: 'Olvasmány',
    cover: '/images/rules-field.png',
    body: [
      {
        paragraphs: [
          'A három, egyenként rövid játékrész intenzív, lüktető ritmust ad a mérkőzésnek. Nincs idő a lazításra, minden pillanat számít.',
          'Ez a sűrűség teszi a strandfocit nézőként is magával ragadóvá.',
        ],
      },
    ],
  },
  {
    slug: 'a-homok-kulturaja',
    title: 'A homok kultúrája: játék és közösség',
    excerpt:
      'A strandfoci nem csak sport, hanem közösségi élmény. A homokpálya társas világa.',
    category: 'Kultúra',
    readingHint: 'Olvasmány',
    cover: '/images/hero-beach-soccer.png',
    body: [
      {
        paragraphs: [
          'A strandfoci körül mindig kialakul egy közösség. A homokpálya nyitott tér, ahol könnyű csatlakozni és játszani.',
          'A nyári hangulat, a tenger és a mozgás összeköti az embereket — ez a sport igazi ereje.',
        ],
      },
    ],
  },
]

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug)
}
