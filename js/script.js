'use strict'

function getNumberFromUser(){
    let input = prompt('Please, enter a number')
    let number = Number(input)
    if (isNaN(number)){
        alert('It is not a number, please try again.')
        getNumberFromUser()
    }
    return number
}
function showResult(result) {
    return alert('The result is ' + result)
}
function getOperatorFromUser() {
    const input = prompt('Enter an operator: +, -, *, /')
    switch (input) {
        case '+':
            return input
        case '-':
            return input
        case '*':
            return input
        case '/':
            return input
        default:
            alert('Incorrect operator, please try again.')
            getOperatorFromUser()
    }


}
function getConfirmationFromUser() { }
function getConfirmationFromUserAndProceed() { }
function calculate() { }


const number = getNumberFromUser()
