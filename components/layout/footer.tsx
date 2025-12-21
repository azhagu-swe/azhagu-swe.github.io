import Link from "next/link"
import { Icon } from "@iconify/react"
import { siteConfig } from "@/config/site"
import { SOCIAL_LINKS } from "@/lib/data"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full border-t border-border/50 bg-card/30 backdrop-blur-sm mt-auto">
            <div className="container py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                            <span className="text-primary">Portfolio</span>
                        </Link>
                        <p className="text-muted-foreground text-sm max-w-xs">
                            Building the future of web with modern aesthetics and robust engineering.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-sm tracking-widest uppercase text-muted-foreground">Navigate</h4>
                        <nav className="flex flex-col gap-2">
                            {siteConfig.mainNav.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm font-medium hover:text-primary transition-colors w-fit"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Socials */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-sm tracking-widest uppercase text-muted-foreground">Connect</h4>
                        <div className="flex flex-wrap gap-4">
                            {SOCIAL_LINKS.map((link) => (
                                <Link
                                    key={link.platform}
                                    href={link.link}
                                    target="_blank"
                                    className="p-2 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                                    aria-label={link.platform}
                                >
                                    <Icon icon={link.icon} className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-mono">
                    <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
                    <div className="flex items-center gap-2">
                        <span>Designed & Built with ❤️</span>
                        <span className="hidden md:inline text-border">|</span>
                        <span className="font-semibold text-primary/80 hover:text-primary transition-colors">
                            Owned by azhagu-swe
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
