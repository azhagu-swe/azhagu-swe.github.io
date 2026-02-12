const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const SITE_URL = 'https://azhagu-swe.github.io';

const getAllPosts = () => {
    const blogDir = path.join(process.cwd(), 'content/blog');
    if (!fs.existsSync(blogDir)) return [];

    const files = fs.readdirSync(blogDir);
    return files
        .filter(file => file.endsWith('.mdx'))
        .map(file => {
            const content = fs.readFileSync(path.join(blogDir, file), 'utf8');
            const frontMatter = matter(content);
            return {
                title: frontMatter.data.title,
                description: frontMatter.data.description,
                date: frontMatter.data.date,
                slug: file.replace('.mdx', ''),
            };
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date));
};

const generateRSS = () => {
    const posts = getAllPosts();
    const date = new Date();

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Alagappan P | Full-Stack Developer</title>
    <link>${SITE_URL}</link>
    <description>Full-Stack Java Developer specializing in high-performance microservices.</description>
    <language>en-us</language>
    <lastBuildDate>${date.toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    ${posts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid>${SITE_URL}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.description}]]></description>
    </item>`).join('')}
  </channel>
</rss>`;

    fs.writeFileSync(path.join(process.cwd(), 'public/rss.xml'), rss);
    console.log('RSS Feed generated at public/rss.xml');
};

generateRSS();
