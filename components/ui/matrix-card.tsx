"use client"

import { motion } from "framer-motion"
import { useMatrixSound } from "@/hooks/use-matrix-sound"
import { cn } from "@/lib/utils"

interface MatrixCardProps extends React.ComponentProps<typeof motion.div> {
    children: React.ReactNode
    delay?: number
}

export function MatrixCard({ children, className, delay = 0, ...props }: MatrixCardProps) {
    const { playSound } = useMatrixSound()

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "brightness(0.5)" }}
            animate={{ opacity: 1, scale: 1, filter: "brightness(1)" }}
            transition={{
                duration: 0.5,
                delay,
                ease: "circOut"
            }}
            whileHover={{
                scale: 1.01,
                boxShadow: "0 0 20px rgba(0, 255, 65, 0.1)",
                borderColor: "rgba(0, 255, 65, 0.4)"
            }}
            onMouseEnter={() => playSound("hover")}
            onClick={() => playSound("click")}
            className={cn(
                "relative rounded-xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden transition-colors",
                "data-[theme=matrix]:border-green-500/30 data-[theme=matrix]:bg-black/80",
                className
            )}
            {...props}
        >
            {/* Scanline overlay for Matrix theme */}
            <div className="absolute inset-0 pointer-events-none opacity-0 data-[theme=matrix]:opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_2px,3px_100%]" />

            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </motion.div>
    )
}
