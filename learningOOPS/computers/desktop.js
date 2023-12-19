const computer = require('./computers')

class Desktop extends computer {

    constructor(name, screenSize, processingSpeed) {
        super(name, screenSize, processingSpeed);
    }

    get mouseDetails() { //overriding parent method
        return 'bluetooth'
    }
}

let desktop = new Desktop('Dell Alienware', '34"', 'i7')
desktop.printMe()