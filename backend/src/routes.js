const express = require('express')
const multer = require('multer')
const routes = express.Router()

const SessionController = require('./controllers/SessionControler')
const SpotController = require('./controllers/SpotController')
const uploadConfig = require('./config/upload')

const upload = multer(uploadConfig)


routes.post("/user", SessionController.store)
routes.post("/spot", upload.single('thumbnail') , SpotController.store)

module.exports = routes;