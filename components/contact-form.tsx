"use client"

import { useState, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icon } from "@iconify/react"
import { CONTACT_DATA } from "@/lib/data"

export function ContactForm() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget
        const formData = new FormData(form)

        const user = "azhagu.swe"
        const domain = "gmail.com"
        const name = formData.get("name") as string
        const message = formData.get("message") as string
        const subject = encodeURIComponent(`Portfolio Inquiry from ${name || "Visitor"}`)
        const body = encodeURIComponent(message || "")

        // Open default email client
        window.location.href = `mailto:${user}@${domain}?subject=${subject}&body=${body}`
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
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
                <Input id="email" type="email" placeholder="john@example.com" required name="email" suppressHydrationWarning />
            </div>
            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Tell me about your project
                </label>
                <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="I'm building a high-traffic API and need help with..."
                    required
                    name="message"
                    suppressHydrationWarning
                />
            </div>

            <Button
                type="submit"
                className="w-full h-12 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30"
            >
                <Icon icon="lucide:mail" className="w-4 h-4 mr-2" />
                Compose Email
            </Button>
        </form>
    )
}
