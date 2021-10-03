const mogoose = require('mongoose')

const HomeSchema = new mogoose.Schema({
    title: { type: String, require: true },
    description: String
})

const HomeModel = mogoose.model('Home', HomeSchema)

class Home {

}

module.exports = Home
