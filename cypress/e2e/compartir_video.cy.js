describe('Prueba del botón Compartir en YouTube', () => {
  before(() => {
    // Ignorar excepciones específicas originadas en el código de YouTube
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes("Cannot read properties of undefined (reading 'indexOf')")) {
        return false; // Ignorar este error y continuar la prueba
      }
      // Para otros errores, deja que la prueba falle
      return true;
    });
  });

  it('Hace click en el botón Compartir y verifica que aparezca el banner', () => {
    // Reemplaza "VIDEO_ID" con el identificador de un video real
    cy.visit('https://www.youtube.com/watch?v=mKwFYP8Pgv4&t=14s');

    // Selecciona el botón de Compartir que esté visible y realiza click
    cy.get('button[aria-label="Compartir"]')
      .filter(':visible')
      .should('be.visible')
      .click();

    // Verifica que el banner de compartir sea visible
    cy.get('ytd-unified-share-panel-renderer').should('be.visible');
  });
});
