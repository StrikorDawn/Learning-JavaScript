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
const subtract = function (number1, number2)
{
    return number1 - number2;
}
const subtractNumbers = function()
{
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtract1, subtract2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () =>
{
    let num1 = Number(document.querySelector('#factor1').value);
    let num2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(num1, num2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (dividend, divisor) => dividend / divisor;

function divideNumbers ()
{
    let num1 = Number(document.querySelector('#dividend').value);
    let num2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(num1, num2);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
const getTotal = function()
{
    let subtotal = Number(document.querySelector('#subtotal').value);
    if (document.getElementById("member").checked) {    
        subtotal *= .85
    }
document.querySelector("#total").textContent = `$ ${subtotal.toFixed(2)}`;
}
document.querySelector('#getTotal').addEventListener('click', getTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').textContent = numbersArray;
/* Output Odds Only Array */
document.querySelector('#odds').textContent = numbersArray.filter(num => num % 2);
/* Output Evens Only Array */
document.querySelector('#evens').textContent = numbersArray.filter(num => num % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').textContent = numbersArray.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').textContent = numbersArray.reduce((sum, numbers = map(number => number * 2)) => sum + numbers);
