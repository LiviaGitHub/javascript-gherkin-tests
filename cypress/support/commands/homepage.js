export const fieldEnterAInteger = (value) => {
    cy.get('#number').type(value);
};

export const clickGetFactorialButton = () => {
    cy.get('#getFactorial').click();
};

export const result = (result) => {
    cy.get('#resultDiv').contains(result);
};

