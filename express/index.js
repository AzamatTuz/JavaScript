const express = require('express')
const app = express();
// const Animal = require('./Class.js').Animal                                                                                 

// app.get('/',(req,res)=>{
//   res.send("Сәлем, бұл Express сервер!");
// })

// app.get('/about', (reg, res) => {
//     res.send('Бұл сервер Node.js арқылы жасалған')
// })

// const obj = {
//     name: 'Azamat',
//     age: 16,
//     email: 'azamat@gmail.com'
// }

// app.get('/api/user', (reg, res) => {
//     res.send(obj)
// })

// app.get('/dos/user', (req,res) => {
//     res.send('404 Not Found')
// })

app.listen(3000,() => {
  console.log("server is running");
})




// const dog = new Animal('Dog', 32, 'Gav gav')
// const cat = new Animal('Cat', 15, 'Myau myau')
// const horse = new Animal('Horse', 85, 'Igogo')
// const animals = [dog.show(), cat.show(), horse.show()]
// let finded = null

// function find() {
//     animals.forEach((animal) => {
//         if (finded) {
//             if (animal.mass > finded.mass) {
//                 finded = animal
//             }
//         } else {
//             finded = animal
//         }
//     })
// }

// find()

// app.get('/dog',(req, res) => {
//     res.send(dog.show())
// })

// app.get('/cat',(req, res) => {
//     res.send(cat.show())
// })
// app.get('/horse',(req, res) => {
//     res.send(horse.show())
// })

// app.get('/homework',(req, res) => {
//     res.send(finded)
// })

app.get('/',(req, res) => {
    res.send('Қош келдіңіз! (Welcome message)')
})

app.get('/about',(req, res) => {
    res.send('Бұл сервер туралы қысқаша ақпарат')
})

app.get('/api/info',(req, res) => {
    res.send({ developer: 'Dr.404', subject: 'Express'})
})