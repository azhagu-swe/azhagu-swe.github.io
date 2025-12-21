"use client"

import { motion } from "framer-motion"
import { HERO_DATA } from "@/lib/data"

export function HeroSection() {
    const { name, description } = HERO_DATA;
    const sentence = "Hey, I'm " + name.split(" ")[0] + "."; // Adapting to keep the friendly intro style if desired, or just use name.
    // Actually, let's just use the name from data directly or maybe "Hey, I'm [Name]".
    // The previous text was "Hey, I'm Alagu."
    // The new name is "Alagappan P".
    // I will use "Hey, I'm Alagappan P." to be safe and use the data source.
    const textToAnimate = `Hey, I'm ${name}.`;
    const letters = textToAnimate.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
        }),
    }

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    } as any

    return (
        <div className="flex flex-col gap-2">
            <motion.div
                className="overflow-hidden flex flex-wrap"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {letters.map((letter, index) => (
                    <motion.span
                        variants={child}
                        key={index}
                        className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground"
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                ))}
            </motion.div>
            <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-lg md:text-xl text-muted-foreground font-medium tracking-tight"
            >
                {description}
            </motion.span>
        </div>
    )
}
