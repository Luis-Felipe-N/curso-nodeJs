const HomeModel = require('../models/homeModel')

HomeModel.create({
    title: 'Tarefa de matemática',
    description: 'Resolver as questão da Lista 2 de matemática'
})
.then(res => console.log(res))
.catch(e=> console.log(e))

exports.home = (req, res) => {
    res.render('index.ejs')
}

exports.homePost = (req, res) => {
    const body = req.body
    res.send('Foi')
}