const express = require('express')
const SessionController = require('./controlers/SessionControler')
const routes = express.Router();

routes.post("/sessions", SessionController.store )

module.exports = routes;