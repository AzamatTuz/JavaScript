class Animal {
    constructor(name, mass, sound) {
        this.name = name,
        this.mass = mass,
        this.sound = sound
    }
    show() {
        return { name: this.name, mass: this.mass, sound: this.sound }
    }
}

module.exports = {Animal}