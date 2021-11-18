const  {User, Post, Tag} = require ("../models")
const {compareHash} = require ("../helpers/bcrypt")
const nodemailer = require('nodemailer')
const validator = require('validator')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  auth: {
    user: "phase1ecommerce@gmail.com",
    pass: "Phase123@ecommerce"
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false
},
  sendMail:true
})
class Controller{
    static landingPage(req,res){
        const {userId} = req.session
        res.render ("landingPage", {userId})
    }

    static addRegister (req,res) {
    const {errors} = req.query 
    const newErrors = errors? errors.split(',') : null
    res.render('register',{newErrors})
    }

    static postRegister (req,res) {
        const {username, password, email} = req.body
        const input = {username, password,  email: validator.normalizeEmail(email)}
        User.create (input)
        .then (data => {
            const {username,email} =  data
            return transporter.sendMail({
                from: "'FaceTalk' phase1ecommerce@gmail.com",
                to: email,
                subject: "Welcome",
                text: "Welcome to FaceTalk",
                html: `<h1> Welcome to FaceTalk </h1> 
                <a href="http://localhost:3000/login"> Click this link to login to FaceTalk</a>
                <pre> Hi ${username},
                Your account has been created. Now it will be easier than ever to share!
                </pre>
                `
            })
        })
        .then(info => {
            res.redirect('/login')
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
        const {username} = req.query
        let data =""
        const where = username? {username} : {username: null}
        let userNotFound = false
        User.findOne ({where})
        .then(user => {
            userNotFound = (!user && username) &&`${username} not Found`
            const where = user ? {UserId: user.id} : null
            return Post.findAll({
                include: {all: true, nested: true},
                where
            })
        })
        .then (data => {
            const {postedTime} = Post
            // ada query  tapi user nya gak cocok
            // ada username dan query -- cocok
            // console.log(data.length,",,,, HOME DATA");
            res.render('home', {data, userNotFound, postedTime})
    
        })
        .catch(error => {
            console.log(error);
            res.send(error)
        }) 
        
    }

    static logout(req, res) {
        req.session.destroy()
        res.redirect('/login')
    }

    static showMyPost(req, res) {
        // res.render('myPost')
        const {userId} = req.session
        User.findByPk(userId, {
            include: {
                model: Post,
                include: {
                  model: Tag
                }
              }
        })
            .then(data=> {
                // console.log(data.Posts);
                const {postedTime} = Post
                res.render('myPost', {data, postedTime})
            })
            .catch(err => {
                console.log(err);
                res.send(err)
            })
    }
}

module.exports = Controller