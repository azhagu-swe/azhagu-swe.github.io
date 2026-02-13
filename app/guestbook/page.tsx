import { Metadata } from "next"
import { Guestbook } from "@/components/guestbook"

export const metadata: Metadata = {
    title: "Guestbook | Azhagu.swe",
    description: "Leave a message, ask a question, or just say hi!",
}

export default function GuestbookPage() {
    return (
        <div className="container py-24 min-h-[80vh] flex items-center justify-center">
            <Guestbook />
        </div>
    )
}
