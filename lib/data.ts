import { SocialLink, ExperienceRole, SkillCategory, Certification, Achievement, ProjectData } from "./types";

export const BASE_URLS = {
    PORTFOLIO: "https://azhagu-swe.github.io",
    PROFILE_IMAGE: "/image/profile.webp",
    RESUME: "/pdf/azhagu-resume.pdf",
};

// Shared constants to avoid duplication
const SHARED_TEXT = {
    NAME: "Alagappan P",
    ROLE: "Full-Stack Java Developer @ Infosys",
    TAGLINE: "I Ship 40% Faster APIs",
    BIO: "I architect backend systems that companies rely on to move faster. From reducing API latency by 40% with Redis optimization to building geohash engines powering 1M+ devices—I don't just write code, I eliminate bottlenecks.",
    SHORT_BIO: "Full-Stack Java Developer specializing in high-performance microservices. Reduced API latency by 40% • Built systems serving 1M+ devices ",
    ORIGIN_STORY: "I became a developer because I couldn't stand inefficiency. That drive led me to win 2nd place in a national debugging competition and build systems that handle millions of requests.",
};

export const SOCIAL_LINKS: SocialLink[] = [
    {
        platform: "Email",
        icon: "mdi:email-outline",
        link: "mailto:azhagu.swe@gmail.com",
        username: "azhagu.swe@gmail.com",
        color: "#D44638",
    },
    {
        platform: "LinkedIn",
        icon: "mdi:linkedin",
        link: "https://www.linkedin.com/in/azhagu-swe/",
        username: "@azhagu-swe",
        color: "#0077B5",
    },
    {
        platform: "GitHub",
        icon: "mdi:github",
        link: "https://github.com/azhagu-swe",
        username: "@azhagu-swe",
        color: "#000000",
    },
    {
        platform: "X (Twitter)",
        icon: "pajamas:twitter",
        link: "https://twitter.com/azhagu_swe",
        username: "@azhagu_swe",
        color: "black",
    },
    {
        platform: "Instagram",
        icon: "mdi:instagram",
        link: "https://instagram.com/azhagu.swe",
        username: "@azhagu.swe",
        color: "#E4405F",
    },
    {
        platform: "YouTube",
        icon: "mdi:youtube",
        link: "https://www.youtube.com/channel/UCuA9qjEfLAk6hmiNPYvZEvQ",
        username: "@azhagu-dev",
        color: "#FF0000",
    },
];

// Helper to get simple URL map if needed
export const SOCIAL_URLS = SOCIAL_LINKS.reduce((acc, item) => {
    const key = item.platform.toUpperCase().replace(/\s|\(.*\)/g, ""); // EMAIL, LINKEDIN, etc.
    acc[key] = item.link;
    return acc;
}, {} as Record<string, string>);

export const PROFILE = (basePath: string = "") => ({
    name: SHARED_TEXT.NAME,
    role: SHARED_TEXT.ROLE,
    intro: SHARED_TEXT.BIO,
    avatar: `${basePath}${BASE_URLS.PROFILE_IMAGE}`,
});

export const HERO_DATA = {
    name: SHARED_TEXT.NAME,
    title: SHARED_TEXT.ROLE,
    tagline: SHARED_TEXT.TAGLINE,
    roles: [
        "40% Faster APIs 🚀",
        "1M+ Devices Powered 📍",
        "Full-Stack Expert ☕",
    ],
    description: SHARED_TEXT.BIO,
    buttons: {
        primary: "Hire Me for Your Next Project",
        secondary: "View My Work",
        resume: "Download Resume",
    },
    images: {
        profile: BASE_URLS.PROFILE_IMAGE,
        resume: BASE_URLS.RESUME,
    },
    availability: {
        status: "Available",
        period: "Weekdays 6-9 AM & 6-9 PM • Weekends 9 AM-9 PM",
        message: "Open for freelance projects",
    },
};

// Social Proof Data - Psychology: Testimonials and validation build immediate trust
export const SOCIAL_PROOF_DATA = {
    proofBanner: [
        { icon: "lucide:trophy", text: "2nd Place, National Debugging Competition", highlight: true },
        { icon: "lucide:cpu", text: "1M+ Devices Running My Algorithm", highlight: true },
        { icon: "lucide:zap", text: "40% API Latency Reduction", highlight: true },
    ],
    testimonials: [
        {
            quote: "Alagappan's proximity hash algorithm improved our targeting accuracy by 15%. His attention to performance is exceptional.",
            author: "Tech Lead",
            company: "Memob Plus",
            avatar: "/image/avatar-placeholder.png",
        },
        {
            quote: "He reduced our API response time from 200ms to 60ms. The Redis caching strategy he implemented was game-changing.",
            author: "Senior Software Engineer",
            company: "Memob Plus",
            avatar: "/image/avatar-placeholder.png",
        },
    ],
};

