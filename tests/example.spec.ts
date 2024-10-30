import { expect, test } from '@playwright/test';

test(
	'has title @test2',
	{
		tag: '@test',
	},
	async ({ page }) => {
		await page.goto('https://playwright.dev/');

		// Expect a title "to contain" a substring.
		await expect(page).toHaveTitle(/Playwri/);

		expect(page.getByRole('link', { name: 'Getting started' })).toBeDefined;
	}
);

test('get started link', async ({ page }) => {
	await page.goto('https://playwright.dev/');

	// Click the get started link.
	await page.getByRole('link', { name: 'Get started' }).click();

	// Expects page to have a heading with the name of Installation.
	await expect(
		page.getByRole('heading', { name: 'Installation' })
	).toBeVisible();
});
