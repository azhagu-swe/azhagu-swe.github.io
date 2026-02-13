"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react"

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        // Show a placeholder Sun icon during SSR/hydration to prevent layout shift
        return (
            <Button variant="ghost" size="sm" className="w-9 h-9 p-0 rounded-full relative overflow-hidden">
                <div className="relative w-5 h-5 flex items-center justify-center">
                    <Sun className="h-full w-full text-foreground opacity-70" />
                </div>
                <span className="sr-only">Toggle theme</span>
            </Button>
        )
    }

    const cycleTheme = () => {
        if (resolvedTheme === 'light') setTheme('dark')
        else setTheme('light')
    }

    // Determine which icon to show based on resolvedTheme
    const isLight = resolvedTheme === 'light'
    const isDark = resolvedTheme === 'dark'

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={cycleTheme}
            className="w-9 h-9 p-0 rounded-full relative overflow-hidden transition-colors hover:bg-primary/10 hover:text-primary group"
        >
            <div className="relative w-5 h-5 flex items-center justify-center">
                {/* Light Mode: Sun */}
                <Sun className={`absolute inset-0 h-full w-full transition-all duration-500 ${isLight ? 'opacity-100 rotate-0 scale-100 text-foreground' : 'opacity-0 -rotate-90 scale-0'}`} />

                {/* Dark Mode: Moon */}
                <Moon className={`absolute inset-0 h-full w-full transition-all duration-500 ${isDark ? 'opacity-100 rotate-0 scale-100 text-foreground' : 'opacity-0 rotate-90 scale-0'}`} />
            </div>
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
