/// <reference types="Cypress" />

context('TodoMVC input form', () => {

    beforeEach(() => {
      cy.homepage()
    });
    
    it('has focus when loaded', () => {
      cy.focused()
        .should('have.attr', 'data-cy' )
    });

    it('accepts text', () => {
      cy.get('[data-cy="new-todo-input"]')
        .type('Buy tickets')
        .should('have.value', 'Buy tickets')
        .get('[data-cy="todo-item"]')
        .should('not.exist')
    });

    it('submits form', () => {
      cy.get('[data-cy="new-todo-input"]')
        .type('Visit mother-in-law{enter}')
        .get('[data-cy="todo-item-label"]')
        .should('contain', 'Visit mother-in-law')

      cy.get('[data-cy="todo-item"]')
        .should('have.length', 1)
    });

})