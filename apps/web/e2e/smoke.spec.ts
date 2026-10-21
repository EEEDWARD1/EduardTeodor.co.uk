import { expect, test } from "@playwright/test";

test("home page loads", async ({ page }) => {
  const response = await page.goto("/");

  expect(response?.status()).toBe(200);
  await expect(page).toHaveTitle("Eduard Teodor");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Hi, I’m Ed.",
  );
  await expect(page.getByRole("contentinfo")).toBeVisible();
});

test("robots.txt blocks crawlers on a non-production build", async ({
  request,
}) => {
  const response = await request.get("/robots.txt");
  const body = await response.text();

  expect(response.status()).toBe(200);
  expect(body).toContain("Disallow: /");
  expect(body).not.toContain("Sitemap:");
});

test("unknown path returns the custom 404 page", async ({ page }) => {
  const response = await page.goto("/this-page-does-not-exist");

  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Page not found",
  );
});
test("canonical URL uses the build's SITE_URL", async ({ page }) => {
  const siteUrl = process.env.SITE_URL ?? "http://localhost:3000";

  await page.goto("/");

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    new RegExp(`^${siteUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`),
  );
});
