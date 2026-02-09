"use client"

import { motion } from "framer-motion"
import { HERO_DATA, SOCIAL_PROOF_DATA, TRUSTED_BY_DATA } from "@/lib/data"
import Image from "next/image"
import { Icon } from "@iconify/react"
import { DecipherText } from "@/components/ui/decipher-text"

export function HeroSection() {
    const { name, title, tagline, description, images, availability, roles } = HERO_DATA

    return (
        <section className="flex flex-col gap-8" aria-label="Introduction">
            {/* Availability Banner - Scarcity Psychology */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm"
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm font-medium text-primary">
                    {availability?.message} {availability?.period} projects
                </span>
            </motion.div>

            {/* Main Hero Content */}
            <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
                {/* Text Content */}
                <div className="flex-1 flex flex-col gap-5">
                    {/* Power Headline with Tagline */}
                    <div className="space-y-2">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-sm font-semibold tracking-wider uppercase text-primary"
                        >
                            {title}
                        </motion.p>
                        <div className="overflow-hidden">
                            <DecipherText
                                text={tagline || `Hey, I'm ${name}.`}
                                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground"
                                animate={true}
                                speed={60}
                            />
                        </div>
                    </div>

                    {/* Bio with Power Positioning */}
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl"
                    >
                        {description}
                    </motion.p>

                    {/* Proof Points - Quick Wins */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="flex flex-wrap gap-3 my-2"
                    >
                        {roles.slice(0, 3).map((role, idx) => (
                            <span
                                key={idx}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-foreground"
                            >
                                {role}
                            </span>
                        ))}
                    </motion.div>

                    {/* CTA Buttons - Primary Hierarchy */}
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        <motion.a
                            href="/contact"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring overflow-hidden"
                        >
                            <span className="relative z-10">Hire Me for Your Next Project</span>
                            <Icon icon="lucide:arrow-right" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent/50 to-primary bg-[length:200%_100%] animate-[shimmer_2s_infinite]" />
                        </motion.a>
                        <motion.a
                            href="/projects"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            whileHover={{ scale: 1.02 }}
                            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-primary/30 bg-background/50 px-8 text-base font-semibold shadow-sm backdrop-blur-sm transition-all hover:bg-primary/10 hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                            <Icon icon="lucide:folder-open" className="w-4 h-4" />
                            View My Work
                        </motion.a>
                        <motion.a
                            href="/pdf/azhagu-resume.pdf"
                            target="_blank"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border/50 bg-card/30 px-6 text-sm font-medium text-muted-foreground transition-all hover:bg-card/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            <Icon icon="lucide:download" className="w-4 h-4" />
                            Resume
                        </motion.a>
                    </div>
                </div>

                {/* Profile Image with Enhanced Effects */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative group"
                >
                    {/* Glowing Background */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

                    <div className="relative w-56 h-56 md:w-80 md:h-80 shrink-0 overflow-hidden rounded-full border-4 border-primary/60 shadow-2xl shadow-primary/30 transition-all duration-500 group-hover:scale-105 group-hover:shadow-primary/50 group-hover:border-primary">
                        <Image
                            src={images.profile}
                            alt={name}
                            fill
                            priority
                            className="object-cover object-top transition-all duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 224px, 320px"
                        />

                        {/* Scanline Effect */}
                        <div className="absolute inset-x-0 top-0 h-full w-full bg-gradient-to-b from-transparent via-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 animate-scan" style={{ backgroundSize: '100% 200%' }} />

                        {/* Horizontal Scan Lines Overlay */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                            backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.5) 50%)',
                            backgroundSize: '100% 4px'
                        }} />
                    </div>

                    {/* Rotating Rings */}
                    <div className="absolute -inset-4 rounded-full border-2 border-primary/30 border-t-primary/70 w-[calc(100%+32px)] h-[calc(100%+32px)] animate-[spin_8s_linear_infinite]" />
                    <div className="absolute -inset-8 rounded-full border border-primary/15 border-b-primary/50 w-[calc(100%+64px)] h-[calc(100%+64px)] animate-[spin_12s_linear_infinite_reverse]" />

                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.3, type: "spring" }}
                        className="absolute -bottom-2 -right-2 md:bottom-4 md:right-0 px-4 py-2 rounded-xl bg-card border-2 border-primary/50 shadow-lg backdrop-blur-sm"
                    >
                        <span className="text-xs font-semibold text-primary">@ Infosys</span>
                    </motion.div>
                </motion.div>
            </div>

            {/* Social Proof Banner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-6 border-t border-border/30"
            >
                {SOCIAL_PROOF_DATA.proofBanner.map((proof, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary/5 to-transparent border border-primary/10"
                    >
                        <Icon icon={proof.icon} className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium text-foreground">{proof.text}</span>
                    </div>
                ))}
            </motion.div>
        </section>
    )
}
