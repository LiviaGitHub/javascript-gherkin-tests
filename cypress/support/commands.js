import {
    fieldEnterAInteger,
    clickGetFactorialButton,
    result,
} from './commands/homepage';

Cypress.Commands.add('fieldEnterAInteger', fieldEnterAInteger);
Cypress.Commands.add('clickGetFactorialButton', clickGetFactorialButton);
Cypress.Commands.add('result', result);