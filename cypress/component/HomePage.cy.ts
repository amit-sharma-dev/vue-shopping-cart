import HomePage from "../../src/views/HomePage.vue";

describe('HomePage.cy.ts', () => {
  // it('playground', () => {
  //   // cy.mount()
  //   cy.visit('http://localhost:5173/#/')
  // })

  it("HomePage vue component test", () => {
    cy.mount(HomePage);
    cy.get("div.products").should("text").should("eq", "Dolce Shine Eau de");
    });
})