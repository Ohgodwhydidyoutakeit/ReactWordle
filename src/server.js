
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();
const Router = require('./routes/Router')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', Router)

app.listen(process.env.PORT || 7000, () => {
    console.log(`Server runs on  http://localhost:${process.env.PORT || 7000}`)
})