Feature: As a user, I want to be able to use the factorial calculator.

The Factorial calculator must be available to everyone who accesses the qainterview.pythonanywhere website, 
and the user must be able to do factorial calculations.

  Background:
    Given User is on Factorial calculator home page

    Scenario: check required field
        When user clicks the Calculate button 
        Then an error message appears 'Please enter an integer'

    Scenario: check string as value
        When user fill the field with strings 'Test'
        And user clicks the Calculate button  
        Then an error message appears 'Please enter an integer'

   Scenario: check special characters as value
        When user fill the field with special characters '@#$$$$'
        And user clicks the Calculate button  
        Then an error message appears 'Please enter an integer'

    Scenario: calculate values between 10 and 99
        When user fill the field with '89'
        And user clicks the Calculate button  
        Then an the result appears 'The factorial of 89 is: 1.650795516090846e+136'

    Scenario: calculate values between 1000 and 2000
        When user fill the field with '1000'
        And user clicks the Calculate button  
        Then an the result appears 'The factorial of 1000 is: 4.0238726 E+2567'      

    Scenario: calculate values between 100 and 999
        When user fill the field with '999'
        And user clicks the Calculate button  
        Then an the result appears 'The factorial of 1000 is: 4.0238726 E+2564'       

    Scenario: calculate values between 1 and 9
        When user fill the field with '1'
        And user clicks the Calculate button  
        Then an the result appears 'The factorial of 1 is: 1'        
