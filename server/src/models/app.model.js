module.exports = (sequelize, DataTypes, User) => {
  const App = sequelize.define("App", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "none" ,
    }
  });

  return App;
};