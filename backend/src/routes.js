const express = require('express')
const routes = express.Router()
const SessionController = require('./controllers/SessionControler')
const SpotController = require('./controllers/SpotController')

routes.post("/user", SessionController.store)
routes.post("/spot",SpotController.store)

module.exports = routes;