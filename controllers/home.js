const  {User} = require ("../models")
const bcrypt = require ("../helpers/bcrypt")

class Controller{
    static home(req,res){
        res.render ("home")
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
                const isValidPassword = bcrypt.compareHash(password,user.password)
                if (isValidPassword) {
                    return res.redirect ("/home")
                } else {
                    const error = "Invalid username/password"
                    res.send ("Wrong Email or Password")
                }
            } else {
                res.send ("User not Found")
            }
        })
        .catch (err=> {
            res.send(err)
        })
    }
}

module.exports = Controller