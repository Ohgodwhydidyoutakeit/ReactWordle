const express = require('express')
const Router = express.Router();

//words 
const words = require('./Words.json')
// logger middleware
const Logger = require('./Logger')
Router.use((req, res, next) => {
    Logger(req.headers.host)
    next()
})

// temp redirect to api 
Router.get('/', (req, res) => {
    res.redirect('/api/v1/random');
})


// get all the words
Router.get('/api/v1/all', (req, res) => {
    res.send({
        words
    })
})

// get only one random word
Router.get('/api/v1/random', (req, res) => {
    let index = Math.round(Math.random() * (words.length - 0) + 0)
    let word = words[index]
    res.send({
        word
    })
})

// get n random words (non repeatingF)
Router.get('/api/v1/random/:id', (req, res) => {
    const { id } = req.params
    // we want to have non repeating values here
    let randomWords = []
    let wordsClone = [...words]
    for (let i = 0; i < id; i++) {
        let rand = Math.round(Math.random() * words.length);
        randomWords.push(wordsClone[rand])
        wordsClone.splice(rand, 1)
    }
    res.send({
        randomWords
    })
})


module.exports = Router