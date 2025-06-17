const express = require('express')
const app = express();


app.get('/',(req,res)=>{
  res.send("Сәлем, бұл Express сервер!");
})

app.get('/about', (reg, res) => {
    res.send('Бұл сервер Node.js арқылы жасалған')
})

const obj = {
    name: 'Azamat',
    age: 16,
    email: 'azamat@gmail.com'
}

app.get('/api/user', (reg, res) => {
    res.send(obj)
})

app.get('/dos/user', (req,res) => {
    res.send('404 Not Found')
})

app.listen(3000,() => {
  console.log("server is running");
})