// Trusted By Companies - Psychology: Logo bar creates instant authority (Halo Effect)
export const TRUSTED_BY_DATA = [
    { name: "Infosys", logo: "/image/logos/infosys.svg" },
    { name: "Memob Plus", logo: "/image/logos/memob.svg" },
    { name: "Anna University", logo: "/image/logos/anna-university.svg" },
];

export const CONTACT_DATA = {
    title: "Get In Touch",
    subtitle: "Let's Connect",
    description:
        "I'm currently available for freelance opportunities, consulting projects, or full-time roles. Whether you have a question, want to work together, or just want to say hi, feel free to reach out!",
    form: {
        nameLabel: "Your Name",
        emailLabel: "Your Email",
        messageLabel: "Your Message",
        methodLabel: "Contact Method",
        methods: [
            { value: "Email", label: "Email" },
        ],
        submitText: "Send Message",
    },
    socialLinks: SOCIAL_LINKS,
};

export const SKILLS_DATA: SkillCategory[] = [
    {
        title: "Languages",
        skills: "Java (Core 8+), SQL, JavaScript, HTML, CSS, TypeScript",
    },
    {
        title: "Frameworks & Technologies",
        skills: "Spring Boot, Spring MVC, Spring Data JPA, Hibernate, RESTful APIs, Microservices, RabbitMQ, Redis, React.js, Next.js",
    },
    {
        title: "Databases",
        skills: "PostgreSQL, MySQL",
    },
    {
        title: "Tools & Platforms",
        skills: "Git, IntelliJ IDEA, VS Code, Maven, Docker (Basic), Windows, Ubuntu, Qwen CLI, Google Gemini CLI",
    },
    {
        title: "AI & Development Tools",
        skills: "Qwen CLI for code generation and optimization, Google Gemini CLI for AI-assisted development, Prompt Engineering",
    },
];

export const CERTIFICATIONS_DATA = (basePath: string = ""): Certification[] => [
    {
        description: "Full Stack Java Development - Simplilearn, 2022",
        img: `${basePath}/image/Java-Full-Stack-skillup.webp`,
    },
    {
        description: "Java Certification Course - Simplilearn, 2022",
        img: `${basePath}/image/java-certificate.webp`,
    },
    {
        description: "ChatGPT Advanced Course - Simplilearn, 2025",
        img: `${basePath}/image/chat_gpt_advanced_cert.webp`,
    },
    {
        description: "Introduction to Prompt Engineering - Simplilearn, 2025",
        img: `${basePath}/image/prompt_engineer_cert.webp`,
    },
];

export const ACHIEVEMENTS_DATA = (basePath: string = ""): Achievement[] => [
    {
        description:
            "🏆 Secured Second Prize in a Debugging Competition at National College, Trichy.",
        img: `${basePath}/image/Debuggin-2nd-Prize.webp`,
    },
];

export const PARTICIPATIONS_DATA = (basePath: string = ""): Achievement[] => [
    {
        description:
            "🏅 National Level Workshop: Web Application Frameworks (Struts, Spring, Hibernate) - Anna University, Trichy.",
        img: `${basePath}/image/AnnaUniversity-2.webp`,
    },
    {
        description:
            "🏅 National Level Seminar: Skill-Based Jobs & Employment Opportunities - Anna University, Trichy.",
        img: `${basePath}/image/AnnaUniversity-1.webp`,
    },
    {
        description:
            "🏅 State Level Workshop: Recent Trends in ICT - H.H. The Rajah's College, Pudukkottai.",
        img: `${basePath}/image/HHRC.webp`,
    },
];

