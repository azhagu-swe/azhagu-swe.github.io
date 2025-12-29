"use client"

import { motion } from "framer-motion"
import { HERO_DATA } from "@/lib/data"

import Image from "next/image"
import { Icon } from "@iconify/react";

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
                <div className="flex items-center gap-4 pt-2">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <a href="/contact" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                            Let's Connect
                        </a>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                    >
                        <a href="/pdf/azhagu-resume.pdf" target="_blank" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                            Download Resume
                        </a>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative group"
            >
                <div className="relative w-32 h-32 md:w-48 md:h-48 shrink-0 overflow-hidden rounded-full border-4 border-primary/50 shadow-2xl shadow-primary/20 transition-all duration-500 group-hover:scale-105 group-hover:shadow-primary/50 group-hover:border-primary">
                    <Image
                        src={images.profile}
                        alt={name}
                        fill
                        priority
                        className="object-cover transition-all duration-500 group-hover:opacity-80 group-hover:grayscale"
                        sizes="(max-width: 768px) 128px, 192px"
                    />

                    {/* Matrix Scanline Effect */}
                    <div className="absolute inset-x-0 top-0 h-full w-full bg-gradient-to-b from-transparent via-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 animate-scan" style={{ backgroundSize: '100% 200%' }} />

                    {/* Horizontal Scan Lines Overlay */}
                    <div className="absolute inset-0 bg-[url('/scanlines.png')] opacity-10 pointer-events-none" style={{ backgroundSize: '4px 4px' }} />

                    {/* Glitch Overlay Text (Optional creative touch) */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Icon icon="simple-icons:matrix" className="w-12 h-12 text-primary animate-pulse" />
                    </div>
                </div>

                {/* Rotating Rings */}
                <div className="absolute -inset-2 rounded-full border border-primary/20 border-t-primary/60 w-[calc(100%+16px)] h-[calc(100%+16px)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -inset-4 rounded-full border border-primary/10 border-b-primary/40 w-[calc(100%+32px)] h-[calc(100%+32px)] animate-[spin_7s_linear_infinite_reverse] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
        </section>
    )
}
