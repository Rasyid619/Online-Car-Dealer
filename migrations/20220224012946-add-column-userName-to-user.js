'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.addColumn('Users', 'userName', {
      type: Sequelize.STRING
   });
  },

  down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Users', 'userName',{})
  }
};


