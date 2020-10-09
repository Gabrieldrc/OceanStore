module.exports = (sequelize, DataTypes, User) => {
  const APP_DETAILS = sequelize.define("APP_DETAILS", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    about_this: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    developer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    version: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "none" ,
    },
    updated_date: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "none" ,
    }
  });

  return APP_DETAILS;
};