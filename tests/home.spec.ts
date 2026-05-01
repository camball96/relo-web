import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  // Tests the page metadata
  test("Has page metadata", async ({ page }) => {
    await expect(page).toHaveTitle(/Relo — Your clients. Instantly recalled./);
    await expect(page).toHaveURL("/");
  });

  // Test navigation works
  test("Navigation works", async ({ page }) => {
    await page.getByRole("link", { name: "Features" }).click();
    await expect(page).toHaveURL(/\/#features$/);
    await page.getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL(/\/#about$/);
    await page.getByRole("link", { name: "Contact" }).click();
    await expect(page).toHaveURL(/\/#contact$/);
    await page.getByRole("link", { name: "Contact" }).click();
    await expect(page).toHaveURL(/\/#contact$/);
    await page.getByRole("link", { name: "Join waitlist" }).click();
    await expect(page).toHaveURL(/\/#contact$/);
  });

  // Test quick email address populates & submits
  test("Quick email address populates & submits", async ({ page }) => {
    await page.getByTestId("email_hero").fill("test@test.com");
    await page.getByTestId("submit-button-hero").click();
    await expect(page.getByTestId("success-message-hero")).toBeVisible();
  });

  // Test form populates & submits
  test("Form populates & submits", async ({ page }) => {
    await page.getByRole("link", { name: "Join waitlist" }).click();
    await expect(page).toHaveURL(/\/#contact$/);
    await page.getByRole("textbox", {name: "name"}).fill("Playwright");
    await page.getByTestId("email").fill("test@test.com");
    await page.getByTestId("message").fill("Hello, I'm a test message");
    await page.getByTestId("submit-button").click();
    await expect(page.getByTestId("success-message")).toBeVisible();
  });
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
