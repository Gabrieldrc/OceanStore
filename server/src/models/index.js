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
app_details = require("./app_details.model.js")(sequelize, Sequelize);
app_rates = require("./app_rate.model.js")(sequelize, Sequelize);
app_comments = require("./app_comment.model.js")(sequelize, Sequelize);
images = require("./image.model.js")(sequelize, Sequelize);

//user associations:
users.hasMany(apps,{
  foreignKey: 'publisher'
});
users.hasMany(app_comments,{
  foreignKey: 'user_name'
});
users.hasMany(app_rates,{
  foreignKey: 'user_name'
});

//app associations:
apps.belongsTo(users);
apps.hasMany(app_details,{
  foreignKey: 'app_name'
});
apps.hasMany(app_comments,{
  foreignKey: 'app_name'
});
apps.hasMany(app_rates,{
  foreignKey: 'app_name'
});

//app_comment associations:
app_comments.belongsTo(users);
app_comments.belongsTo(apps);

//app_rate associations:
app_rates.belongsTo(users);
app_rates.belongsTo(apps);

//app_rate associations:
app_details.belongsTo(apps);

db.users = users;
db.apps = apps;
db.app_details = app_details;
db.app_rates = app_rates;
db.app_comments = app_comments;
db.images = images;

module.exports = db;