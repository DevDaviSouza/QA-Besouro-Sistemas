describe('Login inválido', () => {
 beforeEach(() => {
   cy.visit('/login');
 });

 context('Quando as credenciais são inválidas', () => {
  it('Deve exibir mensagem de erro para email incorreto', () => {
    cy.get('#identifier-field').type('usuario@exemplo.com');
    cy.get('.cl-formButtonPrimary').click();
    cy.contains('Não foi possível encontrar o usuário').should('be.visible');
  });

  it('Deve exibir mensagem de erro para senha incorreta', () => {
    cy.get('#identifier-field').type('davii.clink@gmail.com');
    cy.get('.cl-formButtonPrimary').click();
    cy.get('#password-field').type('10230aaaaaaaaa');
    cy.get('.cl-formButtonPrimary').click();
    cy.contains('Senha incorreta').should('be.visible');
  });
});
});