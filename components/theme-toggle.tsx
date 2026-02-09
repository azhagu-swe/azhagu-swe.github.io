"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full">
                <span className="sr-only">Toggle theme</span>
            </Button>
        )
    }

    const cycleTheme = () => {
        if (theme === 'light') setTheme('dark')
        else setTheme('light')
    }

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={cycleTheme}
            className="w-9 h-9 p-0 rounded-full relative overflow-hidden transition-colors hover:bg-accent/50 group"
        >
            <div className="relative w-5 h-5 flex items-center justify-center">
                {/* Light Mode: Sun */}
                <Sun className={`absolute inset-0 h-full w-full transition-all duration-500 rotate-0 scale-100 ${theme === 'light' ? 'opacity-100 rotate-0 text-foreground' : 'opacity-0 -rotate-90 scale-0'}`} />

                {/* Dark Mode: Moon */}
                <Moon className={`absolute inset-0 h-full w-full transition-all duration-500 rotate-90 scale-0 ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100 text-foreground' : 'opacity-0 rotate-90 scale-0'}`} />
            </div>
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
