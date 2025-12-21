"use client"

import { BentoGrid, BentoItem } from "@/components/home/bento-grid"
import { ThemeToggle } from "@/components/theme-toggle"
import { Icon } from "@iconify/react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { BentoCard } from "@/components/ui/bento-card"
import { HeroSection } from "@/components/hero-section"
import { HOME_DATA, TECH_ICONS, SOCIAL_LINKS } from "@/lib/data"

export default function Home() {
  return (
    <div className="container py-10 min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BentoGrid className="max-w-4xl mx-auto auto-rows-[minmax(100px,auto)]">

          {/* Hero Section - 2x2 */}
          <BentoItem
            colSpan={2}
            className="row-span-2 min-h-[300px]"
            componentWrapper={BentoCard} // Use the new wrapper
            title={<HeroSection />} // Use the new Hero
            description={HOME_DATA.hero.description}
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-grid-black/[0.1] dark:bg-grid-white/[0.1] bg-[size:20px_20px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
                <Icon icon="fluent-emoji:waving-hand" className="w-24 h-24 md:w-32 md:h-32 group-hover:scale-110 transition-transform duration-300" />
              </div>
            }
          />

          {/* Theme Switcher Showcase - 1x1 */}
          <BentoItem
            colSpan={1}
            title={HOME_DATA.theme.title}
            componentWrapper={BentoCard}
            description={HOME_DATA.theme.description}
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-secondary/50 items-center justify-center">
                <ThemeToggle />
              </div>
            }
          />

          {/* Socials - 1x1 */}
          <BentoItem
            colSpan={1}
            title={HOME_DATA.connect.title}
            componentWrapper={BentoCard}
            description={HOME_DATA.connect.description}
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-background/50 border border-border/50 items-center justify-center gap-4">
                <Link href={SOCIAL_LINKS.find(l => l.platform === 'GitHub')?.link || '#'} target="_blank">
                  <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                    <Icon icon="mdi:github" className="w-6 h-6" />
                  </Button>
                </Link>
                <Link href={SOCIAL_LINKS.find(l => l.platform.includes('Twitter') || l.platform.includes('X'))?.link || '#'} target="_blank">
                  <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                    <Icon icon="mdi:twitter" className="w-6 h-6" />
                  </Button>
                </Link>
              </div>
            }
          />

          {/* Projects Link - 2x1 */}
          <BentoItem
            colSpan={2}
            title={HOME_DATA.projects.title}
            componentWrapper={BentoCard}
            description={HOME_DATA.projects.description}
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 items-center justify-center">
                <Icon icon="lucide:code-2" className="w-16 h-16 text-white" />
              </div>
            }
            onClick={() => window.location.href = '/projects'}
          />

          {/* Blog Link - 1x1 */}
          <BentoItem
            colSpan={1}
            title={HOME_DATA.blog.title}
            componentWrapper={BentoCard}
            description={HOME_DATA.blog.description}
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 items-center justify-center">
                <Icon icon="lucide:book-open" className="w-12 h-12 text-white" />
              </div>
            }
            onClick={() => window.location.href = '/blog'}
          />

          {/* Tech Stack - 3x1 */}
          <BentoItem
            colSpan={3}
            title={HOME_DATA.techStack.title}
            componentWrapper={BentoCard}
            description={HOME_DATA.techStack.description}
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-card/50 border border-border/50 items-center justify-around px-4 overflow-hidden">
                <Icon icon={TECH_ICONS.NextJS} className="w-10 h-10 grayscale hover:grayscale-0 transition-all" />
                <Icon icon={TECH_ICONS.React} className="w-10 h-10 blur-[1px] hover:blur-0 transition-all" />
                <Icon icon={TECH_ICONS.Tailwind} className="w-10 h-10 grayscale hover:grayscale-0 transition-all" />
                <Icon icon={TECH_ICONS.TypeScript} className="w-10 h-10 blur-[1px] hover:blur-0 transition-all" />
                <Icon icon={TECH_ICONS.ShadcnUI} className="w-10 h-10 text-black dark:text-white grayscale hover:grayscale-0 transition-all" />
                <Icon icon={TECH_ICONS.FramerMotion} className="w-10 h-10 blur-[1px] hover:blur-0 transition-all" />
              </div>
            }
          />

        </BentoGrid>
      </motion.div>
    </div>
  )
}
