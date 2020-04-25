const express = require('express')
const routes = express.Router()
const SessionController = require('./controllers/SessionControler')

routes.post("/", SessionController.store)

module.exports = routes;