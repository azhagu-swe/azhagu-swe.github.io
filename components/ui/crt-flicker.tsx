"use client"

import { useEffect, useState } from "react"
import { useReducedMotion } from "framer-motion"

export function CRTFlicker() {
    const [mounted, setMounted] = useState(false)
    const shouldReduceMotion = useReducedMotion()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted || shouldReduceMotion) return null

    return (
        <>
            {/* Rare Global Flicker */}
            <div className="fixed inset-0 pointer-events-none z-[100] animate-flicker bg-white/5 opacity-0 mix-blend-overlay" />

            {/* Subtle Vignette for CRT depth */}
            <div className="fixed inset-0 pointer-events-none z-[99] bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.1)_100%)]" />
        </>
    )
}
