'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      firebase_uid: {
        type: Sequelize.STRING
      },
      uuid: {
        type: Sequelize.UUID
      },
      username: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.ENUM('user', 'admin')
      },
      status: {
        type: Sequelize.ENUM('active', 'trial', 'inactive')
      },
      balance: {
        type: Sequelize.DECIMAL
      },
      create_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('services', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      uuid: {
        type: Sequelize.UUID
      },
      type: {
        type: Sequelize.ENUM('addition', 'subtraction', 'multiplication', 'division', 'square_root', 'free_form', 'random_string')
      },
      cost: {
        type: Sequelize.DECIMAL
      },
      status: {
        type: Sequelize.ENUM('active', 'beta', 'inactive')
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('records', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      uuid: {
        type: Sequelize.UUID
      },
      service_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'services',
          key: 'id',
        },
      },
      user_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      cost: {
        type: Sequelize.DECIMAL
      },
      user_balance: {
        type: Sequelize.DECIMAL
      },
      service_response: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('records');
    await queryInterface.dropTable('users');
    await queryInterface.dropTable('services');
    await queryInterface.sequelize.query('drop type public."enum_Services_status"');
    await queryInterface.sequelize.query('drop type public."enum_Services_type"');
    await queryInterface.sequelize.query('drop type public."enum_Users_role"');
    await queryInterface.sequelize.query('drop type public."enum_Users_status"');

  }
};