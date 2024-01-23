const flag = true

if (!flag) {
    console.log("printing if loop")
} else {
    console.log(flag)
    console.log("printing else loop")
}
//in an if-else loop the loop will execute once when the condition matches
//example based on what's displayed on the UI click the particular button
let i = 0
while (i < 10) {
    i++
    console.log(i)
}
//while loop keeps running till the condition specified is not satisfied
//example in test automation you have to click first 10 links and verify the navigation is correct

let x = 2
do {
    console.log(x)
} while (x <= 1);
//do-while loop runs for the first time irrespective of the condition is true or false

/*In summary, while loops and for loops are both used to
repeat a block of code, but they are used in slightly different scenarios.
 A while loop is used when the number of iterations is not known and depends on a condition, while
 a for loop is used when the number of iterations is known.*/
for (let k = 0; k <= 10; k++) {
    console.log(k)
}