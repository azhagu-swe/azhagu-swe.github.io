"use client"

import { useCallback, useRef, useEffect } from "react"
import { useTheme } from "next-themes"

export function useMatrixSound() {
    const { theme } = useTheme()
    const audioContextRef = useRef<AudioContext | null>(null)

    useEffect(() => {
        // strict check for browser environment
        if (typeof window !== 'undefined' && !audioContextRef.current) {
            const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext
            if (AudioContextClass) {
                audioContextRef.current = new AudioContextClass()
            }
        }

        return () => {
            if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
                audioContextRef.current.close()
                audioContextRef.current = null
            }
        }
    }, [])

    const playSound = useCallback((type: "hover" | "click" | "ambient" = "hover") => {
        if (theme !== "dark" || !audioContextRef.current) return

        const ctx = audioContextRef.current
        if (ctx.state === 'suspended') {
            ctx.resume().catch(() => { })
            return
        }

        const osc = ctx.createOscillator()
        const gainNode = ctx.createGain()

        osc.connect(gainNode)
        gainNode.connect(ctx.destination)

        const now = ctx.currentTime

        if (type === "hover") {
            // High pitched short blip
            osc.type = "sine"
            osc.frequency.setValueAtTime(800, now)
            osc.frequency.exponentialRampToValueAtTime(1200, now + 0.05)

            gainNode.gain.setValueAtTime(0.05, now)
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.05)

            osc.start(now)
            osc.stop(now + 0.05)
        } else if (type === "click") {
            // Deeper mechanical click
            osc.type = "square"
            osc.frequency.setValueAtTime(200, now)
            osc.frequency.exponentialRampToValueAtTime(50, now + 0.1)

            gainNode.gain.setValueAtTime(0.05, now)
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.1)

            osc.start(now)
            osc.stop(now + 0.1)
        }
    }, [theme])

    return { playSound }
}
