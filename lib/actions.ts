"use server"

import { getGitHubStats, getGitHubEvents } from "./github";

/**
 * Server Action: Fetch GitHub Stats for a user
 */
export async function fetchGitHubStatsAction(username: string) {
    return await getGitHubStats(username);
}

/**
 * Server Action: Fetch GitHub Events for activity graph
 */
export async function fetchGitHubEventsAction(username: string) {
    return await getGitHubEvents(username);
}
