let expenses = [12, 23, 34, 45, 56, 67];
let total = expenses.reduce((sum, expenses) => sum + expenses, 0);

console.log(total)
let min = Math.min(...expenses);
let max = Math.max(...expenses);
console.log(min);
console.log(max);
