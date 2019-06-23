//import todos from 'C:/PB/cypress-todomvc/src/reducers/todos'
//import * as types from 'C:/PB/cypress-todomvc/src/constants/ActionTypes' 

Cypress.Commands.add('homepage', (seedData = 'fixtures:todos') => {
/*    todos([], {
        type: types.ADD_TODO,
        text: 'Run the tests'
      })
    
    cy.server()
    cy.route('GET', '/sockjs-node/', seedData)
*/
// I tried to seed data for further use in test but I was not able to find a way
  cy.visit('http://localhost:3000/')
})

Cypress.Commands.add('oneTodoSetup', () => {
  cy.get('[data-cy="new-todo-input"]')
    .type('Do the assignement{enter}')
})

Cypress.Commands.add('multipleTodosSetup', () => {
  cy.get('[data-cy="new-todo-input"]')
    .type('Do the assignement{enter}')
    .get('[data-cy="toggle"]')
    .click()
    .get('[data-cy="new-todo-input"]')
    .type('Buy tickets{enter}')
    .get('[data-cy="new-todo-input"]')
    .type('Visit mother-in-law{enter}')
})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
