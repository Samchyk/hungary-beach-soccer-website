const WORDS = [
  'Strandfoci',
  'Homok',
  'Mozgás',
  'Tenger',
  'Sebesség',
  'Egyensúly',
  'Technika',
  'Nyár',
  'Strandlabdarúgás',
]

export function Marquee() {
  const row = [...WORDS, ...WORDS]
  return (
    <div className="relative overflow-hidden border-y border-border/50 bg-card py-6">
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-heading text-2xl uppercase tracking-tight text-foreground/80 sm:text-3xl">
              {w}
            </span>
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  )
}
