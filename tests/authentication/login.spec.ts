import { test } from "@playwright/test";
test("Login page ", async ({ page }) => {
    await test.step("Navigate to Login page", async () => {
        await page.goto("https://e-commerce-dev.betterbytesvn.com/");
    });
});