"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Icon } from "@iconify/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterForm() {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setStatus("loading")

        // Mock API call
        setTimeout(() => {
            setStatus("success")
            setEmail("")
        }, 1500)
    }

    return (
        <div className="w-full max-w-sm">
            <AnimatePresence mode="wait">
                {status === "success" ? (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2 text-emerald-500 bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20"
                    >
                        <Icon icon="lucide:check-circle-2" className="w-5 h-5 shrink-0" />
                        <div>
                            <p className="font-semibold text-sm">Welcome aboard! 🚀</p>
                            <p className="text-xs opacity-90">You've successfully joined the network.</p>
                        </div>
                    </motion.div>
                ) : (
                    <motion.form
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-3"
                    >
                        <div className="space-y-1">
                            <h4 className="font-semibold text-sm">Join the Newsletter</h4>
                            <p className="text-xs text-muted-foreground">
                                Get insights on Engineering, AI, and High-Performance Web.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <Icon
                                    icon="lucide:mail"
                                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                />
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="pl-9 bg-background/50 border-white/10 focus:border-primary/50 transition-colors"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={status === "loading"}
                                    required
                                />
                            </div>
                            <Button
                                type="submit"
                                disabled={status === "loading"}
                                className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0"
                            >
                                {status === "loading" ? (
                                    <Icon icon="lucide:loader-2" className="w-4 h-4 animate-spin" />
                                ) : (
                                    <Icon icon="lucide:send" className="w-4 h-4" />
                                )}
                            </Button>
                        </div>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    )
}
