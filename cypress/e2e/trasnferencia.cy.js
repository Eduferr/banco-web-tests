describe("Transferências", () => {
  //Arrange
  beforeEach(() => {
    cy.visit("/");
    cy.fazerLoginComCredenciaisValidas(); //Custom command
  });

  it("Deve Transferir quando informo os dados de valor válido", () => {
    //Act
    cy.realizarTransferencia("Guilherme", "Keila", 11);
    //Assert
    cy.verificarMensagemNoToast("Transferência realizada!"); //Custom command
  });

  it("Deve apresentar erro quando tentar transferir mais que 5k sem o token", () => {
    //Act
    cy.realizarTransferencia("Keila", "Guilherme", 5000.01);
    //Assert
    cy.verificarMensagemNoToast(
      "Autenticação necessária para transferências acima de R$5.000,00.",
    ); //Custom command
  });
});
