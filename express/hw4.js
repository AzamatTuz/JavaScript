const express = require('express')
const app = express()
const pool = require('./db')
app.use(express.json())

app.get('/books', async (req, res) => {
    try {
        const result = await pool.query("SELECT * from books")
        res.send(result.rows)
    } catch (error) {
        console.error(error);
        res.status(500).send('Error')
    }
})

app.get('/books/:id', async (req, res) => {
    try {
        const { id } = req.params
        const result = await pool.query(`SELECT * from books where id = ${id}`)
        res.send(result.rows)
    } catch (error) {
        console.error(error);
        res.status(500).send('Error')
    }
})



app.listen(3000, ()=> {
    console.log('start');
    
})