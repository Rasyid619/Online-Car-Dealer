'use strict';
const fs = require('fs');


module.exports = {
  up (queryInterface, Sequelize) {
    let data = JSON.parse(fs.readFileSync('./data/categories.json', 'utf-8'))
    data.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
   return queryInterface.bulkInsert('Categories', data)
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
