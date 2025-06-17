class User {
    constructor(name, age, email) {
        this.name = name,
        this.age = age,
        this.email = email
    }
    show(){
        return console.log(this.name, this.age, this.email)
    }
}   

const aza = new User('Aza',16,'azamat@gmail')

const maks = new User('Maks',19,'maks@gmail')


aza.show()