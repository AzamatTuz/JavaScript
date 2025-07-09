const express = require('express')
const app = express();
app.use(express.json())

app.listen(3000, () => {
    console.log("server is running");
})

const cars = []

app.get('/', (req, res) => {



    res.json(cars)



})

app.post('/', (req, res) => {
    const { brand, model, year, color, price } = req.body

    users.push({ id: users.length + 1, brand: brand, model: model, year: year, color: color, price })

    res.json(users)
})

app.get('/user/search', (req, res) => {
    const { brand } = req.query
    if (brand) {
        for (let i = 0; i < brand.length; i++) {
            if (brand[i].brand == brand) {
                res.send(brand[i])
                return
            }
        }
    } else {
        res.send("404 not found")
    }
})



app.put('/update/:id', (req, res) => {
    const { id } = req.params
    const { brand } = req.body

    let index = cars.findIndex(item => item.id === parseInt(id))
    
    cars[index].brand = brand

    res.json(cars[index])
})

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params.id

    const index = cars.findIndex(item => item.id === parseInt(id))

    cars.splice(index, 1)

})

let car = null

app.get('/car/:id', (req, res) => {
    const { id } = req.params

    const index = cars.findIndex(item => item.id === parseInt(id))

    car = cars[index]

    res.send(car)
})