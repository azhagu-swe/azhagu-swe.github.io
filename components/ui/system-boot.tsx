"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"

const BOOT_SEQUENCES = [
    "[OK] Initializing Core Kernel...",
    "[OK] Loading System Architect Modules...",
    "[OK] Establishing Secure Banking Uplink...",
    "[OK] Syncing Geohash Engine (1M+ nodes)...",
    "[OK] Redis Cache Optimization Engaged (40% boost)...",
    "[OK] Spring Boot Microservices Ready.",
    "[OK] Next.js Hydration Protocol Active.",
    "DECODING ABYSS PROTOCOL...",
    "ACCESS GRANTED."
]

export function SystemBoot() {
    const { theme } = useTheme()
    const [isVisible, setIsVisible] = useState(false)
    const [currentLine, setCurrentLine] = useState(0)
    const [hasBooted, setHasBooted] = useState(false)

    useEffect(() => {
        // Only trigger when switching TO abyss and hasn't booted in this session
        if (theme === "abyss" && !hasBooted) {
            setIsVisible(true)
            setHasBooted(true)

            let timer: NodeJS.Timeout
            let lineIndex = 0

            const runSequence = () => {
                if (lineIndex < BOOT_SEQUENCES.length) {
                    setCurrentLine(lineIndex)
                    lineIndex++
                    timer = setTimeout(runSequence, 150 + Math.random() * 200)
                } else {
                    timer = setTimeout(() => setIsVisible(false), 800)
                }
            }

            runSequence()

            return () => clearTimeout(timer)
        } else if (theme !== "abyss") {
            // Reset so it can run again if they switch back
            setHasBooted(false)
            setIsVisible(false)
        }
    }, [theme, hasBooted])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black font-mono text-primary p-6 overflow-hidden select-none pointer-events-none"
                >
                    <div className="max-w-2xl w-full">
                        <div className="flex items-center gap-2 mb-4 border-b border-primary/20 pb-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            <span className="text-xs opacity-50 ml-2 uppercase tracking-widest">Architect System v2.0.26</span>
                        </div>

                        <div className="space-y-1">
                            {BOOT_SEQUENCES.slice(0, currentLine + 1).map((line, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`${idx === currentLine ? "text-primary" : "text-primary/40"} text-sm md:text-base`}
                                >
                                    <span className="mr-2 opacity-30 tracking-tighter">{">"}</span>
                                    {line}
                                </motion.div>
                            ))}
                            <motion.div
                                animate={{ opacity: [1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="inline-block w-2h-4 bg-primary ml-1"
                            />
                        </div>
                    </div>

                    {/* Faint Scanline Effect */}
                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] z-10" />
                </motion.div>
            )}
        </AnimatePresence>
    )
}
