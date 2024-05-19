//javascript class is a blueprint for creating objects
//class is a template for objects
module.exports = class Person {

    //constructor is a method that is called when an instance of a class is created
    //firstName and lastName are instance variables
    //this keyword is used to refer to the current instance of the class
    constructor(firstName, lastName, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
    }

    //method to return full name
    fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    //age is a property of class, it's a class variable
    age = 25

    //location is a getter property
    get location() {
        return 'New Zealand'
    }
}

/*let person = new Person("Piyush", "Panchal");
let person1 = new Person("Kiara", "Panchal");
console.log(person.age);
console.log(person.location);
console.log(person.fullName());
console.log(person1.fullName());*/
