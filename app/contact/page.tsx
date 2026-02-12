import { CONTACT_DATA, SOCIAL_LINKS, HERO_DATA } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Icon } from "@iconify/react"
import { Metadata } from "next"
import Link from "next/link"
import { DecipherText } from "@/components/ui/decipher-text"
import { MatrixWrapper } from "@/components/ui/matrix-wrapper"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
    title: "Contact | Alagappan P",
    description: "Get in touch for opportunities or collaborations.",
}

export default function ContactPage() {
    const availability = HERO_DATA.availability

    return (
        <div className="container py-10 max-w-4xl mx-auto min-h-[80vh] flex flex-col justify-center">

            {/* Scarcity Banner - Psychology: Limited availability signals high demand */}
            <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 flex items-center justify-center gap-3">
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-sm font-medium">
                    🚀 <span className="text-primary font-semibold">{availability?.message}</span> {availability?.period} projects • I'm selective to ensure every client gets my full attention
                </span>
            </div>

            <div className="grid gap-10 lg:grid-cols-2">
                {/* Contact Info & Socials */}
                <div className="space-y-8">
                    <div>
                        <DecipherText
                            text="Let's Build Something Incredible Together"
                            className="font-heading text-3xl font-bold tracking-tight lg:text-4xl mb-4 block"
                            revealOn="load"
                            animate={true}
                        />
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            I'm currently available for freelance consulting, high-impact projects, or full-time roles at companies that value performance engineering.
                        </p>

                        {/* Response Time Badge - Psychology: Reduces anxiety, builds trust */}
                        <div className="flex items-center gap-3 mt-4">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                                    ⚡ Usually responds within 24 hours
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* How We'll Work Together - Psychology: Consultant framing */}
                    <div className="p-5 rounded-xl bg-card/50 border border-border/50 space-y-4">
                        <h3 className="font-semibold flex items-center gap-2">
                            <Icon icon="lucide:handshake" className="w-5 h-5 text-primary" />
                            How We'll Work Together
                        </h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-3">
                                <span className="p-1 rounded bg-primary/10 text-primary shrink-0">✅</span>
                                <div>
                                    <span className="font-medium">Discovery Call</span>
                                    <span className="text-muted-foreground"> (30 min): Understand your system's bottlenecks</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="p-1 rounded bg-primary/10 text-primary shrink-0">✅</span>
                                <div>
                                    <span className="font-medium">Proposal</span>
                                    <span className="text-muted-foreground"> (48 hrs): Custom architecture plan with performance projections</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="p-1 rounded bg-primary/10 text-primary shrink-0">✅</span>
                                <div>
                                    <span className="font-medium">Delivery</span>
                                    <span className="text-muted-foreground"> (Agile sprints): Bi-weekly demos, always shippable</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {CONTACT_DATA.socialLinks.slice(0, 4).map((link) => (
                            <Link key={link.platform} href={link.link} target="_blank" className="group">
                                <MatrixWrapper className="h-full rounded-xl">
                                    <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors h-full">
                                        <CardContent className="p-4 flex items-center gap-4">
                                            <div className="p-2 rounded-md bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                                <Icon icon={link.icon} className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-sm">{link.platform}</p>
                                                <p className="text-xs text-muted-foreground truncate max-w-[140px]">{link.username}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </MatrixWrapper>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Contact Form with Enhanced CTA */}
                <MatrixWrapper className="rounded-xl h-fit">
                    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Icon icon="lucide:mail" className="w-5 h-5 text-primary" />
                                Start a Conversation
                            </CardTitle>
                            <CardDescription>
                                Tell me about your project and let's explore how I can help you achieve 40%+ performance gains.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ContactForm />
                        </CardContent>
                    </Card>
                </MatrixWrapper>
            </div>
        </div>
    )
}
