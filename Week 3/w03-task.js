/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2)
{
    return number1 + number2;
}
function addNumbers()
{
    let num1 = Number(document.getElementById('add1').value);
    let num2 = Number(document.getElementById('add2').value);
    const sum = add(num1, num2);
    document.getElementById('sum').value = sum;
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2)
{
    return number1 - number2;
}
function subtractNumbers ()
{
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtract1, subtract2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
function multiply (factor1, factor2)
{
    return factor1 * factor2;
}
function multiplyNumbers ()
{
    let num1 = Number(document.querySelector('#factor1').value);
    let num2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(num1, num2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide (dividend, divisor)
{
    return dividend / divisor;
}
function divideNumbers ()
{
    let num1 = Number(document.querySelector('#dividend').value);
    let num2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(num1, num2);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
