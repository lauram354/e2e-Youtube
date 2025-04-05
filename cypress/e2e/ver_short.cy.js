describe('YouTube Search Short Test', () => {
  beforeEach(() => {
    cy.visit('https://youtube.com');
  });

  it('Buscar un short y reproducir', () => {

    cy.get('input[name="search_query"]')
      .type('Maluma Shorts{enter}');

    cy.get('ytd-reel-shelf-renderer')
      .find('ytm-shorts-lockup-view-model-v2')
      .first()
      .click();
  });
});
