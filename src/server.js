require('dotenv').config()
const express = require('express')
const app = express()
const route = require('./routes')
const mongoose = require('mongoose')

const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')


mongoose.connect(process.env.CONNECT_STRING, {
    useNewUrlParser: true, 
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => app.emit('ok'))
 
app.use(express.urlencoded({ extended: true}))
app.use(route)
app.use(express.static('./public'))

// app.use(middlewareGlobal)

app.set('views', 'src/views')
app.set('view engine', 'ejs');


app.on('ok', () => {
    app.listen(3000, () => {
        console.log('Express server listening on https://localhost:3000')
    })
})
