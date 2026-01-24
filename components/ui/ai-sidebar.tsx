"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Icon } from "@iconify/react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function AiSidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState("")

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className={cn(
                    "fixed right-6 bottom-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 group",
                    isOpen ? "bg-green-500 shadow-[0_0_30px_rgba(0,255,65,0.4)]" : "bg-black border border-green-500/30 hover:border-green-500/80 hover:shadow-[0_0_15px_rgba(0,255,65,0.2)]"
                )}
                onClick={() => setIsOpen(!isOpen)}
            >
                <Icon
                    icon={isOpen ? "lucide:x" : "lucide:bot"}
                    className={cn("w-6 h-6 transition-colors", isOpen ? "text-black" : "text-green-500")}
                />
            </motion.button>

            {/* Sidebar Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 bottom-0 w-80 md:w-96 bg-black/90 border-l border-green-500/20 z-40 shadow-2xl p-6 pt-24 backdrop-blur-xl"
                    >
                        <div className="flex flex-col h-full">
                            <div className="mb-6">
                                <h3 className="text-xl font-bold flex items-center gap-2 text-white font-mono tracking-tighter">
                                    <Icon icon="lucide:terminal" className="text-green-500" />
                                    MATRIX_AI_V1
                                </h3>
                                <p className="text-xs text-green-500/60 mt-1 font-mono">
                                    [SYSTEM ONLINE] Analysis engine active.
                                </p>
                            </div>

                            {/* Chat Area Placeholder */}
                            <div className="flex-grow space-y-4 mb-4 overflow-y-auto">
                                <div className="p-3 rounded-none border border-green-500/20 bg-green-500/5 text-sm text-green-100 font-mono">
                                    &gt; CONNECTED.<br />
                                    &gt; I have indexed the entire portfolio.<br />
                                    &gt; Awaiting query...
                                </div>
                                <div className="p-3 rounded-none border border-dashed border-green-500/20 text-sm italic text-green-500/50 font-mono">
                                    Example: "Summarize the Geohash Engine project"
                                </div>
                            </div>

                            {/* Input Area */}
                            <div className="relative">
                                <Input
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Execute query..."
                                    className="pr-10 bg-black border-green-500/30 text-green-500 placeholder:text-green-500/30 focus-visible:border-green-500 focus-visible:ring-green-500/20 font-mono rounded-none"
                                />
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="absolute right-1 top-1 h-8 w-8 text-green-500 hover:text-green-400 hover:bg-green-500/10 rounded-none"
                                >
                                    <Icon icon="lucide:send" className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
