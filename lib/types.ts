import { Frontmatter as ZodFrontmatter } from "./schemas"

// Content Types
export type Frontmatter = ZodFrontmatter

export interface Post {
    slug: string
    frontmatter: Frontmatter
    content: string
    readingTime: string
}

// Data Types
export interface SocialLink {
    platform: string
    icon: string
    link: string
    username: string
    color: string
}

export interface ExperienceRole {
    title: string
    company: string
    duration: string
    location: string
    responsibilities: string[]
    techStack: string[]
}

export interface SkillCategory {
    title: string
    skills: string
}

export interface Certification {
    description: string
    img: string
}

export interface Achievement {
    description: string
    img: string
}

export interface ProjectData {
    title: string
    description: string
    metadata: {
        title: string
        description: string
    }
}
