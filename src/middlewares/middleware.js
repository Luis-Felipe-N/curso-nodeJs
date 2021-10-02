module.exports = (req, res, next) => {
    console.log('passando pelo mniddleware global')
    next()
}