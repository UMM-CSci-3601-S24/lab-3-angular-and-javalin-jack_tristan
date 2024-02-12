

export class TodoListPage{
  navigateTo() {
    return cy.visit('/todos');
  }

  getUrl() {
    return cy.url();
  }

  /**
   * Gets the page title, which appears in the page tab
   *
   * @return the title of the component page
   */
  getPageTitle() {
    return cy.title();
  }

  /**
   * Gets the title of the app when visiting the `/todo` page.
   *
   * @returns the value of the element with the ID `.user-list-title`
   */
  getTodoTitle() {
    return cy.get('.todo-list-title');
  }

  /**
   * Get all the `app-todo-card` DOM elements. This will be
   * empty if we're using the list view of the todos.
   *
   * @returns an iterable (`Cypress.Chainable`) containing all
   *   the `app-todo-card` DOM elements.
   */
  getTodoCards() {
    return cy.get('.todo-cards-container app-todo-card');
  }

  /**
   * Get all the `.todo-list-item` DOM elements. This will
   * be empty if we're using the card view of the todos.
   *
   * @returns an iterable (`Cypress.Chainable`) containing all
   *   the `.todo-list-item` DOM elements.
   */
  getTodoListItems() {
    return cy.get('.todo-nav-list .todo-list-item');
  }

  /**
   * Clicks the "view profile" button for the given user card.
   * Requires being in the "card" view.
   *
   * @param card The user card
   */
  clickViewProfile(card: Cypress.Chainable<JQuery<HTMLElement>>) {
    return card.find<HTMLButtonElement>('[data-test=viewProfileButton]').click();
  }
}
