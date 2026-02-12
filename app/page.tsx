import { HeroSection } from "@/components/hero-section"
import { StatsCard } from "@/components/dashboard/stats-card"
import { ActivityGraph } from "@/components/dashboard/activity-graph"
import { RecentWorkList } from "@/components/dashboard/recent-work-list"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AchievementHighlights } from "@/components/social-proof"
import { STATS_DATA } from "@/lib/data"

export default function Home() {
  // Enhanced Stats with Power Metrics - Psychology: Specific numbers = credibility
  const powerStats = {
    latencyReduction: "40%",
    devicesServed: "1M+",
    yearsExp: STATS_DATA.yearsExp,
    certsCount: STATS_DATA.certsCount,
  }

  return (
    <div className="container max-w-7xl mx-auto pt-16 pb-24 px-4 flex flex-col gap-10 min-h-screen">

      {/* Hero Section - F-Pattern: Top-left anchor */}
      <div className="w-full">
        <HeroSection />
      </div>

      {/* Achievement Highlights - Psychology: Quantified proof */}
      <AchievementHighlights />

      {/* Power Stats Grid - Psychology: Large numbers = authority */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="API Latency Reduced"
          value={powerStats.latencyReduction}
          icon="lucide:zap"
          trend="Redis Caching"
          trendUp={true}
          delay={0.1}
        />
        <StatsCard
          title="Devices Powered"
          value={powerStats.devicesServed}
          icon="lucide:cpu"
          description="Geohash Engine"
          delay={0.2}
        />
        <StatsCard
          title="Years Experience"
          value={`${powerStats.yearsExp}+`}
          icon="lucide:calendar-clock"
          trend="Infosys"
          trendUp={true}
          delay={0.3}
        />
        <StatsCard
          title="Certifications"
          value={powerStats.certsCount.toString()}
          icon="lucide:award"
          description="Java & AI"
          delay={0.4}
        />
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Area (2 cols) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <RecentWorkList />

          {/* Testimonials - Psychology: Social proof from authority figures */}
          <TestimonialsSection />
        </div>

        {/* Sidebar Area (1 col) */}
        <div className="flex flex-col gap-6">
          <ActivityGraph />

          {/* Quick Actions with Enhanced Styling */}
          <div className="rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-md flex-1 min-h-[200px]">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-primary/10">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="/contact"
                className="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 transition-all border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">✉️</span>
                <span className="text-xs font-semibold">Hire Me</span>
              </a>
              <a
                href="/pdf/azhagu-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all border border-primary/10 hover:border-primary/30"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">📄</span>
                <span className="text-xs font-medium">Resume</span>
              </a>
              <a
                href="/projects"
                className="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all border border-primary/10 hover:border-primary/30"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">🚀</span>
                <span className="text-xs font-medium">Projects</span>
              </a>
              <a
                href="/blog"
                className="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all border border-primary/10 hover:border-primary/30"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">📝</span>
                <span className="text-xs font-medium">Blog</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

