"use strict";
import { motion } from "framer-motion";
import { SKILLS_DATA } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function ResumeSkillMatrix() {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            {SKILLS_DATA.map((category, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm"
                >
                    <h3 className="text-lg font-semibold mb-4 text-primary flex items-center gap-2">
                        {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {category.skills.split(", ").map((skill, i) => (
                            <Badge
                                key={skill}
                                variant="outline"
                                className="bg-background/50 hover:bg-primary/10 hover:border-primary/50 transition-colors cursor-default"
                            >
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
