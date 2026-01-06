
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

function CustomLink(props: any) {
    const href = props.href

    if (href.startsWith("/")) {
        return (
            <Link href={href} {...props} className={cn("text-primary underline underline-offset-4", props.className)}>
                {props.children}
            </Link>
        )
    }

    if (href.startsWith("#")) {
        return <a {...props} />
    }

    return <a target="_blank" rel="noopener noreferrer" {...props} className={cn("text-primary underline underline-offset-4", props.className)} />
}

import { TLDR, Note } from "@/components/mdx/callouts"
import { BentoHeader } from "@/components/mdx/bento-header"

import { Pre } from "@/components/mdx/pre"
import { MDXImage } from "@/components/mdx/mdx-image"

export const components = {
    h1: ({ className, ...props }: any) => (
        <h1
            className={cn(
                "mt-8 mb-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70",
                className
            )}
            {...props}
        />
    ),
    h2: ({ className, ...props }: any) => (
        <h2
            className={cn(
                "mt-12 mb-4 scroll-m-20 pb-2 text-3xl font-bold tracking-tight first:mt-0 text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/80",
                className
            )}
            {...props}
        />
    ),
    h3: ({ className, ...props }: any) => (
        <h3
            className={cn(
                "mt-8 mb-4 scroll-m-20 text-2xl font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    p: ({ className, ...props }: any) => (
        <p
            className={cn("leading-loose [&:not(:first-child)]:mt-6 text-lg text-muted-foreground/90", className)}
            {...props}
        />
    ),
    ul: ({ className, ...props }: any) => (
        <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2 text-muted-foreground", className)} {...props} />
    ),
    ol: ({ className, ...props }: any) => (
        <ol className={cn("my-6 ml-6 list-decimal [&>li]:mt-2 text-muted-foreground", className)} {...props} />
    ),
    li: ({ className, ...props }: any) => (
        <li className={cn("mt-2", className)} {...props} />
    ),
    blockquote: ({ className, ...props }: any) => (
        <blockquote
            className={cn(
                "mt-6 border-l-4 border-primary pl-6 italic text-muted-foreground",
                className
            )}
            {...props}
        />
    ),
    img: MDXImage,
    pre: Pre,
    hr: ({ ...props }) => <hr className="my-8 md:my-12 border-border" {...props} />,
    a: CustomLink,
    TLDR,
    Note,
    BentoHeader,
}
