let marks = [20, 35, 40, 55, 60, 75]

console.log(marks[2]);
marks[3] = 50;
console.log(marks.length);
marks.push(80); //adds to the end of the array
marks.pop(); //removes from the end of the array
marks.unshift(10); //adds to the start of the array
console.log(marks.indexOf(20)); //returns the index of the element
console.log(marks.includes(50));
console.log(marks);

let subMarks = marks.slice(2, 5)
console.log(subMarks);

for (i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}
