// var declarations are globally scoped or function scoped
// while let and const are block scoped.
// var variables can be updated (reinitialize) and re-declared within its scope;
// let variables can be updated (reinitialize) but not re-declared;
//const variables can neither be updated(reinitialize) nor re-declared.
var greetings = "Morning";

if (1 === 1) {
    var greetings = "Evening"
}

function greet() {
    var greetings = "Night"
}

console.log(greetings);

let salutation = "Mr"

if (2 === 2) {
    let salutation = "Mrs"
}

function salute() {
    let salutation = "Miss"
}

console.log(salutation);

const message = "Hello";

if (3 === 3) {
    const message = "Hi"
}

function msg() {
    const message = "Hey"
}

console.log(message);
