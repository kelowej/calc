

const calculator = (function (){
function getNumberFromUser() {
    let input = prompt('Please, enter a number')
    let number = Number(input)
    if (isNaN(number)) {
        alert('It is not a number, please try again.')
        return getNumberFromUser()
    } else {
        return number
    }
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
function getConfirmationFromUser() {
    return confirm('Would you like to continue?')
}
function getConfirmationFromUserAndProceed(result) {
    const confirmation = getConfirmationFromUser()
    if (confirmation) {
        mainLoop(result)
    } else {
        showResult(result)
    }
}
function calculate(operator, a, b) {
    switch (operator) {
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            return a / b
    }
}

function mainLoop(result) {
    const operator = getOperatorFromUser()
    const number = getNumberFromUser()

    const newResult = calculate(operator, result, number)


    getConfirmationFromUserAndProceed(newResult)



}

function start() {
    const result = getNumberFromUser()
    getConfirmationFromUserAndProceed(result)
}

return start

})()