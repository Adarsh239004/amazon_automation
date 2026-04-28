const { test } = require('@playwright/test');
const { AmazonPage } = require('../pages/amazonPage');

test.describe.parallel('Amazon Test Cases', () => {

  test('Test Case 1 - iPhone', async ({ page }) => {
    const amazon = new AmazonPage(page);

    try {
      await amazon.goToAmazon();
      await amazon.searchProduct('iPhone');

      const productPage = await amazon.selectFirstProduct();

      const price = await amazon.getPrice(productPage);
      console.log('iPhone Price:', price);

      await amazon.addToCart(productPage);

      await page.waitForTimeout(2000);

    } catch (error) {
      console.log('Handled error in iPhone test:', error.message);
    }
  });

  test('Test Case 2 - Galaxy', async ({ page }) => {
    const amazon = new AmazonPage(page);

    try {
      await amazon.goToAmazon();
      await amazon.searchProduct('Samsung Galaxy');

      const productPage = await amazon.selectFirstProduct();

      const price = await amazon.getPrice(productPage);
      console.log('Galaxy Price:', price);

      await amazon.addToCart(productPage);

      await page.waitForTimeout(2000);

    } catch (error) {
      console.log('Handled error in Galaxy test:', error.message);
    }
  });

});