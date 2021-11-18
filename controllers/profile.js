const {Profile} = require('../models')
const { Op } = require("sequelize");

module.exports = class Controller {
  static getProfile(req,res) {
    const {userId} = req.session
    Profile.findOne({where: {UserId: userId}})
    .then(data => {
      console.log(data,'<<< data user');
      res.render('profile', {data})
    })
    .catch(error => {
      console.log(error);
      res.send(error.message)
    })
  }

  static editProfileForm(req,res) {
    const {userId} = req.session
    Profile.findOne({where: {UserId: userId}})
    .then(data => {
      res.render('editProfileForm', {data})
    })
    .catch(error => {
      console.log(error);
      res.send(error.message)
    })
  }

  static postEditProfile (req,res) {
    const {userId} = req.session
    const {name, noTelepon,address,profilePicture,gender} = req.body
    const input = {name, noTelepon,address,profilePicture,gender, UserId: userId}

    Profile.update(input,{where: {UserId: { [Op.eq]:userId}}})
    
    .then(data => {
      res.redirect('/profile')
    })
    .catch(error => {
      console.log(error);
      res.send(error.message)
    })
  }

}