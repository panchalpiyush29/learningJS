//Object in javascript is a collection of properties
//properties are key value pairs

let person = {
    firstName: 'Piyush',
    lastName: 'Panchal',
    city: ' Auckland',

    fullName: () => {
        return this.firstName + ' ' + this.lastName;
    }
}

console.log(person.firstName);
person.firstName = 'John';
console.log(person['lastName']);
console.log(person.fullName());
person.gender = 'M';
delete person.city;
console.log('gender' in person);

for (let key in person) {
    console.log(key + ' : ' + person[key]);
}
