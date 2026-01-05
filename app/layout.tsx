
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CRTFlicker } from "@/components/ui/crt-flicker";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MainLayout } from "@/components/layout/main-layout";
import { FaviconManager } from "@/components/favicon-manager";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"], display: 'swap' });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alagappan P",
  url: "https://azhagu-swe.github.io",
  jobTitle: "Full Stack Developer",
  sameAs: [
    "https://github.com/azhagu-swe",
    "https://www.linkedin.com/in/azhagu-swe/",
    "https://twitter.com/azhagu_swe"
  ],
  description: "A high-performance, Gen-Z styled Portfolio PWA."
};

export const metadata: Metadata = {
  metadataBase: new URL("https://azhagu-swe.github.io"),
  title: "Alagappan P | Full-Stack Developer",
  description: "A high-performance, Gen-Z styled Portfolio PWA.",
  icons: {
    icon: [
      { media: '(prefers-color-scheme: light)', url: '/favicon/light/favicon.ico', href: '/favicon/light/favicon.ico' },
      { media: '(prefers-color-scheme: dark)', url: '/favicon/dark/favicon.ico', href: '/favicon/dark/favicon.ico' },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <CRTFlicker />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={["light", "dark", "matrix"]}
        >
          <FaviconManager />
          <MainLayout footer={<Footer />}>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
