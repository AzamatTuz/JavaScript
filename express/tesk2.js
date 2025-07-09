const express = require('express')
const app = express()
const pool = require('./db')
app.use(express.json())

app.listen(3000,() => {
  console.log("server is running");
})


app.post('/addrest', async (req, res) => {
    const {name, address, rating} = req.body

    try {
        const result = await pool.query('INSERT INTO restaurants(name, address, rating) VALUES($1, $2, $3)', [name, address, rating])
        res.send('Успешно!!!')
    } catch (error) {
        console.error(error);
        res.status(500).send("Error 500")
        
    }
})

app.get('/rest', async ( req, res) => {
    try {
        const result = await pool.query('SELECT * FROM restaurants')
        res.json(result.rows)
    } catch (error) {
        console.error(error);
        res.status(500).send("Error 500")
        
    }
})

app.get('/rest/:id', async (req, res) => {
    const {id} = req.params

    try {
        const result = await pool.query(`SELECT * FROM restaurants WHERE id = ${id}`)
        res.json(result.rows)
    } catch (error) {
        console.error(error);
        res.status(500).send("Error 500")
        
    }
})

app.put('/rest/update/:id', async (req, res) => {
    const {id} = req.params
    const {name, address, rating} = req.body

    try {
        const result = await pool.query(`UPDATE restaurants SET name=$1, address=$2, rating=$3 WHERE id = $4`, [name, address, rating, id])
        res.json('Успешно!!!')
    } catch (error) {
        console.error(error);
        res.status(500).send("Error 500")
        
    }
})

app.delete('/rest/delete/:id', async (req, res) => {
    const {id} = req.params

    try {
        const result = await pool.query('DELETE FROM restaurants WHERE id = $1', [id])
        res.json('Успешно!!!')
    } catch (error) {
        console.error(error);
        res.status(500).send("Error 500")
        
    }
})