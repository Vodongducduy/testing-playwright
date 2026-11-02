import { test, expect } from '@playwright/test';

test('My first Playwright test', async ({ page }) => {

  // Step 1: Open website
  await page.goto('https://example.com');

  // Step 2: Find heading by Role
  const heading = page.getByRole('heading', {
    name: 'Example Domain'
  });

  // Step 3: Verify heading
  await expect(heading).toBeVisible();

  // Step 4: Find link
  const link = page.getByRole('link', {
    name: 'Learn more'
  });

  // Step 5: Verify link
  await expect(link).toBeVisible();

});
