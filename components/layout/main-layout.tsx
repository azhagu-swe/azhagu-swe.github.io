"use client"

import { usePathname } from "next/navigation"
import { BottomNav } from "@/components/layout/bottom-nav"
import { Sidebar } from "@/components/layout/sidebar"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { useSidebar } from "@/hooks/use-sidebar"
import { ScrollToTopFab } from "@/components/ui/scroll-to-top-fab"
import { useRef } from "react"
import { MouseGlow } from "@/components/ui/mouse-glow"

export function MainLayout({ children }: { children: React.ReactNode }) {
    const { isOpen, toggle, setOpen, isMobile } = useSidebar()
    const pathname = usePathname()
    const mainRef = useRef<HTMLElement>(null)

    return (
        <div className="flex h-screen overflow-hidden bg-background text-foreground transition-colors duration-300 p-2.5 gap-2.5">
            <MouseGlow />
            {/* Desktop Sidebar (Left) */}
            <Sidebar isOpen={isOpen} isMobile={isMobile} onClose={() => setOpen(false)} className="rounded-xl shadow-sm border border-border/50" />

            {/* Content Column (Right) */}
            <div className="flex flex-col flex-1 overflow-hidden relative transition-all duration-300 gap-2.5 rounded-xl">

                {/* Main Content Area */}
                <main
                    ref={mainRef}
                    className="flex-1 overflow-y-auto overflow-x-hidden relative flex flex-col w-full scroll-smooth rounded-xl border border-border/50 bg-card/30 shadow-sm gap-16"
                >
                    <div className="sticky top-0 z-40 w-full">
                        <Navbar onToggleSidebar={toggle} isSidebarOpen={isOpen} />
                    </div>

                    {children}

                    <Footer />
                </main>

                {/* Mobile Bottom Nav - Persistent */}
                <div className="lg:hidden sticky bottom-0 z-30">

                    <BottomNav />
                </div>
            </div>

            {/* Global Scroll-to-Top FAB */}
            <ScrollToTopFab scrollContainerRef={mainRef} />
        </div>
    )
}
