import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { ARTICLES, getArticle } from '@/lib/articles'

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return { title: 'Magazin — Hungary Strandfoci' }
  return {
    title: `${article.title} — Hungary Strandfoci`,
    description: article.excerpt,
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3)

  return (
    <main>
      <ScrollReveal />

      <article className="pt-28 lg:pt-36">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Link
            href="/magazin"
            className="reveal inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            Vissza a magazinhoz
          </Link>
          <p className="reveal mt-8 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            {article.category} · {article.readingHint}
          </p>
          <h1 className="reveal mt-4 text-balance font-heading text-4xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {article.title}
          </h1>
          <p className="reveal reveal-delay-1 mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            {article.excerpt}
          </p>
        </div>

        <div className="reveal reveal-delay-2 mx-auto mt-10 max-w-5xl px-5 sm:px-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border/60">
            <Image
              src={article.cover || '/placeholder.svg'}
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 960px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl px-5 pb-4 sm:px-8 lg:mt-16">
          <div className="space-y-10">
            {article.body.map((block, i) => (
              <section key={i} className="reveal">
                {block.heading && (
                  <h2 className="mb-4 font-heading text-2xl uppercase leading-tight tracking-tight text-foreground sm:text-3xl">
                    {block.heading}
                  </h2>
                )}
                <div className="space-y-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {block.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <h2 className="reveal mb-8 font-heading text-2xl uppercase tracking-tight text-foreground sm:text-3xl">
          További olvasnivaló
        </h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {related.map((a, i) => (
            <Link
              key={a.slug}
              href={`/magazin/${a.slug}`}
              className="reveal group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-colors hover:border-primary/50"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={a.cover || '/placeholder.svg'}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/70 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  {a.category}
                </span>
                <h3 className="text-balance font-heading text-lg uppercase leading-tight tracking-tight text-foreground">
                  {a.title}
                </h3>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground transition-colors group-hover:text-primary">
                  Olvasd el
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
