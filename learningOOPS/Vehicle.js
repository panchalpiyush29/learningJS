module.exports = class Vehicle {
    constructor(model, engine, wheels, colour) {
        this.model = model
        this.engine = engine
        this.wheels = wheels
        this.colour = colour
    }

    get year() {
        return 2023
    }

    printVehicleDetails() {
        console.log('Vehicle Name : ', this.model)
        console.log('Engine Type : ', this.engine)
        console.log('Num of wheels : ', this.wheels)
        console.log('Car colour : ', this.colour)
        console.log('Year of manufacturing : ', this.year)
    }
}