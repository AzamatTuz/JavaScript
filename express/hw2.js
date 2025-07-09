const express = require('express')
const app = express();
app.use(express.json())
const books = []
app.listen(3000,() => {
  console.log("server is running");
})

app.post('/book', (req, res) => {
    const {title, author, year} = req.body
    if (name && author && year) {
        books.push({id: books.length + 1, title: title, author: author, year: year})
    } else {
        res.send('Error 404')
    }
})  

app.get('/book', (req, res) => {
    const {title} = req.query
    if (title) {
        for(let i = 0; i < books.length; i++) {
            if (books[i].title == title) {
                res.send(books[i])
                return
            } 
        }
    } else {
        res.json(books)
    }
})

app.get('/book/filter', (req, res) => {
    const {year} = req.query
    if (year) {
        books.filter(book => book.year > year)
        res.json(books)
    } 
})

app.get('/book/:id', (req, res) => {
    const {id} = req.params
    let book = books.filter(book => book.id = id)
    res.send(book)
})