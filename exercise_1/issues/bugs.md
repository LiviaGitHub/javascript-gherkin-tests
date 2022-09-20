# Explore the website and the calculator form in your search for the bugs and UX issues. 

## Bugs found
1. From the value 171 to 991 the calculator's answer is always the same: 'The factorial of [number] is: Infinity'
    - Expected result for 171 = [1.24101807 E+309]
2. From the value 992 there is no calculation or any error response.
    - Expected result for 992 = [4.138423983 E+2543]

## UX issues
1. The field [Enter an integer] should only allow input of numeric values [integer].
2. It could have a button to delete the entered values, for example an X button.
3. Once the user enters a wrong value, for example a string, an error message is displayed which is correct, however when deleting the wrong data and filling in a new correct value the error message remains until a new calculation is performed. The error message should disapear as soon as the user deletes the wrong value.