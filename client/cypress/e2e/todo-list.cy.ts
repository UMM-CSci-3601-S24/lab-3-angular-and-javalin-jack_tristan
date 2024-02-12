import { TodoListPage } from '../support/todo-list.po';

const page = new TodoListPage();

describe('Todo list', () => {

  beforeEach(() => {
    page.navigateTo();
  });

  it('Should have the correct page title', () => {
    page.getPageTitle().should('eq', 'Todos');
  });

  it('Should have the correct title', () => {
    page.getTodoTitle().should('have.text', 'Todos');
  });

  it('Should type something in the Owner filter and check that it returned correct elements', () => {
    // Filter for user 'Fry'
    cy.get('[data-test=todoOwnerinput]').type('Fry');

    // All of the user cards should have the name we are filtering by
    page.getTodoCards().should('have.lengthOf.above', 0);
  });

  it('Should type something in the Status filter and check that it returned correct elements', () => {
    // Filter for status 'complete'
    cy.get('[data-test=todoStatusSelect]').type('complete');

    page.getTodoCards().should('have.lengthOf.above', 0);
  });

  it('Should type something in the Category filter and check that it returned correct elements', () => {
    // Filter for category 'homework'
    cy.get('[data-test=todoCategorySelect]').type('homework');

    page.getTodoCards().should('have.lengthOf.above', 0);
  });

  it('Should type something in the Body filter and check that it returned correct elements', () => {
    // Filter for body 'qui'
    cy.get('[data-test=todoBodyInput]').type('qui');

    page.getTodoCards().should('have.lengthOf.above', 0);
  });

  it('Should type something in the Limit filter and check that it returned correct elements', () => {
    // Filter for limit '3'
    cy.get('[data-test=todoLimitInput]').type('3');

    page.getTodoCards().should('have.lengthOf.above', 0);
  });

});
