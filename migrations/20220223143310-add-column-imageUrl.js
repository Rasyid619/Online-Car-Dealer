'use strict';


module.exports = {
   up (queryInterface, Sequelize) {
   return queryInterface.addColumn('Cars', 'imageUrl', {
      type: Sequelize.STRING
   });
  },

  down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Cars', 'imageUrl',{})
  }
};



