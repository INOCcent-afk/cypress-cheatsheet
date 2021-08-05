/// <reference types="cypress"/>

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhdmVpbm9jIiwiX2lkIjoiNjEwOGU4MDZhNzVkYjUwMDA4Yzk1ZDI3IiwibmFtZSI6IkRhdmUgSW5vYyIsImlhdCI6MTYyNzk3NjExMywiZXhwIjoxNjMwNTY4MTEzfQ.Rhh8baLq7JDsEPEFVPCMsnXgmv00t-0m-oezhMx9RaQ";

describe("Test", () => {
  before(() => {
    cy.then(() => {
      window.localStorage.setItem("__auth__token", token);
    });
  });

  beforeEach(() => {
    cy.viewport("macbook-16");
  });

  it("Test one", () => {
    cy.visit("https://codedamn.com");

    cy.get("[data-testid='main-title']").contains(
      "Be industry-ready fullstack coder. 10x faster and 100x cheaper."
    );
  });

  it("Test two", () => {
    cy.visit("https://codedamn.com/login").should("exist");
    cy.contains("Email address / Username").should("exist");
    cy.contains("Password").should("exist");
    cy.contains("Remember me").should("exist");
    cy.contains("Forgot your password?").should("exist");
    cy.contains("Sign in to your account").should("exist");
  });

  it("Test three", () => {
    cy.visit("https://codedamn.com/login").should("exist");

    cy.contains("Forgot your password?").click();
    cy.url().should("eq", "https://codedamn.com/password-reset");

    cy.go("back");
    cy.url().should("eq", "https://codedamn.com/login");
  });

  it("Test four", () => {
    cy.visit("https://codedamn.com/login").should("exist");
    cy.get("[data-testid='username']").type("example");
    cy.get("[data-testid='password']").type("example");
    cy.get("[data-testid='login']").click();
    cy.contains(
      "Unable to authorize. Please check username/password combination"
    ).should("exist");
  });

  it("Test four", () => {
    cy.visit("https://codedamn.com/login").should("exist");
    cy.get("[data-testid='username']").type("dave@uxconsultancy.com");
    cy.get("[data-testid='password']").type("Velocity8280304");
    cy.get("[data-testid='login']").click();

    cy.url().should("eq", "https://codedamn.com/dashboard");
    cy.contains("something", { timeout: 1 * 1000 }).should("not.exist");
  });
});

// Cheatsheet
