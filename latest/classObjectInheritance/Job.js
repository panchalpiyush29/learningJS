const Person = require('./Person');

class Job extends Person {

    //location is a getter property in parent class
    //we can override it in child class
    get location() {
        return 'Australia';
    }

    //when we inherit from parent class, we need to
    //call parent class constructor first
    constructor(firstName, lastName, gender, salary, jobTitle) {
        super(firstName, lastName, gender);
        this.salary = salary;
        this.jobTitle = jobTitle;
    }


}

let job = new Job("Piyush", "Panchal", "Male", 200000, "Software Developer");
console.log(job.fullName());
console.log(job.location);
console.log(job.salary);
console.log(job.jobTitle);
