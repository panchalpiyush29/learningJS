//class is a blueprint for object
//when you create a class its dynamic which can be used to create n number of objects
class Person {

    age = 39 //property
    get location() { //getter is a property
        return "Auckland"
    }

    //constructor is a method which gets executed by default
    // when you create an object of the class
    constructor(firstName, lastName) {
        this.firstName = firstName //instance variable
        this.lastName = lastName
    }

    fullName() {
        console.log("Name: " + this.firstName + " " + this.lastName)
    }
}

let person = new Person('John', 'Cena')
let person1 = new Person('Piyush', 'Panchal')
person.fullName()
console.log("Age: " + person.age)
console.log("Location: " + person.location)
person1.fullName()