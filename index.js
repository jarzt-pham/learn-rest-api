var express = require('express');
var app  = express();

const PORT = 3000;

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var userRouter = require('./router/user.route')

app.use('/api', userRouter)

app.listen(PORT, () => {
    console.log("Server đang chạy trên 3000")
})