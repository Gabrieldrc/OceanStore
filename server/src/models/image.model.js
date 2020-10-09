module.exports = (sequelize, DataTypes) => {
  const IMAGE = sequelize.define("IMAGE", {
    type: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    data: {
      type: DataTypes.BLOB("long"),
    },
    app: {
      //app.model.name
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return IMAGE;
};