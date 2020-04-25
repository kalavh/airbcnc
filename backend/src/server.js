const routes = require ('./routes')
const express = require('express')
const app = express()
const port = 3333
app.use(express.json())

app.use(routes)
app.listen(port)