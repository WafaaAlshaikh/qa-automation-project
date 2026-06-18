import LoginPage from '../pages/LoginPage';

describe('Login Tests using POM', () => {

  let user;

  before(() => {
    cy.fixture('users').then((data) => {
      user = data;
    });
  });

  it('Login with valid user', () => {
    LoginPage.visit();

    LoginPage.login(
      user.validUser.username,
      user.validUser.password
    );

    cy.url().should('include', '/inventory.html');
  });

  it('Invalid login shows error', () => {
    LoginPage.visit();

    LoginPage.login('wrongUser', 'wrongPass');

    LoginPage.errorMessage()
      .should('contain', 'Username and password do not match');
  });

});