const express = require('express')
const route = express.Router()
const homeControllers = require('./controllers/homeControllers')
const productsControllers = require('./controllers/productsControlles')

function meuMiddlewares(req, res, next)  {
    console.log('estou no middlewares')
    next()
}

route.get('/', meuMiddlewares, homeControllers.home, (req, res, next) => {
    console.log('ultima funcção rodando')
    next()
})

// Produtos
route.get('/produtos', productsControllers.home)

module.exports = route