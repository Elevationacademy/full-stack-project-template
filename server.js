const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const api = require('./server/routes/activitiesApi')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


app.use('/activities', api)

const DBManager = require('./server/DBManager');
DBManager.connectToDB()

const port = 3000

app.listen(port, function() {
    console.log(`Runnin runnin and runnin runnin on port ${port}`)
})
