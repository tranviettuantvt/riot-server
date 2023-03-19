const Sequelize = require("sequelize");
const sequelize = new Sequelize("riot_mastery", "root", "2230011123", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

sequelize.authenticate().then(() => console.log("ket noi thanh cong"));
module.exports = sequelize;
