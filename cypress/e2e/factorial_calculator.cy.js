describe('factorial calculator tests', () => {
  it('calculate the factorial of 99', () => {
    cy.fieldEnterAInteger('99');
    cy.clickGetFactorialButton();
    cy.result('The factorial of 99 is: 9.332621544394415e+155');
  })
});