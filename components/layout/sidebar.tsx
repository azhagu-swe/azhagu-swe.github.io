"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Icon } from "@iconify/react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { siteConfig } from "@/config/site"

interface SidebarProps {
    className?: string
    isOpen?: boolean
    isMobile?: boolean
    onClose?: () => void
}

export function Sidebar({ className, isOpen, isMobile, onClose }: SidebarProps) {
    const pathname = usePathname()
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [mounted, setMounted] = useState(false)


    useEffect(() => {
        setMounted(true)
        const saved = localStorage.getItem("sidebar-collapsed")
        if (saved) {
            setIsCollapsed(saved === "true")
        }
    }, [])

    const toggleCollapse = () => {
        const newState = !isCollapsed
        setIsCollapsed(newState)
        localStorage.setItem("sidebar-collapsed", String(newState))
    }

    const { theme } = useTheme()

    const getThemeLabel = () => {
        switch (theme) {
            case 'light': return 'Light Mode'
            case 'dark': return 'Dark Mode'
            default: return 'Appearance'
        }
    }

    if (!mounted) {
        return <div className={cn("hidden lg:flex w-[280px] h-screen bg-card/50", className)} />
    }

    return (
        <motion.div
            className={cn("hidden lg:flex h-full flex-col border-r border-border bg-card/50 backdrop-blur-sm relative", className)}
            initial={{ width: 280 }}
            animate={{ width: isCollapsed ? 80 : 280 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            {/* Collapse Toggle Button */}
            <Button
                variant="ghost"
                size="icon"
                className="absolute -right-3 top-6 z-50 h-6 w-6 rounded-full border border-border bg-background shadow-md hover:bg-primary/10 text-primary hover:text-primary hidden lg:flex"
                onClick={toggleCollapse}
                aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
                <Icon
                    icon={isCollapsed ? "lucide:chevron-right" : "lucide:chevron-left"}
                    className="h-3 w-3"
                />
            </Button>

            <div className={cn("p-6 flex items-center", isCollapsed ? "justify-center" : "justify-start")}>
                <div className="flex items-center gap-2 font-bold text-2xl">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 overflow-hidden relative">
                        {mounted && (
                            <img
                                src={'/favicon/dark/android-chrome-192x192.png'}
                                alt="Logo"
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>
                    <AnimatePresence>
                        {!isCollapsed && (
                            <motion.span
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "auto" }}
                                exit={{ opacity: 0, width: 0 }}
                                className="overflow-hidden whitespace-nowrap"
                            >
                                Azhagu.swe
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <div className="flex-1 px-4 py-2 flex flex-col justify-between overflow-y-auto overflow-x-hidden scrollbar-thin">
                {/* Top Section: Portfolio */}
                <div className="flex flex-col gap-2">
                    {siteConfig.sidebarNav.portfolio.map((item) => {
                        const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(`${item.href}/`))
                        return (
                            <Link key={item.href} href={item.href}>
                                <div
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden",
                                        isActive
                                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                                            : "hover:bg-primary/10 hover:text-primary text-muted-foreground hover:shadow-[0_0_20px_hsla(142,70%,50%,0.2)]",
                                        isCollapsed && "justify-center px-2"
                                    )}
                                    title={isCollapsed ? item.title : undefined}
                                >
                                    <Icon icon={item.icon} className={cn("w-5 h-5 shrink-0 z-10", isActive ? "animate-pulse" : "")} />
                                    {!isCollapsed && (
                                        <div className="flex items-center gap-2 z-10">
                                            <motion.span
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="font-medium whitespace-nowrap overflow-hidden"
                                            >
                                                {item.title}
                                            </motion.span>
                                            {/* @ts-ignore */}
                                            {item.badge && (
                                                <motion.span
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    className="px-1.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase tracking-wider border border-emerald-500/20"
                                                >
                                                    {/* @ts-ignore */}
                                                    {item.badge}
                                                </motion.span>
                                            )}
                                        </div>
                                    )}
                                    {isActive && (
                                        <motion.div
                                            layoutId="sidebar-active"
                                            className="absolute inset-0 bg-primary z-0"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        >
                                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-t from-white/20 to-transparent" />
                                        </motion.div>
                                    )}
                                </div>
                            </Link>
                        )
                    })}
                </div>

                {/* Bottom Section: Content */}
                <div className="flex flex-col gap-2 pt-4 border-t border-border/50 mt-4">
                    {!isCollapsed && (
                        <h4 className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">
                            Content
                        </h4>
                    )}
                    {siteConfig.sidebarNav.content.map((item) => {
                        const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(`${item.href}/`))
                        return (
                            <Link key={item.href} href={item.href}>
                                <div
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden",
                                        isActive
                                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                                            : "hover:bg-primary/10 hover:text-primary text-muted-foreground hover:shadow-[0_0_20px_hsla(142,70%,50%,0.2)]",
                                        isCollapsed && "justify-center px-2"
                                    )}
                                    title={isCollapsed ? item.title : undefined}
                                >
                                    <Icon icon={item.icon} className={cn("w-5 h-5 shrink-0 z-10", isActive ? "animate-pulse" : "")} />
                                    {!isCollapsed && (
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="font-medium whitespace-nowrap overflow-hidden z-10"
                                        >
                                            {item.title}
                                        </motion.span>
                                    )}
                                    {isActive && (
                                        <motion.div
                                            layoutId="sidebar-active-content" // Unique layoutId for this section
                                            className="absolute inset-0 bg-primary z-0"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        >
                                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-t from-white/20 to-transparent" />
                                        </motion.div>
                                    )}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>

            <div className={cn("p-6 border-t border-border", isCollapsed && "p-4")}>
                <div className={cn("flex items-center rounded-xl bg-secondary/50", isCollapsed ? "justify-center p-2" : "justify-between p-4")}>
                    {!isCollapsed && (
                        <div className="flex flex-col overflow-hidden">
                            <span className="text-sm font-semibold whitespace-nowrap">{getThemeLabel()}</span>
                        </div>
                    )}
                    <ThemeToggle />
                </div>
            </div>
        </motion.div>
    )
}
