"use client"

import { motion } from "framer-motion"

interface EliteTextProps {
    text: string
    className?: string
    delay?: number
}

export function EliteText({ text, className, delay = 0 }: EliteTextProps) {
    const letters = text.split("")

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay * i },
        }),
    }

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
            } as const,
        },
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(8px)",
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
            } as const,
        },
    }

    return (
        <motion.span
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={className}
        >
            {letters.map((letter, index) => (
                <motion.span
                    variants={child}
                    key={index}
                    style={{ display: "inline-block", whiteSpace: "pre" }}
                >
                    {letter}
                </motion.span>
            ))}
        </motion.span>
    )
}
