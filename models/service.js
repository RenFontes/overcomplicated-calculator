'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Service.init({
    uuid: DataTypes.UUID,
    type: DataTypes.ENUM('addition', 'subtraction', 'multiplication', 'division', 'square_root', 'free_form', 'random_string'),
    cost: DataTypes.DECIMAL,
    status: DataTypes.ENUM('active', 'beta', 'inactive')
  }, {
    sequelize,
    modelName: 'Service',
  }, {
    underscored: true
  });
  return Service;
};