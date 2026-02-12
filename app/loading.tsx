import { MatrixWrapper } from "@/components/ui/matrix-wrapper"
import { Icon } from "@iconify/react"

export default function Loading() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-background">
            <MatrixWrapper className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-primary/20 bg-card/30 backdrop-blur-md">
                <div className="relative h-12 w-12">
                    <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
                    <div className="absolute inset-0 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                    <div className="absolute inset-2 animate-pulse rounded-full bg-primary/40" />
                </div>
                <div className="text-center">
                    <p className="text-sm font-medium text-primary animate-pulse">Initializing System...</p>
                    <p className="text-xs text-muted-foreground mt-1">Please wait</p>
                </div>
            </MatrixWrapper>
        </div>
    )
}
