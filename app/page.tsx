"use client"

import { HeroSection } from "@/components/hero-section"
import { StatsCard } from "@/components/dashboard/stats-card"
import { ActivityGraph } from "@/components/dashboard/activity-graph"
import { RecentWorkList } from "@/components/dashboard/recent-work-list"
import { STATS_DATA } from "@/lib/data"

export default function Home() {
  // Derived Stats from Centralized Data
  const { yearsExp, projectsCount, skillsCount, certsCount } = STATS_DATA

  return (
    <div className="container max-w-7xl mx-auto pt-20 pb-24 px-4 flex flex-col gap-8 min-h-screen">

      {/* Top Row: Hero and Intro */}
      <div className="w-full">
        <HeroSection />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Years Experience"
          value={`${yearsExp}+`}
          icon="lucide:calendar-clock"
          trend="Growing"
          trendUp={true}
          delay={0.1}
        />
        <StatsCard
          title="Projects"
          value={projectsCount.toString()}
          icon="lucide:rocket"
          description="Web Apps & Tools"
          delay={0.2}
        />
        <StatsCard
          title="Tech Skills"
          value={skillsCount.toString()}
          icon="lucide:cpu"
          trend="Latest Stack"
          trendUp={true}
          delay={0.3}
        />
        <StatsCard
          title="Certifications"
          value={certsCount.toString()}
          icon="lucide:award"
          delay={0.4}
        />
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Area (2 cols) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <RecentWorkList />
        </div>

        {/* Sidebar Area (1 col) */}
        <div className="flex flex-col gap-6">
          <ActivityGraph />

          <div className="rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-md flex-1 min-h-[200px]">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <a href="/contact" className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors border border-primary/10">
                <span className="text-2xl">✉️</span>
                <span className="text-xs font-medium">Contact</span>
              </a>
              <a href="/pdf/azhagu-resume.pdf" target="_blank" className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors border border-primary/10">
                <span className="text-2xl">📄</span>
                <span className="text-xs font-medium">Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
