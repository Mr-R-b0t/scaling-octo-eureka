const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port : dbConfig.PORT,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
})
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.movies = require("./movie.model.js")(sequelize, Sequelize);
db.users = require("./users.model.js")(sequelize, Sequelize);
db.movieList = require("./movieList.model.js")(sequelize, Sequelize);
db.friends = require("./friendList.model.js")(sequelize, Sequelize);


module.exports = db;


