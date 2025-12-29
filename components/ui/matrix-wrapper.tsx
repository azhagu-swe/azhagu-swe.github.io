"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface MatrixWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    className?: string
    disableHover?: boolean
}

export function MatrixWrapper({ children, className, disableHover = false, ...props }: MatrixWrapperProps) {
    return (
        <div
            className={cn(
                "relative overflow-hidden group transition-all duration-300",
                className
            )}
            {...props}
        >
            {/* Content */}
            <div className="relative z-10 transition-transform duration-300 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]">
                {children}
            </div>

            {/* Hover Glow Border */}
            <div className="absolute inset-0 border border-primary/0 transition-colors duration-300 group-hover:border-primary/50 pointer-events-none" />

            {/* Scanline Overlay */}
            <div className="absolute inset-0 matrix-scanlines opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none mix-blend-overlay z-0" />

            {/* Active Scan Gradient */}
            <div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 animate-scan pointer-events-none z-0"
                style={{ backgroundSize: '100% 200%' }}
            />
        </div>
    )
}
