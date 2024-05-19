let marks = [20, 35, 40, 55, 60, 75, 90]
let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}

console.log('Sum of all elements of the array is : ' + sum);


let total = marks.reduce((sum1, mark) => sum1 + mark, 0);

console.log('Sum of all elements of the array is : ' + total);

//use reduce to iterate over an array and accumulate the sum of all elements of the array.
