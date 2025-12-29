"use client"

import { motion } from "framer-motion"
import { HERO_DATA } from "@/lib/data"

import Image from "next/image"

export function HeroSection() {
    const { name, description, images } = HERO_DATA;
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
        <section className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12" aria-label="Introduction">
            <div className="flex-1 flex flex-col gap-4">
                <motion.div
                    className="overflow-hidden flex flex-wrap"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {letters.map((letter, index) => (
                        <motion.h1
                            variants={child}
                            key={index}
                            className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground inline-block"
                        >
                            {letter === " " ? "\u00A0" : letter}
                        </motion.h1>
                    ))}
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-lg md:text-xl text-muted-foreground font-medium tracking-tight leading-relaxed max-w-2xl"
                >
                    {description}
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-32 h-32 md:w-48 md:h-48 shrink-0"
            >
                <Image
                    src={images.profile}
                    alt={name}
                    fill
                    priority
                    className="object-cover rounded-full border-4 border-border/50 shadow-xl"
                    sizes="(max-width: 768px) 128px, 192px"
                />
            </motion.div>
        </section>
    )
}
