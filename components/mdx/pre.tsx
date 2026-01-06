"use client"

import { useState, useRef } from "react"
import { Icon } from "@iconify/react"
import { cn } from "@/lib/utils"

export function Pre({ children, className, ...props }: React.HTMLAttributes<HTMLPreElement>) {
    const [isCopied, setIsCopied] = useState(false)
    const preRef = useRef<HTMLPreElement>(null)

    const handleCopy = async () => {
        if (!preRef.current) return

        const codeElement = preRef.current.querySelector("code")
        if (!codeElement) return

        const code = codeElement.textContent || ""

        try {
            await navigator.clipboard.writeText(code)
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 2000)
        } catch (err) {
            console.error("Failed to copy code", err)
        }
    }

    return (
        <div className="relative my-6 group rounded-lg border border-border bg-card/50 overflow-hidden">
            {/* Mac-style header */}
            <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-border/50">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 text-xs font-mono text-muted-foreground/50">
                    terminal
                </div>
                <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-md hover:bg-background transition-colors text-muted-foreground hover:text-foreground"
                    aria-label="Copy code"
                >
                    {isCopied ? (
                        <Icon icon="lucide:check" className="w-4 h-4 text-green-500" />
                    ) : (
                        <Icon icon="lucide:copy" className="w-4 h-4" />
                    )}
                </button>
            </div>

            {/* Code Content */}
            <div className="p-0 overflow-x-auto">
                <pre
                    ref={preRef}
                    className={cn(
                        "p-4 overflow-x-auto mb-0 bg-transparent rounded-none",
                        className
                    )}
                    {...props}
                >
                    {children}
                </pre>
            </div>
        </div>
    )
}
