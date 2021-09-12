const { v4: uuidv4 } = require('uuid');

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

    await queryInterface.bulkInsert('services', [
      {
        id: 1,
        uuid: uuidv4(),
        type: 'addition',
        cost: 2,
        status: 'active',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        uuid: uuidv4(),
        type: 'subtraction',
        cost: 2,
        status: 'active',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        uuid: uuidv4(),
        type: 'multiplication',
        cost: 4,
        status: 'active',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        uuid: uuidv4(),
        type: 'division',
        cost: 4,
        status: 'active',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        uuid: uuidv4(),
        type: 'square_root',
        cost: 10,
        status: 'active',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        uuid: uuidv4(),
        type: 'free_form',
        cost: 20,
        status: 'active',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 7,
        uuid: uuidv4(),
        type: 'random_string',
        cost: 5,
        status: 'active',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.sequelize.query('TRUNCATE TABLE public."services" CASCADE;');
  }
};
