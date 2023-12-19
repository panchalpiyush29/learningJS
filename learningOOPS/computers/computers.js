module.exports = class Computers {
    constructor(name, screenSize, processingSpeed) {
        this.name = name
        this.screenSize = screenSize
        this.processingSpeed = processingSpeed
    }

    get mouseDetails() {
        return 'wired'
    }

    printMe() {
        console.log('Hi I am a --> ' + this.name)
        console.log('my screen size is --> ' + this.screenSize)
        console.log('my processing speed is --> ' + this.processingSpeed)
        console.log('and my mouse is --> ' + this.mouseDetails)
    }
}