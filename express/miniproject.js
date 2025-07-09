const express = require('express')
const app = express();
app.use(express.json())
const inMemory = []

app.listen(3000,() => {
  console.log("server is running");
})



app.get('/students', (req, res) => {
    res.send(inMemory)
})

app.post('/students', (req, res) => {
    const {id, name, grade, age} = req.body
    inMemory.push({id: id, name: name, grade: grade, age: age})
    res.send(inMemory)
})

app.get('/students/:id', (req, res) => {
    const {id} = req.params
    if(!id){
        return res.send("qate")
    }
    res.send(inMemory[id-1])
})

app.delete('/students/:id', (req, res) => {
    const {id} = req.params
    inMemory.splice(id-1, 1);
    res.send(inMemory)
})


app.get('/student',(req,res)=>{
    const {name} = req.query;
    for(let i = 0; i < inMemory.length; i++) {
        if (inMemory[i].name == name) {
            res.send(true)
        }else {
            res.send(false)
        }
    }
})

app.get('/studenti', (req, res) => {
    const {sort} = req.query
    if (sort == 'asc') {
        inMemory.sort((a, b) => a.age - b.age)
        
        
    } else if(sort == 'desc') {
        inMemory.sort((a, b) => b.age - a.age)  
    }
    res.send(inMemory)
    
})

// { "id": 1, "name": "Aruzhan", "grade": "A", "age": 16 }
// { "id": 2, "name": "Dias", "grade": "B", "age": 17 }
// { "id": 3, "name": "Miras", "grade": "A", "age": 15 }

