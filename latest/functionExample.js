function add(x, y) {
    return x + y;
}

let total = add(15, 75);
console.log('Total : ' + total);

//anonymous function can be declared and assigned to a variable
let minus = (a, b) => a - b;
let plus = (x, y) => x + y;

console.log('Total : ' + minus(10, 5));
console.log('Total : ' + plus(10, 50));
