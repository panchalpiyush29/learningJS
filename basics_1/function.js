//function declaration
function greeting(name) {
    console.log(`Hello ${name}`)
}

greeting('Piyush');

//function expression
const greet = function greeting(name) {
    console.log(`Hello ${name}`)
}

greet('John')

function add(x, y) {
    return x + y;
}

console.log(add(145, 339))

const sq = x => x * x

console.log(sq(5))