describe('factorial calculator tests', () => {
  it('calculate the factorial of 99', () => {
    cy.fieldEnterAInteger('99');
    cy.clickGetFactorialButton();
    cy.result('The factorial of 99 is: 9.332621544394415e+155');
  })

  it('check string as value', () => {
    cy.fieldEnterAInteger('test');
    cy.clickGetFactorialButton();
    cy.result('Please enter an integer');
  })

  it('check special characters as value', () => {
    cy.fieldEnterAInteger('@#@$%%');
    cy.clickGetFactorialButton();
    cy.result('Please enter an integer');
  })

  it('calculate values between 1 and 9', () => {
    cy.fieldEnterAInteger(1);
    cy.clickGetFactorialButton();
    cy.result('The factorial of 1 is: 1');
  })
});