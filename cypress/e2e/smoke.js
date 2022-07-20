/* eslint-disable quotes */
describe('app', () => {
  it('the app opens in develop', () => {
    cy.visit('/');
  });
  it('the app navigates to the Services section', () => {
    cy.visit('/')
      .get('.nav-item')
      .contains(/services/i)
      .click();
  });
  it('the Services section contains a Services header', () => {
    cy.visit('/')
      .get('section#services')
      .contains('Services')
      .click();
  });
  it('the app navigates to the About section', () => {
    cy.visit('/')
      .get('.nav-item')
      .contains(/about/i)
      .click();
  });
  it('the About section contains an About header', () => {
    cy.visit('/')
      .get('section#about')
      .contains('About')
      .click();
  });
  it('the app navigates to the Publications section', () => {
    cy.visit('/')
      .get('.nav-item')
      .contains(/publications/i)
      .click();
  });
  it('the Publications section contains a Publications header', () => {
    cy.visit('/')
      .get('section#publications')
      .contains('Publications')
      .click();
  });
  it('the app navigates to the Contact section', () => {
    cy.visit('/')
      .get('.nav-item')
      .contains(/contact/i)
      .click();
  });
  it('the Contact section contains a Contact Nowak & Associates header', () => {
    cy.visit('/')
      .get('section#contact')
      .contains('Contact Nowak & Associates')
      .click();
  });
  it('the app navigates to the Home section', () => {
    cy.visit('/')
      .get('.nav-item')
      .contains(/home/i)
      .click();
  });
  it('the Home section contains a Nowak and Associates, Inc. header', () => {
    cy.visit('/')
      .get('section#home')
      .contains('Nowak and Associates, Inc.')
      .click();
  });
});
