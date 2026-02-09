"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { skeletonShimmer, progressiveLoad, DURATION, LUXURY_EASING } from "@/lib/motion"

interface SkeletonProps {
    className?: string
    variant?: "text" | "circular" | "rectangular" | "card"
    width?: string | number
    height?: string | number
    lines?: number
}

/**
 * Premium Skeleton Component
 * Creates perceived performance boost with luxury shimmer animation
 */
export function Skeleton({
    className,
    variant = "rectangular",
    width,
    height,
    lines = 1,
}: SkeletonProps) {
    const baseClasses = "skeleton-shimmer rounded"

    if (variant === "text" && lines > 1) {
        return (
            <div className={cn("space-y-2", className)}>
                {Array.from({ length: lines }).map((_, i) => (
                    <motion.div
                        key={i}
                        initial="initial"
                        animate="animate"
                        variants={skeletonShimmer}
                        className={cn(
                            baseClasses,
                            "h-4",
                            i === lines - 1 && "w-3/4" // Last line shorter
                        )}
                        style={{ animationDelay: `${i * 0.1}s` }}
                    />
                ))}
            </div>
        )
    }

    const variantClasses = {
        text: "h-4 rounded",
        circular: "rounded-full",
        rectangular: "rounded-lg",
        card: "rounded-xl",
    }

    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={skeletonShimmer}
            className={cn(baseClasses, variantClasses[variant], className)}
            style={{ width, height }}
        />
    )
}

/**
 * Skeleton Card - For project card loading states
 */
export function SkeletonCard({ className }: { className?: string }) {
    return (
        <div className={cn("p-6 rounded-2xl border border-border/50 bg-card/30 space-y-4", className)}>
            {/* Image placeholder */}
            <Skeleton variant="rectangular" className="w-full h-48" />

            {/* Title */}
            <Skeleton variant="text" className="w-3/4 h-6" />

            {/* Description */}
            <Skeleton variant="text" lines={2} className="w-full" />

            {/* Tags */}
            <div className="flex gap-2">
                <Skeleton variant="rectangular" className="w-16 h-6 rounded-full" />
                <Skeleton variant="rectangular" className="w-20 h-6 rounded-full" />
                <Skeleton variant="rectangular" className="w-14 h-6 rounded-full" />
            </div>
        </div>
    )
}

/**
 * Processing Indicator - For API/Backend operations
 * Shows "high-speed computation" without generic spinner
 */
export function ProcessingLine({ className }: { className?: string }) {
    return (
        <div className={cn("relative h-0.5 w-full overflow-hidden rounded-full bg-border/30", className)}>
            <motion.div
                className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent"
                animate={{
                    x: ["-100%", "400%"],
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: LUXURY_EASING.swift,
                }}
            />
        </div>
    )
}

/**
 * Processing Pulse - Subtle glow for "thinking" state
 */
export function ProcessingPulse({
    children,
    isProcessing = false,
    className,
}: {
    children: React.ReactNode
    isProcessing?: boolean
    className?: string
}) {
    return (
        <motion.div
            className={cn("relative", className)}
            animate={isProcessing ? {
                boxShadow: [
                    "0 0 0 0 rgba(34, 197, 94, 0)",
                    "0 0 20px 5px rgba(34, 197, 94, 0.2)",
                    "0 0 0 0 rgba(34, 197, 94, 0)",
                ],
            } : {}}
            transition={{
                duration: 1.5,
                repeat: isProcessing ? Infinity : 0,
                ease: LUXURY_EASING.soft,
            }}
        >
            {children}
        </motion.div>
    )
}

/**
 * Data Flow Visualization - Shows backend processing
 */
export function DataFlowLine({ className }: { className?: string }) {
    return (
        <svg
            className={cn("w-full h-8", className)}
            viewBox="0 0 200 32"
            fill="none"
        >
            <motion.path
                d="M0 16 Q50 4, 100 16 T200 16"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                    pathLength: { duration: 1, ease: LUXURY_EASING.elegant },
                    opacity: { duration: 0.3 },
                }}
            />
            {/* Data packet */}
            <motion.circle
                r="4"
                fill="hsl(var(--primary))"
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                style={{
                    offsetPath: "path('M0 16 Q50 4, 100 16 T200 16')",
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: LUXURY_EASING.weighted,
                }}
            />
        </svg>
    )
}

/**
 * Progressive Image - Blurs then reveals
 */
export function ProgressiveImage({
    src,
    alt,
    className,
    width,
    height,
}: {
    src: string
    alt: string
    className?: string
    width?: number | string
    height?: number | string
}) {
    return (
        <motion.img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={cn("transition-all", className)}
            initial="loading"
            animate="loaded"
            variants={progressiveLoad}
        />
    )
}
