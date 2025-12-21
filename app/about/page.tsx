import {
    ACHIEVEMENTS_DATA,
    CERTIFICATIONS_DATA,
    EXPERIENCE_DATA,
    PARTICIPATIONS_DATA,
    SKILLS_DATA,
} from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Icon } from "@iconify/react"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
    title: "About | Alagappan P",
    description: "Learn more about my experience, skills, and journey.",
}

export default function AboutPage() {
    return (
        <div className="container py-10 max-w-4xl mx-auto space-y-16">
            {/* Header Section */}
            <section className="space-y-4">
                <h1 className="font-heading text-4xl font-bold tracking-tight lg:text-5xl">
                    About Me
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                    {EXPERIENCE_DATA.header.subtitle}
                </p>
            </section>

            <Separator />

            {/* Experience Section */}
            <section className="space-y-8">
                <div className="flex items-center gap-2">
                    <Icon icon="lucide:briefcase" className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold tracking-tight">Professional Experience</h2>
                </div>

                <div className="relative border-l border-border/50 ml-3 space-y-12">
                    {EXPERIENCE_DATA.roles.map((role, index) => (
                        <div key={index} className="pl-8 relative group">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background transition-all group-hover:scale-125 group-hover:ring-accent/20" />

                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                                <div>
                                    <h3 className="text-xl font-semibold leading-none">{role.title}</h3>
                                    <p className="text-lg font-medium text-muted-foreground mt-1">{role.company}</p>
                                </div>
                                <div className="flex flex-col sm:items-end gap-1 text-sm text-muted-foreground">
                                    <span className="font-mono bg-secondary/50 px-2 py-0.5 rounded">{role.duration}</span>
                                    <span>{role.location}</span>
                                </div>
                            </div>

                            <ul className="list-disc list-outside ml-4 mt-4 space-y-2 text-muted-foreground">
                                {role.responsibilities.map((resp, i) => (
                                    <li key={i} dangerouslySetInnerHTML={{ __html: resp }} />
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {role.techStack.map((tech) => (
                                    <Badge key={tech} variant="secondary" className="text-xs">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Separator />

            {/* Skills Section */}
            <section className="space-y-8">
                <div className="flex items-center gap-2">
                    <Icon icon="lucide:cpu" className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold tracking-tight">Technical Skills</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {SKILLS_DATA.map((category, index) => (
                        <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50">
                            <CardHeader>
                                <CardTitle className="text-lg">{category.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.split(", ").map((skill) => (
                                        <Badge key={skill} variant="outline">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <Separator />

            {/* Achievements Section */}
            <section className="space-y-8">
                <div className="flex items-center gap-2">
                    <Icon icon="lucide:trophy" className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold tracking-tight">Achievements</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {ACHIEVEMENTS_DATA("").map((item, index) => (
                        <Card key={index} className="overflow-hidden group bg-card/50 border-border/50">
                            {/* Note: In a real scenario usually images are handled with Next.js Image component, 
                                 but the data source has relative paths that might need processing or use as src directly if in public.
                                 Assuming data paths start with /image/... which maps to public/image/... */}
                            <div className="relative h-48 w-full overflow-hidden bg-muted">
                                {/* Placeholder or Image if valid */}
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary">
                                    <Icon icon="lucide:image" className="w-8 h-8 opacity-20" />
                                </div>
                                <Image
                                    src={item.img}
                                    alt="Achievement"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <CardContent className="p-4">
                                <p className="text-sm font-medium leading-relaxed">
                                    {item.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                    {PARTICIPATIONS_DATA("").map((item, index) => (
                        <Card key={`part-${index}`} className="overflow-hidden group bg-card/50 border-border/50">
                            <div className="relative h-48 w-full overflow-hidden bg-muted">
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary">
                                    <Icon icon="lucide:image" className="w-8 h-8 opacity-20" />
                                </div>
                                <Image
                                    src={item.img}
                                    alt="Participation"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <CardContent className="p-4">
                                <p className="text-sm font-medium leading-relaxed">
                                    {item.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <Separator />

            {/* Certifications Section */}
            <section className="space-y-8 pb-10">
                <div className="flex items-center gap-2">
                    <Icon icon="lucide:award" className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold tracking-tight">Certifications</h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {CERTIFICATIONS_DATA("").map((cert, index) => (
                        <Card key={index} className="bg-card/50 border-border/50 flex flex-col h-full hover:shadow-md transition-all">
                            <div className="relative aspect-video w-full overflow-hidden rounded-t-xl bg-muted">
                                <Image
                                    src={cert.img}
                                    alt={cert.description}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <CardContent className="p-4 flex-1">
                                <p className="text-sm font-medium text-center">
                                    {cert.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    )
}
