"use client"

import Link from "next/link"
import { Icon } from "@iconify/react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { useState } from "react"

interface NavbarProps {
    onToggleSidebar: () => void
    isSidebarOpen: boolean
}

export function Navbar({ onToggleSidebar, isSidebarOpen }: NavbarProps) {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    return (
        <header className="sticky top-0 z-40 w-full border-b border-primary/10 bg-background/80 backdrop-blur-md">
            <div className="container max-w-5xl mx-auto px-4 flex h-16 items-center justify-between">
                <div className="flex items-center gap-4">
                    {/* Mobile Hamburger */}
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="lg:hidden">
                                <Icon icon="lucide:menu" className="w-5 h-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="pr-0 w-[280px]">
                            <SheetHeader className="px-1 text-left">
                                <SheetTitle className="flex items-center gap-2 font-bold">
                                    {/* <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                    <Icon icon="lucide:zap" className="w-5 h-5 text-primary-foreground" />
                                </div> */}
                                    Portfolio
                                </SheetTitle>
                                <SheetDescription className="text-xs text-muted-foreground">
                                    Navigate through the portfolio sections.
                                </SheetDescription>
                            </SheetHeader>
                            <div className="flex flex-col gap-2 mt-8 px-1">
                                {siteConfig.mainNav.map((item) => {
                                    const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(`${item.href}/`))
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setOpen(false)}
                                            className={cn(
                                                "flex items-center gap-2 px-4 py-3 rounded-lg transition-colors font-medium",
                                                isActive
                                                    ? "bg-primary text-primary-foreground"
                                                    : "hover:bg-accent text-muted-foreground hover:text-foreground"
                                            )}
                                        >
                                            <Icon icon={item.icon} className="w-5 h-5" />
                                            {item.title}
                                        </Link>
                                    )
                                })}
                            </div>
                        </SheetContent>
                    </Sheet>

                    <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
                        {/* <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center hidden lg:flex">
                        <Icon icon="lucide:zap" className="w-5 h-5 text-primary-foreground" />
                    </div> */}
                        <span className="hidden lg:inline-block font-bold text-xl">Portfolio</span>
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    {/* <ThemeToggle /> Removed to avoid duplication with Sidebar */}
                </div>
            </div>
        </header>
    )
}
