"use strict";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { EXPERIENCE_DATA } from "@/lib/data";

export function ResumeTimeline() {
    return (
        <div className="relative border-l-2 border-primary/20 ml-3 space-y-12">
            {EXPERIENCE_DATA.roles.map((role, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="pl-8 relative group"
                >
                    {/* Timeline Dot */}
                    <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors" />

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                        <div>
                            <h3 className="text-xl font-bold leading-none">{role.title}</h3>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-lg font-semibold text-primary">{role.company}</span>
                                <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                                <span className="text-sm text-muted-foreground">{role.location}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full border border-border/50">
                            <Icon icon="lucide:calendar" className="w-3.5 h-3.5" />
                            {role.duration}
                        </div>
                    </div>

                    <ul className="list-disc list-outside ml-4 mt-4 space-y-2 text-muted-foreground/90">
                        {role.responsibilities.map((resp, i) => (
                            <li key={i} dangerouslySetInnerHTML={{ __html: resp }} />
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                        {role.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
