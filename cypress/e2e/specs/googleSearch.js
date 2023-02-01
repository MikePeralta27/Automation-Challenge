/// <reference types='Cypress'/>

import { resultsDiv } from '../../support/pageObjects/resultsPage';

describe('Login Test Suite', function () {
  before(() => {
    cy.fixture('data').then(function (data) {
      this.data = data;
    });
    cy.visit('/');
  });

  it('Search Webpage', function () {
    cy.search(this.data.searchQuery);
    resultsDiv().should('be.visible');
  });
});
