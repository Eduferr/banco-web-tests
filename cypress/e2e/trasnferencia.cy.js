describe("Transferências", () => {
  //Arrange
  beforeEach(() => {
    cy.visit("/");

    cy.fixture("credenciais").then((credenciais) => {
      cy.get("#username").click().type(credenciais.valida.usuario);
      cy.get("#senha").click().type(credenciais.valida.senha);
    });
    cy.contains("button", "Entrar").click();
  });

  it("Deve Transferir quando informo os dados de valor válido", () => {
    cy.get('label[for="conta-origem"]').parent().as("campo-conta-origem");
    cy.get("@campo-conta-origem").click();
    cy.get("@campo-conta-origem")
      .contains("Guilherme Ferreira com saldo de")
      .click();

    cy.get('label[for="conta-destino"]').parent().as("campo-conta-destino");
    cy.get("@campo-conta-destino").click();
    cy.get("@campo-conta-destino")
      .contains("Keila Maria dos Santos com saldo de")
      .click();

    cy.get("#valor").click().type('11');
    cy.contains('button', 'Transferir').click()
    cy.get('.toast').should('have.text', 'Transferência realizada!')
  });
});
