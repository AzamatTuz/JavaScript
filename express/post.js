const express = require('express')
const app = express();
app.use(express.json())

app.listen(3000,() => {
  console.log("server is running");
})

const users = []

app.post('/user', (req, res) => {
    const {name, age} = req.body
    users.push({name, age})
    res.send(users)
})

const products = []

app.post('/products', (req, res) => {
    const {name, price} = req.body
    products.push({name, price})
    res.send(products)
})

app.get('/products/:id', (req, res) => {
    const {id} = req.params;

    res.send(products[parseInt(id)-1])
})

app.post('/registration', (req, res) => {
    const {name, password, email} = req.body
    if(!name && !password && !email) {
        res.send('Барлық жолды толтыр')
    } else if (name.length < 3) {
        res.send('Атың 3 символдан жоғары болуы керек!!!')
    } else if (password.length < 6) {
        res.send('Пороль 6 символдан жоғары болуы керек!!!')
    } else if (!email.includes('@')) {
        res.send('Почтада @ символы болуы керек!!!')
    } else {
        res.json({name,password,email})
    }
    
})