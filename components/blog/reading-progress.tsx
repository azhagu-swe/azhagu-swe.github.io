"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

export function ReadingProgress() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 z-50 origin-left bg-gradient-to-r from-primary via-accent to-primary background-animate"
                style={{ scaleX, opacity: isVisible ? 1 : 0, transition: "opacity 0.3s" }}
            />
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 z-40 origin-left bg-primary/20 blur-sm"
                style={{ scaleX, opacity: isVisible ? 1 : 0, transition: "opacity 0.3s" }}
            />
        </>
    )
}
