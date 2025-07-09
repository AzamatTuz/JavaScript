const express = require('express')
const app = express();
app.use(express.json())
let cars = [
    { id: 1, model: 'Toyota Camry', owner: 'Айбек' },
    { id: 2, model: 'Hyundai Sonata', owner: 'Аружан' },
    { id: 3, model: 'Kia Sportage', owner: 'Нұржан' }
];
let cars1 = []
let inOwner =[]

app.listen(3000, () => {
    console.log("server is running");
})

app.get('/cars', (req, res) => {
    const { model } = req.query
    const { owner } = req.query
    const { sort } = req.query

    if (model) {

        for (let i = 0; i < cars.length; i++) {
            if (cars[i].model.toLowerCase().includes(model.toLowerCase())) {

                cars1.push(cars[i])

            }

        }

        if (sort) {

            if (sort == 'asc') {
                cars1.sort((a, b) => a.id - b.id)
            }

        }

        res.send(cars1)

    } else if (owner) {
        for (let i = 0; i < cars.length; i++) {
            if (cars[i].owner == 'Айбек') {
                inOwner.push(cars[i])
                
            }
        }
        res.send(inOwner)
    } else {
        res.send(cars)
    }



})

app.post('/cars', (req, res) => {
    const { model, owner } = req.body
    if (model == '' && owner == '') {
        res.send('400 Bad Request')
    } else {
        cars.push({ id: cars.length + 1, model: model, owner, owner })
        res.send('201 Created')
    }
})



app.get('/cars/:id', (req, res) => {
    const { id } = req.params
    if (id > cars.length || id <= 0) {
        res.send('404 Not Found')
    } else {
        res.send(cars[id - 1])
    }
})

