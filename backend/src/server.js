const routes = require ('./routes')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = 3333

mongoose.connect('mongodb+srv://kalavh:kalavh@cluster0-xetfk.mongodb.net/semana09?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json())

app.use(routes)
app.listen(port)