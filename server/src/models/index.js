const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

users = require("./user.model.js")(sequelize, Sequelize);
apps = require("./app.model.js")(sequelize, Sequelize);
images = require("./image.model.js")(sequelize, Sequelize);
users.hasMany(apps,{
  foreignKey: 'creator'
});
apps.belongsTo(users);

db.users = users;
db.apps = apps;
db.images = images;

module.exports = db;