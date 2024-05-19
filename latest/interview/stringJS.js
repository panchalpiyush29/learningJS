let day = 'Sunday';
console.log(day.length)
let subDay = day.slice(3, 6);
console.log(subDay);
console.log(day[1]);
let splitDay = day.split("n");
console.log(splitDay[0]);
console.log(splitDay[1]);


// you get a date in string format how will you subtract it

let date = '27'
let nextDate = '29'
let diff = parseInt(nextDate) - parseInt(date);
console.log(diff);

let a = 'good';
let b = 'morning';

let c = a.concat(' ', b);
console.log(c);
