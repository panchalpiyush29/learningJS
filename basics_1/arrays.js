// array is a special variable which can hold more than 1 value
let fruits = ["apple", "mango", "banana"];

console.log(fruits[1]);

fruits.push("cherries")

console.log(fruits[3]);

fruits.pop()

for (let i = 0; i < fruits.length; i++) {
    console.log(`I love ${fruits[i]}`)
}