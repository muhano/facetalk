const  {User} = require ("../models")
const {compareHash} = require ("../helpers/bcrypt")

class Controller{
    static landingPage(req,res){
        res.render ("landingPage")
    }

    static addRegister (req,res) {
    const {errors} = req.query 
    console.log(errors)
    const newErrors = errors? errors.split(',') : null
    res.render('register',{newErrors})
    }

    static postRegister (req,res) {
        const {username, password, email} = req.body
        const input = {username, password, email}
        User.create (input)
        .then (data => {
            res.redirect ("/login")
        })
        .catch (err => {
            if (err.name === "SequelizeValidationError") {
                const errors = err.errors.map(el => {
                return el.message
                })
                res.redirect (`/register?errors=${errors}`)
            } else {
                res.send(err)
            }
        })
    }

    static getLogin (req,res) {
    const {errors} = req.query 
    const newErrors = errors? errors.split(',') : null
    res.render('login',{newErrors})
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
                const errors='Wrong password / username'
                res.redirect (`/login?errors=${errors}`)
                }
            } else {
                const errors='User not found'
                res.redirect (`/login?errors=${errors}`)
            }
        })
        .catch (err=> {
            if (err.name === "SequelizeValidationError") {
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
        User.findAll ()
        .then (data => {
            res.render ("home", {data})
        })
    }
}

module.exports = Controller