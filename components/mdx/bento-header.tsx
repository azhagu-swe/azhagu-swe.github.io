import { Badge } from "@/components/ui/badge"
import { Icon } from "@iconify/react"
import { cn } from "@/lib/utils"

interface BentoHeaderProps {
    title: string
    date?: string
    readingTime?: string
    tags?: string[]
    description?: string
    icon?: string
    gradient?: string
}

export function BentoHeader({ title, date, readingTime, tags, description, icon, gradient }: BentoHeaderProps) {
    return (
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/50 backdrop-blur-xl shadow-2xl p-8 mb-10 group">
            {/* Dynamic Background Gradient */}
            <div className={cn("absolute inset-0 opacity-10 blur-3xl", gradient || "bg-primary")} />

            <div className="relative z-10 flex flex-col gap-6">
                {tags && (
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-secondary/50 hover:bg-secondary border-border/50 text-secondary-foreground backdrop-blur-md transition-colors">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                )}

                <div className="flex items-start gap-4">
                    {icon && (
                        <div className="hidden md:flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/20 border border-border shadow-inner">
                            <Icon icon={icon} className="h-8 w-8 text-foreground/80 my-auto" />
                        </div>
                    )}
                    <div className="flex-1 space-y-2">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
                            {title}
                        </h1>
                        {description && <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{description}</p>}
                    </div>
                </div>

                {(date || readingTime) && (
                    <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground border-t border-border pt-6 mt-2">
                        {date && <span>{date}</span>}
                        {date && readingTime && <span>•</span>}
                        {readingTime && (
                            <span className="flex items-center gap-1.5">
                                <Icon icon="lucide:clock" className="w-3.5 h-3.5" />
                                {readingTime}
                            </span>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
