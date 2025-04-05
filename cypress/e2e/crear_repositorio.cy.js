describe('GitHub Repositorio Test', () => {
  beforeEach(() => {
    // Asumiendo que ya estás logueado y la sesión está activa
    cy.visit('https://github.com/new');
  });

  it('Should log in to GitHub', () => {
    cy.get('input#login_field').type('usuario');
    cy.get('input#password').type('contrasenia', { log: false }); // { log: false } oculta el password en el log
    cy.get('input[name="commit"]').click();

    // Esperar redirección y verificar que el login fue exitoso (por ejemplo, revisando si aparece el avatar de usuario)
    cy.url().should('include', '/dashboard');
    cy.get('summary[aria-label="View profile and more"]').should('be.visible');
  });

  it('Should create a new repository', () => {
    const repoName = "prueba";
  
    // Escribe el nombre del repositorio usando clase
    cy.get('fieldset').within(() => {
      cy.get('input.prc-components-Input-Ic-y8').type(repoName);
    });
  
    // Espera a que el nombre sea validado
    cy.get('.success').should('be.visible');
  
    // Desmarcar la opción para iniciar con README si está marcada
    cy.get('#repository_auto_init').then(($checkbox) => {
      if ($checkbox.is(':checked')) {
        cy.wrap($checkbox).uncheck({ force: true });
      }
    });
  
    // Click en el botón para crear el repo
    cy.get('button[type="submit"]').contains('Create repository').click();
  
    // Verifica que el repo fue creado (opcional)
    // cy.url().should('include', `/tu_usuario/${repoName}`);
  });
  
});
