const indexRoutes = require('./src/routes/indexRoutes')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.static('public'))
app.use(express.json())

app.use('/', indexRoutes)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


