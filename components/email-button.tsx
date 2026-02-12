"use client"

import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react"

/**
 * EmailButton — Anti-scraping contact button.
 * Constructs the mailto: link at runtime from split parts,
 * defeating simple email-harvesting bots that scan static HTML/JS.
 */
export function EmailButton() {
    return (
        <Button
            type="button"
            className="w-full h-12 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30"
            onClick={() => {
                const user = "azhagu.swe"
                const domain = "gmail.com"
                const nameEl = document.getElementById("name") as HTMLInputElement
                const msgEl = document.getElementById("message") as HTMLTextAreaElement
                const subject = encodeURIComponent(
                    `Portfolio Inquiry from ${nameEl?.value || "Visitor"}`
                )
                const body = encodeURIComponent(msgEl?.value || "")
                window.location.href = `mailto:${user}@${domain}?subject=${subject}&body=${body}`
            }}
        >
            <Icon icon="lucide:send" className="w-4 h-4 mr-2" />
            Let&apos;s Build Together
        </Button>
    )
}
