/// <reference types="Cypress" />

context('TodoMVC setup', () => {
  before(() => {
    cy.homepage()
  });

  it('Test the header setup', () => {
    cy.get('[data-cy="header"]')
      .should('be.visible')
      .get('[data-cy="title"]')
      .should('be.visible')
      .get('[data-cy="new-todo-input"]')
      .should('be.visible')
  });

  it('Test the main section setup', () => {
    cy.get('[data-cy="main-section"]')
      .should('be.visible')
      .get('[data-cy="todo-list"]')
      .should('be.hidden')
      .get('[data-cy="todo-item"]')
      .should('not.exist')
  });

  it('Test footer setup', () => {
    cy.get('[data-cy="footer"]')
      .should('not.exist')
  });

})