/// <reference types="Cypress" />

// Since I was not able to come up with a way to input todos directly without using the input field so the tests
// are depending on each other to function which is bad design
// I could set up desired list state before each test which is also not the best solution


context('TodoMVC list', () => {

    before(() => {
      cy.homepage()
    });
    
    it('Inputs new entery', () => {
      cy.get('[data-cy="new-todo-input"]')
        .type('Do the assignement{enter}')
        .get('[data-cy="todo-item-label"]')
        .should('contain', 'Do the assignement')
    });

    it('Checks an entery as complete', () => {
      cy.get('[data-cy="toggle"]')
        .click()
        .get('[data-cy="todo-item"]')
        .should('have.class', 'completed')
        .and('have.length', 1)
      });

    it('Checks an entery as incomplete', () => {
      cy.get('[data-cy="toggle"]')
        .click()
        .get('[data-cy="todo-item"]')
        .should('not.have.class', 'completed')
        .and('have.length', 1)
    });

    it('Deletes an entery', () => {
      cy.get('[data-cy="todo-item-remove"]')
        .click({force: true})
        .get('[data-cy="todo-item"]')
        .should('not.exist')
    });
})