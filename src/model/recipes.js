const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./database");

const Recipe = sequelize.define("recipes", {
  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ingredient_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  step: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  material: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  origin: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  time: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize.sync();
module.exports = {
  Recipe,
};
