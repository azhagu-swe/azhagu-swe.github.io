"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

export function MDXImage({
    src,
    alt,
    className,
    width,
    height,
    ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <div className="relative my-8 rounded-lg overflow-hidden border border-border shadow-lg bg-muted/20">
            <Image
                src={(src as string) || ""}
                alt={alt || "Blog Image"}
                width={0}
                height={0}
                sizes="100vw"
                className={cn("w-full h-auto object-cover", className)}
                unoptimized // Since you're using 'export', this should likely be true or handled by next.config
                quality={90}
                {...props}
            />
            {alt && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-2 opacity-0 hover:opacity-100 transition-opacity">
                    <p className="text-xs text-center text-white/90 font-medium">{alt}</p>
                </div>
            )}
        </div>
    )
}
