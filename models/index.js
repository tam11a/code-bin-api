const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
	dbConfig.database,
	dbConfig.user,
	dbConfig.password,
	{
		host: dbConfig.host,
		dialect: dbConfig.dialect,
		operatorsAliases: false,
		pool: {
			max: dbConfig.pool.max,
			min: dbConfig.pool.min,
			acquire: dbConfig.pool.acquire,
			idle: dbConfig.pool.idle,
		},
	}
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.bins = require("./bin.model.js")(sequelize, Sequelize);
// db.projects = require("./project.model.js")(sequelize, Sequelize);
// db.users = require("./user.model.js")(sequelize, Sequelize);

// db.users.hasMany(db.bins);
// db.bins.belongsTo(db.users);

// db.projects.hasMany(db.bins);
// db.bins.belongsTo(db.projects);

// db.users.hasMany(db.projects);
// db.projects.belongsTo(db.users);

module.exports = db;
