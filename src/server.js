const express = require('express')
const app = express()
const route = require('./routes')
const path = require('path')
const middlewareGlobal = require('./middlewares/middleware')

app.use(route)
app.use(express.static('./public'))
app.use(middlewareGlobal)
app.set('views', 'src/views')
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Express server listening on https://localhost:3000')
})
