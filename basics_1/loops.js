// Loops can execute a block of code a number of times.
// For-loops are typically used when the number of iterations is known before entering the loop.
for (let i = 1; i < 10; i++) {
    console.log(`${i} is a single digit number`);
}

//A "While" Loop is used to repeat a specific block of code an unknown number of times, until a condition is met.

let x = 1;
while (x < 10) {
    console.log(`${x} is a single digit number`);
    x++;
}

// do-while loop will execute atleast once
// it will execute once and then check the condition, however while checks the condition first and then executes
let a = 1;

do {
    console.log(a);
} while (a < 0)
{
    console.log(a)
}

for (let i = 1; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(`${i} is a single digit number`);
}

for (let i = 1; i < 11; i++) {
    if (i % 5 === 0) {
        console.log(`${i} is divisible by 5`)
        continue;
    }
    console.log(`${i} is not divisible by 5`);
}