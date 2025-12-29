import { SocialLink, ExperienceRole, SkillCategory, Certification, Achievement, ProjectData } from "./types";

export const BASE_URLS = {
    PORTFOLIO: "https://azhagu-swe.github.io",
    PROFILE_IMAGE: "/image/profile.png",
    RESUME: "/pdf/azhagu-resume.pdf",
};

// Shared constants to avoid duplication
const SHARED_TEXT = {
    NAME: "Alagappan P",
    ROLE: "Software Developer | Full Stack Engineer",
    BIO: "I build scalable, high-performance applications that solve real-world problems. With expertise in Java, Spring Boot, and modern web technologies, I transform complex requirements into elegant, efficient solutions. Experienced with AI tools like Qwen CLI and Google's Gemini CLI for enhanced development workflows. Let's create something amazing together!",
    SHORT_BIO: "I build scalable, high-performance applications that solve real-world problems. With expertise in Java, Spring Boot, and modern web technologies, I transform complex requirements into elegant, efficient solutions. Let's create something amazing together!",
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
    roles: [
        "Full Stack Developer 🚀",
        "Java & Spring Boot Specialist ☕",
        "Microservices Architect 🏗️",
        "Problem Solver 🧩",
        "Tech Innovator 💡",
    ],
    description: SHARED_TEXT.SHORT_BIO, // Using short bio as it matches the Hero data input
    buttons: {
        hire: "Let's Connect",
        resume: "Get My Resume",
    },
    images: {
        profile: BASE_URLS.PROFILE_IMAGE,
        resume: BASE_URLS.RESUME,
    },
};

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
        img: `${basePath}/image/Java-Full-Stack-skillup.png`,
    },
    {
        description: "Java Certification Course - Simplilearn, 2022",
        img: `${basePath}/image/java-certificate.jpg`,
    },
    {
        description: "ChatGPT Advanced Course - Simplilearn, 2025",
        img: `${basePath}/image/chat_gpt_advanced_cert.jpg`,
    },
    {
        description: "Introduction to Prompt Engineering - Simplilearn, 2025",
        img: `${basePath}/image/prompt_engineer_cert.jpg`,
    },
];

export const ACHIEVEMENTS_DATA = (basePath: string = ""): Achievement[] => [
    {
        description:
            "🏆 Secured Second Prize in a Debugging Competition at National College, Trichy.",
        img: `${basePath}/image/Debuggin-2nd-Prize.jpg`,
    },
];

export const PARTICIPATIONS_DATA = (basePath: string = ""): Achievement[] => [
    {
        description:
            "🏅 National Level Workshop: Web Application Frameworks (Struts, Spring, Hibernate) - Anna University, Trichy.",
        img: `${basePath}/image/AnnaUniversity-2.jpg`,
    },
    {
        description:
            "🏅 National Level Seminar: Skill-Based Jobs & Employment Opportunities - Anna University, Trichy.",
        img: `${basePath}/image/AnnaUniversity-1.jpg`,
    },
    {
        description:
            "🏅 State Level Workshop: Recent Trends in ICT - H.H. The Rajah's College, Pudukkottai.",
        img: `${basePath}/image/HHRC.jpg`,
    },
];

export const EXPERIENCE_DATA = {
    header: {
        title: "Professional Experience",
        subtitle:
            "3+ years of expertise in Java, Spring Boot, and full-stack development.",
    },
    roles: [
        {
            title: "Full Stack Java Developer",
            company: "Infosys",
            duration: "Nov 2025 – Present",
            location: "India",
            responsibilities: [
                "Developing robust full-stack applications using modern technologies and industry best practices.",
                "Collaborating with cross-functional teams to design and implement scalable solutions.",
                "Building responsive user interfaces using React and Angular frameworks.",
                "Designing and maintaining microservices architecture using Java and Spring Boot.",
                "Implementing secure APIs and ensuring high-performance application functionality.",
            ],
            techStack: [
                "React",
                "Angular",
                "Microservices",
                "Java",
                "Spring Boot",
            ],
        },
        {
            title: " Junior Software Developer",
            company: "Memob Plus Pvt Ltd",
            duration: "Aug 2022 – Oct 2025",
            location: "Chennai, Tamil Nadu",
            responsibilities: [
                "Created a special <strong>proximity hash</strong> in <strong>Java</strong> for better location-based targeting, improving accuracy by <strong>15%</strong>.",
                "Optimized database queries using <strong>PostgreSQL</strong> to enhance data retrieval speed and improve application performance.",
                "Designed and developed scalable <strong>microservices</strong> using <strong>Java</strong> and <strong>Spring Boot</strong>, exposing RESTful APIs with a focus on low latency.",
                "Cut API latency by <strong>20%</strong> by implementing a targeted <strong>Redis</strong> caching strategy for background tasks.",
                "Improved database performance by <strong>10%</strong> through strategic indexing and advanced <strong>PostgreSQL</strong> query optimization.",
                "Contributed to the modernization of a legacy system, enhancing the UI with <strong>Next.js</strong>.",
                "Architected a unified audience management service to integrate with marketing platforms like <strong>Meta, Snapchat, and Tik Tok</strong>.",
            ],
            techStack: [
                "Java",
                "Spring Boot",
                "Microservices",
                "Redis",
                "RabbitMQ",
                "Next.js",
                "MUI",
                "PostgreSQL",
                "OAuth 2.0",
                "React.js",
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
