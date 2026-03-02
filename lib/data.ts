import { SocialLink, ExperienceRole, SkillCategory, Certification, Achievement, ProjectData } from "./types";

export const BASE_URLS = {
    PORTFOLIO: "https://azhagu-swe.github.io",
    PROFILE_IMAGE: "/image/profile.webp",
    RESUME: "/resume",
};

// Shared constants to avoid duplication
const SHARED_TEXT = {
    NAME: "Alagappan P",
    ROLE: "High-Performance System Architect @ Infosys",
    TAGLINE: "I Architect Systems That Scale & Ship 40% Faster",
    BIO: "I architect high-throughput backend ecosystems that companies rely on to scale without friction. From slashing API latency by 40% via strategic caching to engineering geohash engines powering 1M+ active devices—I don't just write code, I eliminate systemic bottlenecks.",
    SHORT_BIO: "High-Performance System Architect specializing in scalable microservices. Reduced API latency by 40% • Engineered systems serving 1M+ devices.",
    ORIGIN_STORY: "I became a developer because I couldn't stand inefficiency. That drive led me to win 2nd place in a national debugging competition and now I architect systems that handle millions of requests with sub-second precision.",
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
        username: "@azhagu-swe",
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
        primary: "Request a System Audit",
        secondary: "Explore Case Studies",
        resume: "View Technical Blueprint (Resume)",
    },
    images: {
        profile: BASE_URLS.PROFILE_IMAGE,
        resume: BASE_URLS.RESUME,
    },
    availability: {
        status: "Available",
        period: "Exclusive slots for Q2 2026",
        message: "Consulting for high-impact projects",
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
            avatar: "/image/logos/memob.svg",
        },
        {
            quote: "He reduced our API response time from 200ms to 60ms. The Redis caching strategy he implemented was game-changing.",
            author: "Senior Software Engineer",
            company: "Memob Plus",
            avatar: "/image/logos/memob.svg",
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
        title: "Frameworks & Backend",
        skills: "Spring Boot, Spring MVC, Spring Data JPA, Hibernate, RESTful APIs, Microservices, RabbitMQ, Redis, Next.js",
    },
    {
        title: "Databases",
        skills: "PostgreSQL, MySQL",
    },
    {
        title: "Tools & DevOps",
        skills: "Git, IntelliJ IDEA, Maven, Docker, JFrog Artifactory, Splunk, SonarQube, Windows, Ubuntu",
    },
    {
        title: "AI & Development",
        skills: "GitHub Copilot, Qwen CLI, Google Gemini CLI, Prompt Engineering",
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
            title: "High-Performance System Architect",
            company: "Infosys",
            duration: "Nov 2025 – Present",
            location: "Chennai, Tamil Nadu, India",
            responsibilities: [
                "Spearheading core <strong>Banking microservices</strong> development using Java 17 and Spring Boot, focusing on transaction atomicity, multi-threading, and secure financial processing.",
                "Architecting high-throughput <strong>RESTful APIs</strong> designed for financial data integrity and sub-second response times (99.9% uptime).",
                "Collaborating in an Agile squad to modernize legacy payment systems, utilizing <strong>JFrog Artifactory</strong> and <strong>Splunk</strong> for real-time monitoring.",
                "Utilizing AI-augmented coding tools (GitHub Copilot) to streamline unit testing and achieve <strong>80%+ code coverage</strong>.",
            ],
            techStack: [
                "Java 17",
                "Spring Boot 3",
                "Microservices",
                "Kubernetes",
                "React",
                "JFrog",
                "Splunk"
            ],
        },
        {
            title: "Software Developer",
            company: "MEmob Plus Pvt Ltd",
            duration: "Aug 2022 – Oct 2025",
            location: "Chennai, Tamil Nadu",
            responsibilities: [
                "Optimized distributed microservices, achieving a <strong>40% reduction in API latency</strong> (200ms → 60ms) via strategic Redis caching architecture.",
                "Architected a <strong>unified audience management service</strong> integrating Meta, Snapchat, and TikTok APIs, processing millions of daily data points.",
                "Improved PostgreSQL query performance by <strong>35%</strong> through indexing and query optimization.",
                "Developed a specialized <strong>proximity hash algorithm</strong> in Java, increasing location-targeting accuracy for 1M+ devices.",
                "Modernized legacy UI to Next.js, reducing page load time by <strong>60%</strong>.",
                "Established automated code quality gates using <strong>SonarQube</strong>, resolve 100+ critical vulnerabilities.",
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
                "SonarQube"
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
        description: "I architect high-throughput backend ecosystems that companies rely on to scale without friction. I don't just write code, I eliminate systemic bottlenecks.",
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
        title: "Case Studies",
        metadata: {
            title: "Engineering Case Studies | System Architect",
            description: "Deep dives into high-performance systems, 40% latency reductions, and large-scale algorithms.",
        },
        description: "Technical breakdowns of how I solve complex engineering challenges.",
    },
    blog: {
        title: "Architect's Log",
        metadata: {
            title: "Architect's Log | Technical Insights",
            description: "Deep dives into backend architecture, performance optimization, and elite development workflows.",
        },
        description: "Insights on engineering scalability and performance.",
    }
};

export const STATS_DATA = {
    yearsExp: 3,
    projectsCount: 5,
    skillsCount: SKILLS_DATA.reduce((acc, cat) => acc + cat.skills.split(',').length, 0),
    certsCount: CERTIFICATIONS_DATA().length,
};
