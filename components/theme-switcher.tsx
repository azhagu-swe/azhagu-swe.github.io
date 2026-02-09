"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Icon } from "@iconify/react"
import { clsx } from "clsx"

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()
    const [mountedState, setMountedState] = React.useState(false)

    React.useEffect(() => {
        setMountedState(true)
    }, [])

    if (!mountedState) {
        return <div className="w-24 h-8 animate-pulse bg-muted rounded-full" />
    }

    const themes = [
        { id: 'light', icon: 'ph:sun-bold', label: 'Light' },
        { id: 'dark', icon: 'ph:moon-bold', label: 'Dark' },
    ]

    return (
        <div className="flex items-center gap-2 p-1 bg-secondary rounded-full border border-border">
            {themes.map((t) => (
                <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={clsx(
                        "p-2 rounded-full transition-all duration-300 relative group flex items-center justify-center",
                        theme === t.id
                            ? "bg-background text-primary shadow-sm ring-1 ring-border"
                            : "text-muted-foreground hover:text-primary"
                    )}
                    aria-label={`Switch to ${t.label} theme`}
                >
                    <Icon icon={t.icon} className="w-5 h-5" />
                    <span className="sr-only">{t.label}</span>

                    {/* Tooltip-ish label on hover */}
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-popover text-popover-foreground px-2 py-1 rounded shadow-md pointer-events-none whitespace-nowrap z-50">
                        {t.label}
                    </span>
                </button>
            ))}
        </div>
    )
}
