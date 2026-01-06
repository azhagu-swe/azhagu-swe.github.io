import { MatrixWrapper } from "@/components/ui/matrix-wrapper";

export const metadata = {
    title: "Privacy Policy",
};

export default function PrivacyPage() {
    return (
        <div className="container max-w-3xl mx-auto py-12 px-4">
            <MatrixWrapper className="p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-md">
                <h1 className="text-3xl font-bold mb-6 text-primary">Privacy Policy</h1>
                <div className="prose dark:prose-invert max-w-none text-muted-foreground">
                    <p>Last Updated: {new Date().toLocaleDateString()}</p>
                    <p>
                        This portfolio is a static site hosted on GitHub Pages. It does not collect personal data via cookies
                        or tracking pixels. Any information submitted via the contact method (email) is used solely for
                        communication purposes.
                    </p>
                    <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground">Analytics</h3>
                    <p>
                        We may use anonymous GitHub traffic insights to understand project popularity. No personally identifiable
                        information (PII) is stored.
                    </p>
                    <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground">Contact</h3>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at azhagu.swe@gmail.com.
                    </p>
                </div>
            </MatrixWrapper>
        </div>
    );
}
