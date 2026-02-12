import React from "react"

/**
 * SafeHighlight — XSS-safe text renderer.
 * Parses only <strong>...</strong> tags from a string and renders them
 * as React <strong> elements. All other content is rendered as plain text.
 * No raw HTML injection is possible.
 */
export function SafeHighlight({ text }: { text: string }) {
    // Split on <strong>...</strong> pattern, capturing the inner content
    const parts = text.split(/(<strong>.*?<\/strong>)/g)

    return (
        <>
            {parts.map((part, i) => {
                const match = part.match(/^<strong>(.*?)<\/strong>$/)
                if (match) {
                    return <strong key={i}>{match[1]}</strong>
                }
                return <React.Fragment key={i}>{part}</React.Fragment>
            })}
        </>
    )
}
