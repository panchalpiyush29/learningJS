//Arithmetic operator
let a = 10;
let b = 5;

let sum = a + b;
console.log(sum);

let difference = a - b;
console.log(difference);

let multiplication = a * b;
console.log(multiplication);

let quotient = a / b;
console.log(quotient);

let reminder = a % b;
console.log(reminder);

let power = a ** b;
console.log(power);

//assignment operators
let c = 10;

let cc = c += 5;

console.log(cc);

// comparison operator

let d = 5
let e = '5'

console.log(d == e);
console.log(d === e);
console.log(d !== e);
console.log(d > e);
console.log(d < e);

//logical operators

let f = true;
let g = false;

let result1 = f && g;
let result2 = f || g;
let result3 = f !== g;

console.log(result1);
console.log(result2);
console.log(result3);

//Unary operators
let h = 10;
h++;
console.log(h);
h--;
console.log(h);

//Ternary/Conditional operator
let age = 17;
let status = age >= 18 ? 'Adult' : 'Minor';
console.log(status);

//Bitwise operator performs comparison at binary level
let i = 5; //0101
let j = 3; //0011

let resultAnd = i & j;
let resultOr = i | j;

console.log(resultAnd);
console.log(resultOr)