export const EXPERIENCE_DATA = {
    header: {
        title: "Professional Experience",
        subtitle:
            "3+ years architecting high-performance Java systems that handle millions of requests.",
    },
    roles: [
        {
            title: "Full Stack Java Developer",
            company: "Infosys",
            duration: "Nov 2025 – Present",
            location: "India",
            responsibilities: [
                "Architecting microservices handling <strong>50K+ requests/minute</strong> with 99.9% uptime guarantee.",
                "Reduced deployment pipeline from <strong>4 hours to 15 minutes</strong> through CI/CD optimization.",
                "Leading migration from monolithic architecture to event-driven microservices.",
                "Mentoring junior developers on Spring Boot best practices and code review standards.",
                "Implementing OAuth 2.0 security layer for enterprise-grade APIs.",
            ],
            techStack: [
                "Java 17",
                "Spring Boot 3",
                "Microservices",
                "Kubernetes",
                "React",
            ],
        },
        {
            title: "Software Developer",
            company: "Memob Plus Pvt Ltd",
            duration: "Aug 2022 – Oct 2025",
            location: "Chennai, Tamil Nadu",
            responsibilities: [
                "Built <strong>Geohash Proximity Engine</strong> powering <strong>1M+ device</strong> location targeting with 20% faster performance than Python predecessor.",
                "Cut API latency by <strong>40%</strong> (200ms → 60ms) via strategic Redis caching architecture.",
                "Improved PostgreSQL query performance by <strong>35%</strong> through indexing and query optimization.",
                "Architected unified audience management service integrating <strong>Meta, Snapchat, and TikTok</strong> APIs.",
                "Modernized legacy UI to Next.js, reducing page load time by <strong>60%</strong>.",
                "Designed RESTful APIs serving <strong>10K+ requests/second</strong> with sub-100ms response times.",
            ],
            techStack: [
                "Java",
                "Spring Boot",
                "Redis",
                "RabbitMQ",
                "PostgreSQL",
                "Next.js",
                "OAuth 2.0",
                "Mapbox",
            ],
        },
    ],
    achievements: [
        "🏆 Secured Second Prize in a national-level Debugging Competition, demonstrating exceptional problem-solving and code analysis skills.",
        "🚀 Architected and implemented a unified audience management service to seamlessly integrate with multiple marketing platforms, including Meta, Snapchat, and Tik Tok.",
        "⚡ Significantly reduced API latency by implementing a targeted Redis caching strategy for high-throughput microservices.",
        "⚙️ Enhanced database performance through strategic PostgreSQL indexing and advanced query optimization.",
        "🎯 Developed a custom Java proximity hash algorithm, leading to more accurate and efficient location-based targeting.",
        "🔄 Contributed to the modernization of a legacy system by re-architecting critical APIs and enhancing the UI with Next.js, improving overall system speed.",
    ],
    skills: [
        "Java",
        "Spring Boot",
        "Microservices",
        "RESTful APIs",
        "Hibernate",
        "Redis",
        "RabbitMQ",
        "PostgreSQL",
        "JavaScript",
        "Next.js",
    ],
};

export const TECH_ICONS = {
    NextJS: "logos:nextjs-icon",
    React: "logos:react",
    Tailwind: "logos:tailwindcss-icon",
    TypeScript: "logos:typescript-icon",
    ShadcnUI: "simple-icons:shadcnui",
    FramerMotion: "logos:framer",
};

export const HOME_DATA = {
    hero: {
        description: "I architect pixel-perfect, accessible web applications that drive user engagement. Leveraging Next.js and modern UI libraries, I deliver robust full-stack solutions.",
    },
    theme: {
        title: "Theme System",
        description: "Try the Emerald, Abyss, or Paper modes.",
    },
    connect: {
        title: "Connect",
        description: "Find me on the internet.",
    },
    projects: {
        title: "Projects",
        description: "Check out my latest work and experiments.",
    },
    blog: {
        title: "Blog",
        description: "Read my thoughts on tech.",
    },
    techStack: {
        title: "Tech Stack",
        description: "The tools I use to build.",
    },
};

export const PAGES_DATA = {
    projects: {
        title: "Projects",
        metadata: {
            title: "Projects",
            description: "Showcase of my work.",
        },
        description: "A gallery of my experiments, tools, and apps.",
    },
    blog: {
        title: "Blog",
        metadata: {
            title: "Blog",
            description: "Read my thoughts on software development.",
        },
        description: "Thoughts, stories, and ideas.",
    }
};

export const STATS_DATA = {
    yearsExp: 3,
    projectsCount: 5,
    skillsCount: SKILLS_DATA.reduce((acc, cat) => acc + cat.skills.split(',').length, 0),
    certsCount: CERTIFICATIONS_DATA().length,
};
