// 1. XPath by Attribute

/*
Syntax

//tagName[@attributeName="attributeValue"]

Examples

//input[@name="username"]
//input[@name="password"]
//button[@type="submit"]
*/

import { test, expect } from "@playwright/test";
import { test, expect } from "@playwright/test";

test.skip("XPath by Attribute - OrangeHRM", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    console.log("Navigate to OrangeHRM");

    await page.locator('//input[@name="username"]').fill("Admin");
    await page.locator('//input[@name="password"]').fill("admin123");
    await page.locator('//button[@type="submit"]').click();

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await expect(page.locator('//span[@class="oxd-userdropdown-tab"]')).toBeVisible();
});


test("XPath by Attribute - Automation Demo", async ({ page }) => {

    await page.goto("https://demo.automationtesting.in/Register.html");

    await page.locator('//input[@placeholder="First Name"]').fill("Rohit");
    await page.locator('//input[@placeholder="Last Name"]').fill("Sharma");
    await page.locator('//textarea[@ng-model="Adress"]').fill("Pune");

    await page.waitForTimeout(3000);
});


// XPath by Text

/*
Syntax

//tagName[text()="Text Value"]
*/

test("XPath by Text", async ({ page }) => {

    await page.goto("https://www.facebook.com/");

    await page.locator('//input[@name="email"]').fill("Rohit@gmail.com");
    await page.locator('//input[@type="password"]').fill("Sharma@123");

    // await page.locator("//span[text()='Log in']").click();
    // await page.locator("//span[text()='Forgotten password?']").click();

    await page.locator("//span[text()='Create new account']").click();

    await page.waitForTimeout(3000);
});


// XPath by contains() - Text

/*
Syntax

//tagName[contains(text(),"Partial Text")]
*/

test("XPath by contains() using Text", async ({ page }) => {

    await page.goto("https://www.facebook.com/");

    await page.locator('//input[@name="email"]').fill("Rohit@gmail.com");
    await page.locator('//input[@type="password"]').fill("Sharma@123");

    // await page.locator("//span[contains(text(),'Forgotten password?')]").click();

    await page.locator("//span[contains(text(),'Forgotten')]").click();

    const text = page.locator("//span[contains(text(),'Enter')]");

    await expect(text).toContainText("Enter your");

    await page.waitForTimeout(3000);
});


// XPath by contains() - Attribute

/*
Syntax

//tagName[contains(@attributeName,"attributeValue")]

Example

//input[contains(@placeholder,"Username")]
*/

test("XPath by contains() using Attribute", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator('//input[contains(@name,"username")]').fill("Admin");
    await page.locator('//input[contains(@name,"password")]').fill("admin123");
    await page.locator('//button[contains(@type,"submit")]').click();

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
});