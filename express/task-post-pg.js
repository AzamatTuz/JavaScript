const express = require('express')
const app = express()
const pool = require('./db')
app.use(express.json())

app.listen(3000,() => {
  console.log("server is running");
})


app.post('/addcar', async (req, res) => {
    const {brand, model, price, year} = req.body
    try {
        const result = await pool.query('INSERT INTO cars(brand, model, price, year) VALUES($1, $2, $3, $4)', [brand, model, price, year])
        res.status(201).send({message:"car succesfull"})
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
        
    }
})

app.get('/cars', async (req, res) => {
    try {
        const result = await pool.query("SELECT * from cars")
        res.send(result.rows)
    } catch (error) {
        console.error(error);
        res.status(500).send('Asubek')
    }
})

app.get('/cars/:id', async (req, res) => {
    try {
        const { id } = req.params
        const result = await pool.query(`SELECT * from cars where id = ${id}`)
        res.send(result.rows)
    } catch (error) {
        console.error(error);
        res.status(500).send('Asubek')
    }
})