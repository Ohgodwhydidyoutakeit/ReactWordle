const express = require('express')
const Router = express.Router();

// logger middleware
const Logger = require('./Logger')
Router.use((req, res, next) => {
    Logger(req.headers.host)
    next()
})

// temp redirect to api 
Router.get('/', (req, res) => {
    res.redirect('/api/v1');
})

Router.get('/api/v1', (req, res) => {
})



module.exports = Router