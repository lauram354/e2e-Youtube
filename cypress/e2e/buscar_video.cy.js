describe('Youtube Seacrh Video Test', () => {
    beforeEach(() => {
      cy.visit('https://youtube.com');
    });
  
    it('Buscar video', () => {
        cy.get('form').within(() => {
            cy.get('input[name="search_query"]').type(`Shakira{enter}`)
        })
        cy.get('ytd-video-renderer').first().find('#video-title').should('contain.text', 'Shakira');
    });
  });
  