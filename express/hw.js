const express = require('express')
const app = express();
app.use(express.json())

app.listen(3000,() => {
  console.log("server is running");
})

app.post('/students', (req, res) => {
    const {name, age} = req.body
    if (!name && !age) {
      res.send('Not null')
    } else {
      res.send('Student recived')
    }
})