//Find odd and even marks and place them accordingly in different arrays
// to find odd or even do a %2 if its equal to 0 its even
let marks = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let evenMarks = []
let oddMarks = []

for (let i = 0; i < marks.length; i++) {
    if (marks[i] % 2 === 0) {
        evenMarks.push(marks[i])
    } else {
        oddMarks.push(marks[i])
    }
}
console.log("Even marks : " + evenMarks)
console.log("Odd marks : " + oddMarks)

//Another way of doing it without writing loops is by using filters
let newEvenMarks = marks.filter(mark=>mark%2===0)
let newOddMarks = marks.filter(mark=>mark%2!==0)
console.log(newEvenMarks)
console.log(newOddMarks)
