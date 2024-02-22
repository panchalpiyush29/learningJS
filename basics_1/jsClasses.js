class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    carAge() {
        const currentYear = new Date();
        return currentYear.getFullYear() - this.year;
    }
}

const myCar = new Car("Honda", "2022");
console.log("My car is " + myCar.carAge() + " years old");