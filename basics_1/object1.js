const car = {
    name: "Honda CRV",
    color: "Black",
    seats: 7,
    modelDetails: function () {
        return this.name + " " + this.color + " " + this.seats;
    }
}

console.log(car.modelDetails());
car.transmission="Automatic"
console.log(car.transmission);