const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./database");

const Favourite =sequelize.define('favourites', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id:{
        type: DataTypes.STRING, 
        allowNull: false,
    },
    ingredient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})

sequelize.sync();
module.exports = {  
    Favourite,
  };
  