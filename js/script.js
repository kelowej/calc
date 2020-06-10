'use strict'

function getNumberFromUser(){
    let input = prompt('Please, enter a number')
    let number = Number(input)
    if (isNaN(number)){
        getNumberFromUser()
    }
    return number
}
function showResult(result){}
function getOperatorFromUser(){}
function getConfirmationFromUser(){}
function getConfirmationFromUserAndProceed(){}
function calculate(){}


const number = getNumberFromUser()
