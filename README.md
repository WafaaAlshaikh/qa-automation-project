# qa-automation-project
# 🧪 Cypress UI Automation Project

## Overview

This project demonstrates end-to-end UI test automation using **Cypress**. It focuses on testing web application workflows with structured, maintainable, and scalable test design.

The project simulates real QA scenarios such as form interactions, UI validation, and user flow verification using modern automation practices.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Cypress | E2E Test Framework |
| JavaScript (ES6) | Test Scripting Language |
| Node.js | Runtime Environment |
| Mocha | Test Runner (built-in with Cypress) |
| Chai | Assertion Library |
| Page Object Model | Test Architecture Pattern |
| Fixtures | Test Data Management |

---

## 📁 Project Structure
cypress/

│

├── e2e/                # Test specs

│   └── login.cy.js

│

├── fixtures/           # Test data (JSON files)

│   └── users.json

│

├── pages/              # Page Object Model files

│   └── loginPage.js

│

└── support/            # Custom commands & configuration

└── e2e.js

---

## ✨ Key Features

- ✅ End-to-end login workflow testing
- ✅ UI element visibility validation
- ✅ Form input handling and submission
- ✅ Test data separation using fixtures
- ✅ Reusable Page Object Model (POM) structure
- ✅ Clean and maintainable test architecture

---

## 🔁 Example Test Scenario

1. Visit login page
2. Enter valid credentials from fixture
3. Submit the form
4. Verify successful login behavior

---

## 📦 Test Data — `fixtures/users.json`

```json
{
  "validUser": {
    "username": "tomsmith",
    "password": "SuperSecretPassword!"
  }
}
```

---

## 🧱 Page Object Model

Selectors and actions are encapsulated in `pages/loginPage.js` to improve reusability and maintainability across tests.

```js
// pages/loginPage.js
class LoginPage {
  visit() {
    cy.visit('/login');
  }

  enterUsername(username) {
    cy.get('#username').type(username);
  }

  enterPassword(password) {
    cy.get('#password').type(password);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }
}

export default new LoginPage();
```

---

## ▶️ How to Run Tests

**Install dependencies:**

```bash
npm install
```

**Run Cypress in interactive mode:**

```bash
npx cypress open
```

**Run Cypress in headless mode:**

```bash
npx cypress run
```

---

## 🎯 Purpose of This Project

This project was built to demonstrate practical QA automation skills, including:

- 🔍 UI test automation
- 🏗️ Test design principles
- 🔄 Maintainable test architecture
- 🌐 Real-world QA workflows
