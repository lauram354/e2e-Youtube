describe('Youtube Play Video Test', () => {
    beforeEach(() => {
      cy.visit('https://youtube.com');
    });

    it('Reproducir video', () => {
        cy.get('form').within(() => {
            cy.get('input[name="search_query"]').type(`Shakira Loba{enter}`)
        })
        cy.get('ytd-thumbnail').click()
    });
  });
  