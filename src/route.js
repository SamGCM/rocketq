const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req,res) => res.render("index", {page: 'create-pass'}))

route.get('/room-not-exist', (req, res) => res.render("index", {page: 'not-exist'}))
route.get('/room/:room', RoomController.open)
route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/enterroom', RoomController.enter)

route.post('/question/create/:room', QuestionController.create)
route.post('/create-room', RoomController.create)

module.exports = route
