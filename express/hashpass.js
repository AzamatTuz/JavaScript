const bcrypt = require('bcrypt');
const express = require('express')
const pool = require('./db')
const app = express()
app.use(express.json())

app.post('/register', async (req, res) => {
    const {username, password} = req.body
    const hashedpassword = await bcrypt.hash(password, 10);

    try {
        const result = await pool.query('INSERT INTO users(username, password) VALUES($1, $2)', [username, hashedpassword])
        res.send('kosyldy')
    } catch (error) {
        console.error(error);
        res.send('error')
    }
})

app.get('/user', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users')
        res.json(result.rows)
    } catch (error) {
        console.error(error);
        res.send(error)
    }
})

app.listen(3000, () => {
    console.log("Server is working");
    
})