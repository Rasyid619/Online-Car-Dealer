'use strict';
const fs = require('fs');


module.exports = {
  async up (queryInterface, Sequelize) {
    let data = JSON.parse(fs.readFileSync('./data/profiles.json', 'utf-8'))
    data.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
   return queryInterface.bulkInsert('Profiles', data)
  },

  async down (queryInterface, Sequelize) {
    
    return queryInterface.bulkDelete('Profiles', null, {});
  }
};
