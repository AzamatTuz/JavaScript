const express = require('express')
const app = express();
app.use(express.json())

app.listen(3000,() => {
  console.log("server is running");
})

let foods = []

app.post('/food', (req, res) => {
    const {name, price} = req.body
    if (name != "" && price != "") {
        foods.push({name, price})
        res.send('Pushed')
    } else {
        res.send('Kate')
    }
})

app.get('/food', (req, res) => {
    const {name} = req.query
    if (name) {
        for(let i = 0; i < foods.length; i++) {
            if (foods[i].name == name) {
                res.send(foods[i])
                return
            }
        }
    } else {
        res.json(foods)
    }
})

app.get('/food/:id', (req, res) => {
    const {id} = req.params
    if (id > foods.length) {
        res.send('Kate 404')
    } else {
        res.send(foods[id-1])
    }
})