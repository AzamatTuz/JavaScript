export  class Book {
    constructor(title, price, description) {
        this.title = title,
        this.price = price,
        this.description = description
    }
    show() {
        return { title: this.title, price: this.price, description: this.description }
    }
}