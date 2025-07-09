const express = require('express')
const app = express()
const path = require('path');

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))

app.use((req, res) => {
    res.status(404).json({
        status: 404,
        message: "sorry server doesn`t find"
    });
});

app.use('/',(req,res,next) => {
  res.sendFile(path.join(__dirname,'public','index.html'));
});

app.listen(3000, () => {
    console.log("сервер жасап тур");
})

app.post('/test', (req, res) => {
    // const { nameInp, passwordInp } = req.body   

    console.log(req);
    
    
})