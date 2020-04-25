const express = require('express')
const multer = require('multer')
const routes = express.Router()

const SessionController = require('./controllers/SessionControler')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')

const uploadConfig = require('./config/upload')

const upload = multer(uploadConfig)


routes.post("/user", SessionController.store)

routes.get("/spots", SpotController.index);
routes.post("/spots", upload.single('thumbnail') , SpotController.store)

routes.get('/dash', DashboardController.show)

routes.post('/spots/:id/bookings', BookingController.Store)

module.exports = routes;