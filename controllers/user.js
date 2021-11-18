const  {User} = require ("../models")
const {compareHash} = require ("../helpers/bcrypt")

class Controller{
    static landingPage(req,res){
        res.render ("landingPage")
    }

    static addRegister (req,res) {
        const {errors} = req.query 
    const newErrors = errors? errors.split(',') : null
    res.render('register',{errors: newErrors})
    }

    static postRegister (req,res) {
        const {username, password, email} = req.body
        const input = {username, password, email}
        User.create (input)
        .then (data => {
            res.redirect ("/login")
        })
        .catch (err => {
            if (error.name === "SequelizeValidationError") {
                const errors = error.errors.map(el => {
                return el.message
                })
                res.redirect (`/register?errors=${errors}`)
            } else {
                res.send(error)
            }
        })
    }

    static getLogin (req,res) {
    const {errors} = req.query 
    const newErrors = errors? errors.split(',') : null
    res.render('login',{errors: newErrors})
    }

    static postLogin (req,res) {
        const {username,password} = req.body
        User.findOne ( {where : {username}})
        .then(user =>{
            if (user) {
                const isValidPassword = compareHash(password,user.password)
                if (isValidPassword) {
                    req.session.userId = user.id
                    res.redirect ("/home")
                } else {
                res.send ('Wrong password / username')
                }
            } else {
                res.send ('user not found')

            }
        })
        .catch (err=> {
            if (error.name === "SequelizeValidationError") {
                const errors = error.errors.map(el => {
                return el.message
                })
                res.redirect (`/register?errors=${errors}`)
            } else {
                res.send(error)
            }
        })
    }

    static home (req,res) {
        user.findAll ()
        .then (data => {
            res.render ("home", {data})
        })
    }
}

module.exports = Controller