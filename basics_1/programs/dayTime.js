let today = new Date();

let day = today.getDay();

let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

console.log("Today is : " + daylist[day] + ".");

let hour = today.getHours();
let minute = today.getMinutes();

let prepand = (hour >= 12) ? " PM " : " AM ";

console.log("Current Time: " + hour + " : " + minute + prepand);
