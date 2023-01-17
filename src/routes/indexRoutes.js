const express = require('express')
const indexController = require('../controllers/indexController')
const postsRoutes = require('./postsRoutes')
const app = express()

app.get('/', indexController.show)
app.use('/posts', postsRoutes)

app.use('/*', indexController.notFound)

module.exports = app