const express = require('express')
const app = express()
const pool = require('./db')
app.use(express.json())

app.get('/', async (req, res) => {
    try {
        const result = await pool.query("SELECT * from products")
        res.send(result.rows)
    } catch (error) {
        console.error(error);
        res.status(500).send('Asubek')
    }
})

app.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const result = await pool.query(`SELECT * from products where id = ${id}`)
        res.send(result.rows)
    } catch (error) {
        console.error(error);
        res.status(500).send('Asubek')
    }
})



app.listen(3000, ()=> {
    console.log('start');
    
})