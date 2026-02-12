
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CRTFlicker } from "@/components/ui/crt-flicker";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MainLayout } from "@/components/layout/main-layout";
import { FaviconManager } from "@/components/favicon-manager";
import { Footer } from "@/components/layout/footer";
import { PwaRegister } from "@/components/pwa-register";

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
  description: "Full-Stack Java Developer specializing in high-performance microservices. Reduced API latency by 40% • Built systems serving 1M+ devices.",
  icons: {
    icon: [
      { media: '(prefers-color-scheme: light)', url: '/favicon/light/favicon.ico', href: '/favicon/light/favicon.ico' },
      { media: '(prefers-color-scheme: dark)', url: '/favicon/dark/favicon.ico', href: '/favicon/dark/favicon.ico' },
    ],
  },
  openGraph: {
    title: "Alagappan P | Full-Stack Developer",
    description: "Full-Stack Java Developer — 40% API Latency Reduction • 1M+ Devices Powered • 3+ Years Experience",
    url: "https://azhagu-swe.github.io",
    siteName: "Alagappan P Portfolio",
    images: [
      {
        url: "/image/portfolio.webp",
        width: 1200,
        height: 630,
        alt: "Alagappan P — Full-Stack Java Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alagappan P | Full-Stack Developer",
    description: "Full-Stack Java Developer — 40% API Latency Reduction • 1M+ Devices Powered",
    images: ["/image/portfolio.webp"],
    creator: "@azhagu_swe",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.github.com https://api.iconify.design; frame-ancestors 'none';"
        />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
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
          themes={["light", "dark"]}
        >
          <FaviconManager />
          <MainLayout footer={<Footer />}>{children}</MainLayout>
          <PwaRegister />
        </ThemeProvider>
      </body>
    </html>
  );
}
