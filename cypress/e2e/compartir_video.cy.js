describe('YouTube Share Button Test', () => {
  it('Debería mostrar el popup de compartir al hacer clic en el botón Compartir', () => {
    // Visitar el video de YouTube
    cy.visit('https://youtu.be/vMLk_T0PPbk?si=GCYYk1jN-xveZJEb');

    // Ubica el elemento de feedback interno y sube hasta el botón contenedor para hacer clic
    cy.get('.yt-spec-touch-feedback-shape__fill', { includeShadowDom: true })
      .parents('button')
      .first()
      .click({ force: true });

    // Verifica que se despliega el popup de compartir
    cy.get('style-scope ytd-popup-container', { includeShadowDom: true })
      .should('be.visible');
    });
  }
);
