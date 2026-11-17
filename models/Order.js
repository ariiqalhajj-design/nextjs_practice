'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.OrderDetail, { foreignKey: 'order_id' });
      // define association here
    }
  }
  order.init({
    nama: DataTypes.STRING,
    total: { type: DataTypes.INTEGER, validate: { min: 0 } },
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};