import LoginPage from '../pages/LoginPage';
import CartPage from '../pages/CartPage';

describe('Cart Tests using POM', () => {

  it('Add item to cart', () => {

    LoginPage.visit();
    LoginPage.login('standard_user', 'secret_sauce');

    CartPage.addFirstItemToCart();

    CartPage.cartBadge()
      .should('contain', '1');
  });

});