// A JavaScript function is a block of code designed to perform a particular task.
// function is executed when "something" invokes it (calls it).

function add(x, y) {
    return x + y
}

let sum = add(5, 6)
console.log(sum)

let sumOfIntegers = function (a, b) {
    return a + b
}
console.log(sumOfIntegers(5, 9))

/*
The "=>" symbol, also known as the equals greater than symbol or hashrocket, is a shorthand notation
for defining functions in JavaScript. It is used to create a new type of function called
an arrow function. Arrow functions have a simpler and more concise syntax than traditional function
expressions.*/

let sumOfNumbers = (c, d) => c + d
console.log(sumOfNumbers(5, 8))
