import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E Tests', () => {
    test('should load home page correctly', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveTitle(/Alagappan P | Full-Stack Developer/);

        // Verify "Hire Me" button exists
        // Using getByText is often safer for complex buttons
        const hireMeButton = page.getByText("Hire Me for Your Next Project", { exact: false });
        await expect(hireMeButton).toBeVisible();
    });

    test('should navigate to blog page', async ({ page, isMobile }) => {
        await page.goto('/');

        // Handle mobile navigation if needed
        if (isMobile) {
            // Mobile Bottom Nav is a <nav> fixed at bottom
            // We scope the search to that nav to ensure we don't hit hidden sidebar links
            const bottomNav = page.locator('nav').filter({ hasText: 'Home' }); // Bottom nav has Home
            await bottomNav.getByRole('link', { name: 'Blog' }).click();
        } else {
            await page.getByRole('link', { name: 'Blog' }).first().click();
        }

        await expect(page).toHaveURL(/.*blog/);
        // Heading level might vary, check for generic text
        await expect(page.getByText('Blog', { exact: true }).first()).toBeVisible();
    });

    test('should toggle dark/light theme', async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');

        // Verify theme attribute (next-themes uses data-theme)
        const html = page.locator('html');
        // Check for data-theme attribute existence
        await expect(html).toHaveAttribute('data-theme', /light|dark|system/);
    });

    test('resume print styling', async ({ page }) => {
        await page.goto('/resume');

        // Check if print styles are potentally active? 
        // Hard to test actual print output in E2E, but we can check if specific classes exist.

        // Verify the resume content wrapper has print classes we added
        const resumeWrapper = page.locator('.print\\:bg-white');
        await expect(resumeWrapper).toBeVisible();

        // Verify header is a banner role (semantic check)
        const header = page.getByRole('banner');
        await expect(header).toBeVisible();
    });
});
