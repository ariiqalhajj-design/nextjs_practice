"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Menu, { foreignKey: "Category_id" });
      // define association here
    }
  }
  Category.init(
    {
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "Category name must be unique.",
        },
        validate: {
          notNull: {
            msg: "nama category tidak boleh kosong",
          },
        },
      },
      deskripsi: DataTypes.TEXT,
    },
    {
      books: {
        beforeValidate: (category) => {
          category.nama = category.nama.trim().toLowerCase();
        },
      },
      sequelize,
      modelName: "Category",
    },
  );
  return Category;
};
