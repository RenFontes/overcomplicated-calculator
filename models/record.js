'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Record.init({
    uuid: DataTypes.UUID,
    service_id: DataTypes.BIGINT,
    user_id: DataTypes.BIGINT,
    cost: DataTypes.DECIMAL,
    user_balance: DataTypes.DECIMAL,
    service_response: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Record',
  }, {
      underscored: true
    });
  return Record;
};