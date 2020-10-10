module.exports = (sequelize, DataTypes) => {
  const APP_RATE = sequelize.define("APP_RATE", {
    rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return APP_RATE;
};