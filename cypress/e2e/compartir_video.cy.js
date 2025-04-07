describe('Compartir un video', () => {
  before(() => {
    Cypress.on('uncaught:exception', () => false);
    cy.viewport(1280, 900);
  });

  it.only('Hace clic en el botón Compartir', () => {
    cy.visit('https://www.youtube.com/watch?v=mKwFYP8Pgv4', { timeout: 60000 });

    cy.get('ytd-video-primary-info-renderer', { timeout: 15000 }).should('exist');

    cy.get('button[aria-label="Compartir"]', { timeout: 15000 })
      .filter(':visible')
      .should('be.visible')
      .click({ force: true });

    // Verifica que el panel de compartir se muestra
    cy.get('ytd-unified-share-panel-renderer', { timeout: 10000 })
      .should('be.visible');
  });
});
