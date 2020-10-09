module.exports = (sequelize, DataTypes, User) => {
  const APP = sequelize.define("APP", {
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
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

  return APP;
};