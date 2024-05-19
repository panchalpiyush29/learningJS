let fruits = ['mango', 'banana', 'apple', 'berries', 'orange', 'strawberry'];
let scores = [90, 50, 7, 80, 60, 85, 95, 45, 75, 55, 1];
console.log(fruits.sort());
console.log(fruits.reverse());
let sortedScores = scores.sort((a, b) => b - a);
console.log(sortedScores);
