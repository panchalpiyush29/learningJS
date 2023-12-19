const computer = require('./computers')

class Laptop extends computer {

    constructor(name, screenSize, processingSpeed) {
        super(name, screenSize, processingSpeed);
    }

    get mouseDetails() {//overriding parent method
        return 'touch pad'
    }
}

let laptop = new Laptop('macBook Pro', '16"', 'M1')
laptop.printMe();
