'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  const data = require("../data/user.json", "utf-8")
  const {hashPassword}  = require("../helpers/bcrypt")
  data.forEach (el => {
    el.createdAt = new Date()
    el.updatedAt = new Date()
    el.password = hashPassword(el.password)
  })
  return queryInterface.bulkInsert ('Users', data, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  return queryInterface.bulkDelete ('Users', null, {})

  }
};
