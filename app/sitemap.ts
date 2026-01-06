import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://azhagu-swe.github.io'

    // Standard routes
    const routes = [
        '',
        '/projects',
        '/blog',
        '/about',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // TODO: In a real dynamic scenario, we would map over projects/blogs here.
    // For now, listing known static paths or future dynamic fetching can be added.

    return [...routes]
}
