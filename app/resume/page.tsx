"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { ResumeTimeline } from "@/components/resume/timeline";
import { ResumeSkillMatrix } from "@/components/resume/skill-matrix";
import { Separator } from "@/components/ui/separator";
import { HERO_DATA, CONTACT_DATA } from "@/lib/data";

export default function ResumePage() {
    const componentRef = useRef<HTMLDivElement>(null);

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="container max-w-4xl mx-auto py-10 print:py-0 print:max-w-none">
            {/* Print Controls (Hidden when printing) */}
            <div className="flex justify-end mb-8 print:hidden">
                <Button onClick={handlePrint} className="gap-2">
                    <Icon icon="lucide:printer" className="w-4 h-4" />
                    Print / Save PDF
                </Button>
            </div>

            {/* Resume Content */}
            <div ref={componentRef} className="bg-background print:bg-white print:text-black space-y-10">
                {/* Header */}
                <header className="space-y-4 text-center sm:text-left print:text-left">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                        <div className="space-y-2">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight print:text-4xl">
                                {HERO_DATA.name}
                            </h1>
                            <p className="text-xl md:text-2xl text-primary font-medium print:text-black print:text-xl">
                                {HERO_DATA.title}
                            </p>
                            <p className="text-muted-foreground/90 max-w-2xl text-lg print:text-gray-600 print:text-base">
                                {HERO_DATA.description}
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground print:text-black print:text-xs text-right">
                            {CONTACT_DATA.socialLinks.map((link) => (
                                <a
                                    key={link.platform}
                                    href={link.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary transition-colors flex items-center justify-end gap-2 print:text-black print:underline"
                                >
                                    {link.username}
                                    <Icon icon={link.icon} className="w-4 h-4 print:hidden" />
                                </a>
                            ))}
                            <div className="flex items-center justify-end gap-2">
                                India
                                <Icon icon="lucide:map-pin" className="w-4 h-4 print:hidden" />
                            </div>
                        </div>
                    </div>
                </header>

                <Separator className="print:border-black" />

                {/* Experience */}
                <section>
                    <div className="flex items-center gap-2 mb-6">
                        <Icon icon="lucide:briefcase" className="w-6 h-6 text-primary print:hidden" />
                        <h2 className="text-2xl font-bold tracking-tight print:text-xl uppercase print:border-b print:w-full print:pb-1">
                            Experience
                        </h2>
                    </div>
                    <ResumeTimeline />
                </section>

                {/* Skills */}
                <section className="break-inside-avoid">
                    <div className="flex items-center gap-2 mb-6">
                        <Icon icon="lucide:cpu" className="w-6 h-6 text-primary print:hidden" />
                        <h2 className="text-2xl font-bold tracking-tight print:text-xl uppercase print:border-b print:w-full print:pb-1">
                            Technical Skills
                        </h2>
                    </div>
                    <ResumeSkillMatrix />
                </section>
            </div>
        </div>
    );
}
