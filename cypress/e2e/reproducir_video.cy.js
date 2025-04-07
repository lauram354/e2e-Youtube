describe('Youtube Play Video Test', () => {
    beforeEach(() => {
      cy.visit('https://www.youtube.com');
    });
  
    it('Debería buscar y reproducir un video', () => {
      cy.get('input[name="search_query"]').should('be.visible').type('Shakira Loba{enter}');

      cy.get('ytd-video-renderer', { timeout: 10000 })
        .first()
        .within(() => {
          cy.get('a#thumbnail').click();
        });

      cy.get('.html5-video-player').should('have.class', 'playing-mode');
    });
  });
  