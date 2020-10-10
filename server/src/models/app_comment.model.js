module.exports = (sequelize, DataTypes) => {
  const APP_COMMENT = sequelize.define("APP_COMMENT", {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return APP_COMMENT;
};