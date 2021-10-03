// module.exports = (req, res, next) => {
//     console.log('passando pelo mniddleware global')
//     next()
// }
segundos++

if ( segundos > 59 ){
    segundos = 0
    minutos = 0
}