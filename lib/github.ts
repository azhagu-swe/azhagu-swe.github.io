/**
 * GitHub API Utility
 * Provides server-side fetching for GitHub data to avoid client-side CSP and rate-limit issues.
 */

const GITHUB_API_BASE = "https://api.github.com";

export interface GitHubStats {
    public_repos: number;
    followers: number;
    following: number;
}

export async function getGitHubStats(username: string) {
    try {
        const res = await fetch(`${GITHUB_API_BASE}/users/${username}`, {
            headers: {
                // If a token is available in environment, use it
                ...(process.env.GITHUB_TOKEN && { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }),
                "Accept": "application/vnd.github.v3+json",
            },
        });

        if (res.status === 403 || res.status === 429) {
            console.warn(`GitHub API Rate Limited for ${username}`);
            return null;
        }

        if (!res.ok) {
            throw new Error(`GitHub API responded with ${res.status}`);
        }

        const data = await res.json();
        return {
            public_repos: data.public_repos,
            followers: data.followers,
            following: data.following,
        } as GitHubStats;
    } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        return null;
    }
}

export async function getGitHubEvents(username: string) {
    try {
        const res = await fetch(`${GITHUB_API_BASE}/users/${username}/events?per_page=100`, {
            headers: {
                ...(process.env.GITHUB_TOKEN && { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }),
                "Accept": "application/vnd.github.v3+json",
            },
        });

        if (res.status === 403 || res.status === 429) {
            console.warn(`GitHub API Rate Limited (Events) for ${username}`);
            return null;
        }

        if (!res.ok) {
            throw new Error(`GitHub API (Events) responded with ${res.status}`);
        }

        return await res.json();
    } catch (error) {
        console.error("Error fetching GitHub events:", error);
        return null;
    }
}
