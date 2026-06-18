class LoginPage {

  visit() {
    cy.visit('https://www.saucedemo.com/');
  }

  usernameField() {
    return cy.get('#user-name');
  }

  passwordField() {
    return cy.get('#password');
  }

  loginButton() {
    return cy.get('#login-button');
  }

  login(username, password) {
    this.usernameField().type(username);
    this.passwordField().type(password);
    this.loginButton().click();
  }

  errorMessage() {
    return cy.get('[data-test="error"]');
  }
}

export default new LoginPage();