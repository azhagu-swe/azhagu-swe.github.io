"use client"

import { useTheme } from "next-themes"
import { useEffect } from "react"

export function FaviconManager() {
    const { resolvedTheme } = useTheme()

    useEffect(() => {
        const updateFavicon = (theme: string | undefined) => {
            const link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']")
            if (!link) return

            const isDark = theme === 'dark'
            const faviconPath = isDark ? '/favicon/dark/favicon.ico' : '/favicon/light/favicon.ico'

            link.href = faviconPath
        }

        updateFavicon(resolvedTheme)
    }, [resolvedTheme])

    return null
}
