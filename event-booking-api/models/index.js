const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = require('./user')(sequelize, Sequelize);
db.Event = require('./event')(sequelize, Sequelize);
db.Booking = require('./booking')(sequelize, Sequelize);

db.User.hasMany(db.Booking);
db.Booking.belongsTo(db.User);

db.Event.hasMany(db.Booking);
db.Booking.belongsTo(db.Event, { as: 'Event' });

module.exports = db;