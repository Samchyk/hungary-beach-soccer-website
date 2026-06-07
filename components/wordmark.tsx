import { cn } from '@/lib/utils'

/**
 * Custom wordmark for Hungary Strandfoci.
 * A bold display mark with a sunset "rising sun" cut into the S,
 * paired with a horizon line under the word.
 */
export function Wordmark({
  className,
  showTagline = false,
}: {
  className?: string
  showTagline?: boolean
}) {
  return (
    <span className={cn('inline-flex flex-col leading-none', className)}>
      <span className="flex items-end gap-1.5">
        <span
          aria-hidden
          className="relative inline-block h-3 w-3 translate-y-[-1px] rounded-full bg-primary glow-ring"
        />
        <span className="font-heading text-xl uppercase tracking-tight text-foreground sm:text-2xl">
          Strand<span className="text-primary">foci</span>
        </span>
      </span>
      {showTagline && (
        <span className="mt-1 pl-[18px] font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Hungary
        </span>
      )}
    </span>
  )
}
