/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Registration', () => {

    

    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://localhost:5173/#/register')
    })
  

    it('can register a new user', () => {
        
        cy.get("#username").type("akhilesh");
        cy.get("#email").type("akhilesh@test.com");
        cy.get("#password").type("Akhilesh@12345!");
        cy.get("#firstname").type("Akhilesh");
        cy.get("#lastname").type("Singh");
        cy.get("#submit").click()
      })

  
    
  })
  