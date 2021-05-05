// Your code here

function saturdayFun(activity="roller-skate") {
    let act = `This Saturday, I want to ${activity}!`
    return act
}

const mondayWork = function(activity="go to the office") {
    let result = `This Monday, I will ${activity}.`
    return result
}

// (function(baseNumber) {
//     return baseNumber + 3
// })
// (2);

function wrapAdjective (flair="*") {
    function innerFunc(par="special") {
        let rockOn = `You are ${flair}${par}${flair}!`
        return rockOn
    }
    return innerFunc
}

var encouraging = wrapAdjective()

let Calculator = {}

Calculator.add = function(){
    let math = 1+3
    return math
}

Calculator.subtract = function(){
    let math = 1-3
    return math
}

Calculator.multiply = function() {
    let math = 1 * 3 
    return math
}

Calculator.divide = function() {
    let math = 10 / 5
    return math
}

// Defines a function called actionApplyer
// 1) exists
// receives two arguments: a starting integer and an array of functions
//   2) returns the given starting point, unchanged, when the array is empty
//   3) Given 13, returns 4 after being acted on by several functions


function actionApplyer(int, arrOfFuncs) {
    if (arrOfFuncs.length === 0) {
        return int
    }
}