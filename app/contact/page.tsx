import { CONTACT_DATA, SOCIAL_LINKS } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Icon } from "@iconify/react"
import { Metadata } from "next"
import Link from "next/link"
import { DecipherText } from "@/components/ui/decipher-text"
import { MatrixWrapper } from "@/components/ui/matrix-wrapper"

export const metadata: Metadata = {
    title: "Contact | Alagappan P",
    description: "Get in touch for opportunities or collaborations.",
}

export default function ContactPage() {
    return (
        <div className="container py-10 max-w-4xl mx-auto min-h-[80vh] flex flex-col justify-center">

            <div className="grid gap-10 lg:grid-cols-2">
                {/* Contact Info & Socials */}
                <div className="space-y-8">
                    <div>
                        <DecipherText
                            text={CONTACT_DATA.title}
                            className="font-heading text-4xl font-bold tracking-tight lg:text-5xl mb-4 block"
                            revealOn="load"
                            animate={true}
                        />
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {CONTACT_DATA.description}
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {CONTACT_DATA.socialLinks.map((link) => (
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

                {/* Contact Form (Visual Only as per requirements implies static site mostly, but structure is here) */}
                <MatrixWrapper className="rounded-xl h-fit">
                    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                        <CardHeader>
                            <CardTitle>{CONTACT_DATA.subtitle}</CardTitle>
                            <CardDescription>
                                Send me a direct message and I'll get back to you as soon as possible.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4" action={"mailto:azhagu.swe@gmail.com"} method="post" encType="text/plain">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        {CONTACT_DATA.form.nameLabel}
                                    </label>
                                    <Input id="name" placeholder="John Doe" required name="name" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        {CONTACT_DATA.form.emailLabel}
                                    </label>
                                    <Input id="email" type="email" placeholder="john@example.com" required name="email" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        {CONTACT_DATA.form.messageLabel}
                                    </label>
                                    <textarea
                                        id="message"
                                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Hello! I'd like to discuss..."
                                        required
                                        name="message"
                                    />
                                </div>
                                <Button type="submit" className="w-full">
                                    {CONTACT_DATA.form.submitText}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </MatrixWrapper>
            </div>
        </div>
    )
}
