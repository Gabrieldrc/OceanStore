module.exports = (sequelize, DataTypes) => {
  const USER = sequelize.define("USER", {
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

  return USER;
};