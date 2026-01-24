"use client"

import { Icon } from "@iconify/react"
import { Button } from "@/components/ui/button"
import { RefObject, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ScrollToTopFabProps {
    scrollContainerRef: RefObject<HTMLElement | null>
}

export function ScrollToTopFab({ scrollContainerRef }: ScrollToTopFabProps) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const container = scrollContainerRef.current
        if (!container) return

        const toggleVisibility = () => {
            if (container.scrollTop > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        container.addEventListener("scroll", toggleVisibility)
        return () => container.removeEventListener("scroll", toggleVisibility)
    }, [scrollContainerRef])

    const scrollToTop = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" })
        }
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="fixed bottom-24 lg:bottom-6 right-6 z-50"
                >
                    <Button
                        variant="default"
                        size="icon"
                        onClick={scrollToTop}
                        className="h-14 w-14 rounded-full shadow-xl bg-primary hover:bg-primary/90 text-primary-foreground border-none transition-colors duration-300"
                    >
                        <Icon icon="lucide:arrow-up" className="w-6 h-6" />
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
