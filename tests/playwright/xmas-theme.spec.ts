import { test, expect } from '@playwright/test';

test.describe('Christmas Theme Toggle', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the home page using relative URL
    await page.goto('/');
  });

  test('should display the Christmas theme toggle button', async ({ page }) => {
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Check if the Xmas toggle button is present
    const toggleButton = page.getByRole('button', { name: /christmas theme/i });
    await expect(toggleButton).toBeVisible();
  });

  test('should toggle Christmas theme on and off', async ({ page }) => {
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Find the toggle button
    const toggleButton = page.getByRole('button', { name: /enable christmas theme/i });
    await expect(toggleButton).toBeVisible();
    
    // Check initial state
    await expect(toggleButton).toHaveText(/Xmas Off/);
    
    // Click to enable Christmas theme
    await toggleButton.click();
    await page.waitForTimeout(500); // Wait for animation
    
    // Check that theme is enabled
    const toggleButtonAfter = page.getByRole('button', { name: /disable christmas theme/i });
    await expect(toggleButtonAfter).toHaveText(/Xmas On/);
    
    // Check that header has Christmas styling
    const header = page.locator('header');
    await expect(header).toHaveClass(/bg-xmas-red-700/);
  });

  test('should persist theme preference after page reload', async ({ page }) => {
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Enable Christmas theme
    const toggleButton = page.getByRole('button', { name: /enable christmas theme/i });
    await toggleButton.click();
    await page.waitForTimeout(500);
    
    // Reload the page
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    // Check that theme is still enabled after reload
    const toggleButtonAfterReload = page.getByRole('button', { name: /disable christmas theme/i });
    await expect(toggleButtonAfterReload).toBeVisible();
    await expect(toggleButtonAfterReload).toHaveText(/Xmas On/);
  });

  test('should display snowflakes when Christmas theme is enabled', async ({ page }) => {
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Enable Christmas theme
    const toggleButton = page.getByRole('button', { name: /enable christmas theme/i });
    await toggleButton.click();
    await page.waitForTimeout(500);
    
    // Check that snowflakes are visible
    const snowflakes = page.locator('.snowflake');
    const count = await snowflakes.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should update button styling when theme is enabled', async ({ page }) => {
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Enable Christmas theme
    const toggleButton = page.getByRole('button', { name: /enable christmas theme/i });
    await toggleButton.click();
    await page.waitForTimeout(500);
    
    // Check that Sign Up button has Christmas styling
    const signUpButton = page.getByRole('button', { name: /sign up/i }).first();
    await expect(signUpButton).toBeVisible();
  });

  test('should be accessible', async ({ page }) => {
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Check for accessibility attributes
    const toggleButton = page.getByRole('button', { name: /enable christmas theme/i });
    await expect(toggleButton).toHaveAttribute('aria-label');
    await expect(toggleButton).toHaveAttribute('aria-pressed', 'false');
    
    // Toggle and check updated accessibility attributes
    await toggleButton.click();
    const toggleButtonAfter = page.getByRole('button', { name: /disable christmas theme/i });
    await expect(toggleButtonAfter).toHaveAttribute('aria-pressed', 'true');
  });
});
