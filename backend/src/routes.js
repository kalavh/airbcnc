const express = require('express')

const routes = express.Router();

routes.get("/", (req,res) => {
    res.send("arquivo rotas")
})

module.exports = routes;