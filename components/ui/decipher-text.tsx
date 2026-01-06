"use client"

import { useEffect, useState, useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

interface DecipherTextProps {
    text: string
    className?: string
    revealOn?: 'hover' | 'inView' | 'load'
    speed?: number
    animate?: boolean
}

const CHARS = '0123456789ABCDEF!@#$%^&*()_+~`|}{[]:;?><,./-='

export function DecipherText({
    text,
    className,
    revealOn = 'inView',
    speed = 50,
    animate = true
}: DecipherTextProps) {
    const [displayText, setDisplayText] = useState(text)
    const [isHovered, setIsHovered] = useState(false)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })
    const intervalRef = useRef<NodeJS.Timeout | null>(null)
    const preferReducedMotion = useReducedMotion()

    const shouldAnimate =
        !preferReducedMotion &&
        ((revealOn === 'load') ||
            (revealOn === 'inView' && isInView) ||
            (revealOn === 'hover' && isHovered))

    useEffect(() => {
        if (!animate || !shouldAnimate) {
            // Reset to original text if not animating, but only if we want to "lock" it back.
            // For scan/hover effects, we might want it to reset.
            if (revealOn === 'hover' && !isHovered) {
                setDisplayText(text)
            }
            return
        }

        let iteration = 0
        clearInterval(intervalRef.current!)

        intervalRef.current = setInterval(() => {
            setDisplayText(prev =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index]
                        }
                        return CHARS[Math.floor(Math.random() * CHARS.length)]
                    })
                    .join("")
            )

            if (iteration >= text.length) {
                clearInterval(intervalRef.current!)
            }

            iteration += 1 / 3
        }, speed)

        return () => clearInterval(intervalRef.current!)
    }, [shouldAnimate, text, speed, animate, revealOn, isHovered])

    return (
        <motion.span
            ref={ref}
            className={className}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {displayText}
        </motion.span>
    )
}
