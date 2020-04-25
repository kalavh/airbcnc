const express = require('express')

const routes = express.Router()

routes.post("/", (req, res) => {
    return res.json({message : "teste"})
})

module.exports = routes;