"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useMatrixSound } from "@/hooks/use-matrix-sound"
import { cn } from "@/lib/utils"
// import { useState } from "react" // Not strictly needed if using motion values directly for glare

interface MatrixCardProps extends React.ComponentProps<typeof motion.div> {
    children: React.ReactNode
    delay?: number
}

export function MatrixCard({ children, className, delay = 0, ...props }: MatrixCardProps) {
    const { playSound } = useMatrixSound()

    // 3D Tilt Logic
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // Smooth physics
    const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 })

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"])

    // Glare position (maps -0.5 -> 0.5 to 0% -> 100%)
    const glareX = useTransform(mouseX, [-0.5, 0.5], [0, 100])
    const glareY = useTransform(mouseY, [-0.5, 0.5], [0, 100])
    const glareOpacity = useTransform(mouseX, [-0.5, 0.5], [0, 0.4]) // Only show glare on interaction? or make it dependent on hover state

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        const rect = event.currentTarget.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseXPos = event.clientX - rect.left
        const mouseYPos = event.clientY - rect.top

        const xPct = (mouseXPos / width) - 0.5
        const yPct = (mouseYPos / height) - 0.5

        x.set(xPct)
        y.set(yPct)
    }

    function handleMouseLeave() {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            style={{ x, y, rotateX, rotateY, z: 100 }}
            initial={{ opacity: 0, scale: 0.95, filter: "brightness(0.5)" }}
            animate={{ opacity: 1, scale: 1, filter: "brightness(1)" }}
            transition={{
                duration: 0.5,
                delay,
                ease: "circOut"
            }}
            whileHover={{
                scale: 1.02,
                boxShadow: "0 0 30px rgba(0, 255, 65, 0.2)",
                borderColor: "rgba(0, 255, 65, 0.6)"
            }}
            onMouseEnter={() => playSound("hover")}
            onClick={() => playSound("click")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative rounded-xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden transition-colors perspective-1000 transform-style-3d group",
                "data-[theme=matrix]:border-green-500/30 data-[theme=matrix]:bg-black/80",
                className
            )}
            {...props}
        >
            {/* Holographic Glare Effect */}
            <motion.div
                style={{
                    opacity: glareOpacity,
                    background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.1) 0%, transparent 80%)`,
                }}
                className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay transition-opacity duration-300"
            />

            {/* Scanline overlay for Matrix theme */}
            <div className="absolute inset-0 pointer-events-none opacity-0 data-[theme=matrix]:opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_2px,3px_100%]" />

            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </motion.div>
    )
}
