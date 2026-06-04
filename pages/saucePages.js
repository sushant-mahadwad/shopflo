const { expect } = require('@playwright/test');

class SaucePages {
  constructor(page) {
    this.page = page;
    // Login
    this.userInput = page.locator('[data-test="username"]');
    this.passInput = page.locator('[data-test="password"]');
    this.loginBtn = page.locator('[data-test="login-button"]');
    this.errorMsg = page.locator('[data-test="error"]');
    
    // Inventory
    this.inventoryList = page.locator('.inventory_item');
    this.sortContainer = page.locator('[data-test="product_sort_container"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartBtn = page.locator('.shopping_cart_link');
    
    // Checkout
    this.checkoutBtn = page.locator('[data-test="checkout"]');
    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.zipCode = page.locator('[data-test="postalCode"]');
    this.continueBtn = page.locator('[data-test="continue"]');
    this.finishBtn = page.locator('[data-test="finish"]');
    this.completeHeader = page.locator('.complete-header');
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(user, pass) {
    if (user !== null) await this.userInput.fill(user);
    if (pass !== null) await this.passInput.fill(pass);
    await this.loginBtn.click();
  }
}

module.exports = { SaucePages };