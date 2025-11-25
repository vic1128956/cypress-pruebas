describe("Probando la página de Cypress", () => {
  it("Hace clic en el botón type", () => {
    cy.visit("/"); 
    cy.contains("type").click();
    cy.url().should("include", "commands/actions");
  });
});