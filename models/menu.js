'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Category, { foreignKey: 'Category_id' });
      this.hasMany(models.OrderDetail, { foreignKey: 'menu_id' });
      // define association here
    }
  }
  Menu.init({
    Name: DataTypes.STRING,
    Harga: { type:DataTypes.INTEGER,
      validate: { min: 0 }
    },
    Stok: { type: DataTypes.INTEGER, validate: { min: 0 } },
    Image: DataTypes.STRING,
    Category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Menu',
    paranoid: true,
  });
  return Menu;
};