import Link from 'next/link'
import { MAIN_NAV, SITE } from '@/lib/site'

const legalNav = [
  { label: 'Adatvédelem', href: '/adatvedelem' },
  { label: 'Cookie szabályzat', href: '/cookie-szabalyzat' },
  { label: 'Rólunk', href: '/rolunk' },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border/50 bg-card">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/15 blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
              {SITE.tagline}
            </p>
            <p className="mt-5 max-w-sm text-pretty text-lg leading-relaxed text-muted-foreground">
              A strandfoci a homok, a tenger és a mozgás találkozása. Itt a magyar
              homoklabdarúgás világát fedezheted fel — technikától a történelemig.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-6 inline-block font-mono text-sm text-foreground underline decoration-primary/50 underline-offset-4 transition-colors hover:text-primary"
            >
              {SITE.email}
            </a>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              Felfedezés
            </p>
            <ul className="mt-5 space-y-2.5">
              {MAIN_NAV.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              Tovább
            </p>
            <ul className="mt-5 space-y-2.5">
              {MAIN_NAV.slice(6).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {legalNav.slice(0, 2).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="mt-14 overflow-hidden">
          <p className="font-heading text-[18vw] leading-[0.82] tracking-tight text-foreground/[0.06] lg:text-[15rem]">
            STRANDFOCI
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-border/50 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {SITE.domain}
          </p>
          <div className="flex flex-wrap gap-5">
            {legalNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
