class CartPage {

  addFirstItemToCart() {
    cy.get('.inventory_item').first().contains('Add to cart').click();
  }

  cartBadge() {
    return cy.get('.shopping_cart_badge');
  }

  openCart() {
    cy.get('.shopping_cart_link').click();
  }
}

export default new CartPage();