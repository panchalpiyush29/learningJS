//Arrays are used to store set of values
//score in each subject

let marks = [45, 40, 42, 43, 47];
console.log(marks[2])
marks[2] = 44
console.log(marks[2])
console.log(marks.length)
marks.push(49) // add to the end of the array list
console.log(marks)
marks.pop() // delete last array list
marks.unshift(41) ///add to the beginning of the array
console.log(marks)
console.log(marks.includes(120))
let sum = 0
for (let i = 0; i < marks.length; i++) {
    console.log("marks = " + marks[i])
    sum = sum + marks[i]
}
console.log("Total marks = " + sum)