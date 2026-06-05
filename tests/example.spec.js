// tests/saucedemo.spec.js
const { test, expect } = require('@playwright/test');
const { SaucePages } = require('../pages/saucePages.js'); 
const data = require('../utils/testData.js');

test.describe('SauceDemo 150 Test Suite', () => {

    data.loginScenarios.forEach(scenario => {
        test(`${scenario.id}: Login Test - ${scenario.type}`, async ({ page }) => {
            const sauce = new SaucePages(page);
            await sauce.navigate();
            await sauce.login(scenario.user, scenario.pass);
            if (scenario.type === 'positive') {
                await expect(page).toHaveURL(/inventory.html/);
            } else {
                await expect(sauce.errorMsg).toBeVisible();
            }
        });
    });

    data.productDetailsScenarios.forEach(scenario => {
        test(`${scenario.id}: View Product Detail ${scenario.itemIndex}`, async ({ page }) => {
            const sauce = new SaucePages(page);
            await sauce.navigate();
            await sauce.login('standard_user', 'secret_sauce');
            await sauce.inventoryList.nth(scenario.itemIndex).locator('.inventory_item_name').click();
            await expect(page).toHaveURL(/inventory-item.html/);
        });
    });
    data.cartScenarios.forEach(scenario => {
        test(`${scenario.id}: Cart Action - ${scenario.action}`, async ({ page }) => {
            const sauce = new SaucePages(page);
            await sauce.navigate();
            await sauce.login('standard_user', 'secret_sauce');
            const btn = page.locator('.btn_inventory').first();
            if (scenario.action === 'add') {
                await btn.click();
                await expect(sauce.cartBadge).toBeVisible();
            } else {
                await btn.click(); // Add first
                await btn.click(); // Then Remove
                await expect(sauce.cartBadge).not.toBeVisible();
            }
        });
    });

    data.checkoutScenarios.forEach(scenario => {
        test(`${scenario.id}: Checkout Form Validation`, async ({ page }) => {
            const sauce = new SaucePages(page);
            await sauce.navigate();
            await sauce.login('standard_user', 'secret_sauce');
            await sauce.cartBtn.click();
            await sauce.checkoutBtn.click();
            await sauce.firstName.fill(scenario.fName);
            await sauce.lastName.fill(scenario.lName);
            await sauce.zipCode.fill(scenario.zip);
            await sauce.continueBtn.click();
            
            if (scenario.fName && scenario.lName && scenario.zip) {
                await expect(page).toHaveURL(/checkout-step-two.html/);
            } else {
                await expect(sauce.errorMsg).toBeVisible();
            }
        });
    });

    data.e2eScenarios.forEach(scenario => {
        test(`${scenario.id}: E2E Full Purchase Flow`, async ({ page }) => {
            const sauce = new SaucePages(page);
            await sauce.navigate();
            await sauce.login('standard_user', 'secret_sauce');
            await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
            await sauce.cartBtn.click();
            await sauce.checkoutBtn.click();
            await sauce.firstName.fill('Tester');
            await sauce.lastName.fill('User');
            await sauce.zipCode.fill('12345');
            await sauce.continueBtn.click();
            await sauce.finishBtn.click();
            await expect(sauce.completeHeader).toHaveText('Thank you for your order!');
        });
    });
});