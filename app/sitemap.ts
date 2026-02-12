import { MetadataRoute } from 'next'
import { getPostSlugs } from '@/lib/mdx'

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://azhagu-swe.github.io'

    // Standard routes
    const routes = [
        '',
        '/projects',
        '/blog',
        '/about',
        '/contact',
        '/tutorials',
        '/privacy',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic content routes
    const contentTypes = ['blog', 'projects', 'tutorials'] as const
    const contentRoutes = contentTypes.flatMap((type) => {
        const slugs = getPostSlugs(type)
        return slugs.map((slug: string) => ({
            url: `${baseUrl}/${type}/${slug.replace(/\.mdx$/, '')}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }))
    })

    return [...routes, ...contentRoutes]
}

