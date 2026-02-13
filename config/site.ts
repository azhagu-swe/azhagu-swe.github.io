
export const siteConfig = {
    name: "Azhagu.swe",
    description: "A high-performance, Gen-Z styled Portfolio PWA.",
    mainNav: [
        {
            title: "Home",
            href: "/",
            icon: "lucide:home",
        },
        {
            title: "About",
            href: "/about",
            icon: "lucide:user",
        },
        {
            title: "Projects",
            href: "/projects",
            icon: "lucide:folder-code",
        },
        {
            title: "Contact",
            href: "/contact",
            icon: "lucide:mail",
        },
        {
            title: "Blog",
            href: "/blog",
            icon: "lucide:book-open",
        },
        {
            title: "Tutorials",
            href: "/tutorials",
            icon: "lucide:graduation-cap",
        },
    ],
    sidebarNav: {
        portfolio: [
            {
                title: "Home",
                href: "/",
                icon: "lucide:home",
            },
            {
                title: "About",
                href: "/about",
                icon: "lucide:user",
            },
            {
                title: "Projects",
                href: "/projects",
                icon: "lucide:folder-code",
            },
            {
                title: "Resume",
                href: "/resume",
                icon: "lucide:file-text",
                // badge: "New", // Adding badge here directly as it's just a JS object for now
            },
            {
                title: "Contact",
                href: "/contact",
                icon: "lucide:mail",
            },
        ],
        content: [
            {
                title: "Blog",
                href: "/blog",
                icon: "lucide:book-open",
            },
            {
                title: "Tutorials",
                href: "/tutorials",
                icon: "lucide:graduation-cap",
            },
        ],
    },
    links: {
        twitter: "https://twitter.com/azhagu_swe",
        github: "https://github.com/azhagu-swe",
    },
}
