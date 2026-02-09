"use client"

import { motion } from "framer-motion"
import { Icon } from "@iconify/react"
import { SOCIAL_PROOF_DATA } from "@/lib/data"

export function TestimonialsSection() {
    const { testimonials } = SOCIAL_PROOF_DATA

    if (!testimonials || testimonials.length === 0) return null

    return (
        <section className="py-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
            >
                {/* Section Header */}
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                        <Icon icon="lucide:quote" className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">What People Say</h3>
                        <p className="text-sm text-muted-foreground">Feedback from colleagues and collaborators</p>
                    </div>
                </div>

                {/* Testimonial Cards */}
                <div className="grid gap-4 md:grid-cols-2">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * idx, duration: 0.5 }}
                            className="group relative"
                        >
                            <div className="testimonial-glow p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-300 hover:bg-card/70 hover:border-primary/30">
                                {/* Quote Icon */}
                                <Icon
                                    icon="lucide:quote"
                                    className="w-8 h-8 text-primary/20 mb-3"
                                />

                                {/* Quote Text */}
                                <p className="text-foreground/90 leading-relaxed mb-4 italic">
                                    "{testimonial.quote}"
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                                        <Icon icon="lucide:user" className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">{testimonial.author}</p>
                                        <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                                    </div>
                                </div>

                                {/* Decorative Gradient */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-2xl pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
