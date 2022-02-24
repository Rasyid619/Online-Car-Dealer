'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('Cars', 'imageUrl', {
      type: Sequelize.STRING
   });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Cars', 'imageUrl',{})
  }
};


