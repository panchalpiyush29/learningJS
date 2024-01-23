let person = {
    firstName: "John",
    lastName: "Cena",
    age: 25,
    fullName: function () {
        return this.firstName + " " + this.lastName
    }
}

let person2 = new Object();
person2.firstName = "Shawn";
person2.lastName = "Micheals";
person2.age = 26;
person.email = "john.cena@gmail.com";


console.log(person.firstName)
console.log(person2.lastName)
person.age = 27
console.log(person.age)
console.log(person.email)
console.log(person.fullName())