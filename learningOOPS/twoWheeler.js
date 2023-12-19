const Vehicle = require('./Vehicle')
let twoWheeler =
    {
        numberOfSeats: 2
    }

let bike = new Vehicle('honda', '200cc', '2', 'blue')

console.log(bike.printVehicleDetails())
//console.log('Total number of Seats : ', twoWheeler.numberOfSeats)