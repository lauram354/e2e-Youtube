describe('GitHub Login Test', () => {
    beforeEach(() => {
      cy.visit('https://github.com/login');
    });
  
    it('Should log in to GitHub', () => {
      cy.get('input#login_field').type('usuario');
      cy.get('input#password').type('contrasenia', { log: false }); // { log: false } oculta el password en el log
  
      cy.get('input[name="commit"]').click();
  
      // Esperar redirección y verificar que el login fue exitoso (por ejemplo, revisando si aparece el avatar de usuario)
      cy.url().should('include', '/dashboard');
      cy.get('summary[aria-label="View profile and more"]').should('be.visible');
    });
  });
  