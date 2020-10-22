module.exports = (sequelize, DataTypes) => {
  const DEVELOPER = sequelize.define("DEVELOPER", {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return DEVELOPER;
};