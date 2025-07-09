const express = require('express')
const app = express();
app.use(express.json())

app.listen(3000, () => {
    console.log("server is running");
})

const users = []

app.get('/', (req, res) => {



    res.json(users)



})

app.post('/', (req, res) => {
    const { name, email } = req.body

    users.push({ id: users.length + 1, name, email })

    res.json(users)
})

app.get('/user/search', (req, res) => {
    const { name } = req.query
    if (name) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].name == name) {
                res.send(users[i])
            }
        }
    } else {
        res.send("404 not found")
    }
})



app.put('/update/:id', (req, res) => {
    const { id } = req.params
    const { email } = req.body

    let index = users.findIndex(item => item.id === parseInt(id))
    
    users[index].email = email
})

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params.id

    const index = users.findIndex(item => item.id === parseInt(id))

    users.splice(index, 1)

})

app.get('/user/:id', (req, res) => {
    const { id } = req.params

    const index = users.findIndex(item => item.id === parseInt(id))

    res.send(users[index])
})