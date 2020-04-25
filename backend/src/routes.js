const express = require('express')
const multer = require('multer')
const routes = express.Router()

const SessionController = require('./controllers/SessionControler')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')

const uploadConfig = require('./config/upload')

const upload = multer(uploadConfig)


routes.post("/user", SessionController.store)

routes.get("/spots", SpotController.index);
routes.post("/spots", upload.single('thumbnail') , SpotController.store)

routes.get('/dash', DashboardController.show)

module.exports = routes;