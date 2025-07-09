const express = require('express')
const app = express()
const pool = require('./db')
app.use(express.json())

app.listen(3000,() => {
  console.log("server is running");
})


app.post('/addfood', async (req, res) => {
    const {name, price, address} = req.body
    try {
        const result = await pool.query('INSERT INTO foods(name, price, address) VALUES($1, $2, $3)', [name, price, address])
        res.status(201).send({message:"Food succesfull added"})
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
        
    }
})

app.get('/foods', async (req, res) => {
    try {
        const result = await pool.query("SELECT * from foods")
        res.send(result.rows)
    } catch (error) {
        console.error(error);
        res.status(500).send('Error')
    }
})

app.get('/food/:id', async (req, res) => {
    try {
        const { id } = req.params
        const result = await pool.query(`SELECT * from foods where id = ${id}`)
        res.send(result.rows)
    } catch (error) {
        console.error(error);
        res.status(500).send('Error')
    }
})