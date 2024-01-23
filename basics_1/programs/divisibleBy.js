let divideBy = 5
let count = 12

for (let i = 1; i < count; i++) {

    if (i % divideBy === 0) {
        console.log(`${i} is divisible by ${divideBy}`);
        continue;
    }

    console.log(`${i} is not divisible by ${divideBy}`)
}