/// <reference types="Cypress" />

// Since I was not able to come up with a way to input todos directly without using the input field I loaded
// them via that which is far from ideal

context('Single todo item', () => {

    before(() => {
      cy.homepage()
      cy.oneTodoSetup()
    });

    it('Shows number of items left', () => {
      cy.get('[data-cy="todo-count"]')
        .should('contain', '1 item left')
    });

});

context('Multiple todo items', () => {

    before(() => {
      cy.homepage()
      cy.multipleTodosSetup()
    });

    it('Shows number of items left', () => {
      cy.get('[data-cy="todo-count"]')
        .should('contain', '2 items left')
    });

    it('Filters all items', () => {
        cy.get('[data-cy="All"]')
          .click()
          .get('[data-cy="todo-item"]')
          .should('have.length', 3)
      });

    it('Filters active items', () => {
        cy.get('[data-cy="Active"]')
          .click()
          .get('[data-cy="todo-item"]')
          .should('have.length', 2)
    });

    it('Filters completed items', () => {
        cy.get('[data-cy="Completed"]')
          .click()
          .get('[data-cy="todo-item"]')
          .should('have.length', 1)
    });
});

context('Footer button', () => {

    before(() => {
      cy.homepage()
      cy.multipleTodosSetup()
    });

    it('Clears all completed items', () => {
      cy.get('[class="clear-completed"]')
        .click()
        .get('[data-cy="todo-item"]')
        .should('have.length', 2)
    });
});