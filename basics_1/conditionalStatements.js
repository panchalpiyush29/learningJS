let x = 100;
let y = 15;

if (x >= y) {
    console.log(`${x} is greater than ${y}`);
} else {
    console.log(`${x} is less than ${y}`);
}

let z = -1

if (z > 0) {
    console.log('z is a positive number');
} else if (z < 0) {
    console.log('z is a negative number');
} else {
    console.log('z is zero')
}

//nested conditional statement

let num = 10

if (num >= 0) {
    if (num === 0) {
        console.log('Number is zero')
    } else {
        console.log('Number is positive')
    }
} else {
    console.log('Number is negative')
}