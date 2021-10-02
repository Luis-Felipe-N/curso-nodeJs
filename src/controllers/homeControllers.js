// type Home = {
//     req: object,
//     res: object
// }

exports.home = (req, res, next) => {

    res.render('index.ejs')
    next()
}