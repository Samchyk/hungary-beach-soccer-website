import { ScrollReveal } from '@/components/scroll-reveal'
import { HomeHero } from '@/components/home/home-hero'
import { Marquee } from '@/components/home/marquee'
import { IntroStory, StatsBand } from '@/components/home/intro-story'
import { FeatureGrid } from '@/components/home/feature-grid'
import { BlogPreview } from '@/components/home/blog-preview'

export default function Page() {
  return (
    <main>
      <ScrollReveal />
      <HomeHero />
      <Marquee />
      <IntroStory />
      <StatsBand />
      <FeatureGrid />
      <BlogPreview />
    </main>
  )
}
