//Inheritance is one of the main pillars in OOPs
//one class can inherit/acquire the properties and methods of another class
//the class which inherits is known as subclass/derived class/child class
//the class whose properties are inherited is known as superclass
const Vehicle = require('./Vehicle')

class Aeroplane extends Vehicle {

    constructor(model, engine, wheels, colour) {
        super(model, engine, wheels, colour);
    }

    get year() { //over-ridding parent class method
        return 2024
    }
}

let aeroplane = new Aeroplane('Air Nz', 'v12', '8', 'black')
aeroplane.printVehicleDetails()
