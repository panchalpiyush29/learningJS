let score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenScore = [];

for (let i = 0; i < score.length; i++) {
    if (score[i] % 2 === 0) {
        //console.log(score[i]);
        evenScore.push(score[i]);
    }
}

console.log('even array : ' + evenScore);

let oddScore = score.filter((score) => score % 2 !== 0);
console.log('Odd array : ' + oddScore);

//use filter to iterate over an array and print only the even numbers.

//now multiply the odd number by 3

multiplyScore = oddScore.map((score) => score * 3);
console.log('odd array multiplied by 3 : ' + multiplyScore);
