//object is collection of properties
// when you create an object in JS its properties are restricted
let person = { //object person
    firstName: 'John', //properties of the object
    lastName: 'Cena',
    fullName: function () {
        console.log(this.firstName + " " + this.lastName)
    },
    age: 39,
    address: '10 takapu street'
}
console.log(person.firstName)
console.log(person["lastName"])

person.gender = 'male'
console.log(person)

delete person.gender
console.log(person)

console.log('gender' in person)

//print values of javascript object
for (let key in person) {
    console.log(person[key])
}

person.fullName();