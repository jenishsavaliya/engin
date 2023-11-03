const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("../config/sequelize");
const bcrypt = require("bcrypt");
const soltRound = 10;

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 1,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected..");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.admin = require("./admin.js")(sequelize, DataTypes);
db.customer = require("./customer.js")(sequelize, DataTypes);
db.machine = require("./machine.js")(sequelize, DataTypes);
db.engCard = require("./engCard.js")(sequelize, DataTypes);
db.machineReport = require("./machineReport.js")(sequelize, DataTypes);
db.machineComplain = require("./machineComplain.js")(sequelize, DataTypes);
db.uploadDoc = require("./uploadDoc.js")(sequelize, DataTypes);

db.admin.hasMany(db.customer, { onDelete: "cascade" });
db.customer.belongsTo(db.admin);

db.customer.hasMany(db.machine, { onDelete: "cascade" });
db.machine.belongsTo(db.customer);

db.machine.hasMany(db.engCard, { onDelete: "cascade" });
db.engCard.belongsTo(db.machine);

db.machine.hasMany(db.machineReport, { onDelete: "cascade" });
db.machineReport.belongsTo(db.machine);

db.machine.hasMany(db.machineComplain, { onDelete: "cascade" });
db.machineComplain.belongsTo(db.machine);
db.customer.hasMany(db.machineComplain, { onDelete: "cascade" });
db.machineComplain.belongsTo(db.customer);

db.machineComplain.hasMany(db.uploadDoc, { onDelete: "cascade" });
db.uploadDoc.belongsTo(db.machineComplain);

db.sequelize.sync({ force: false }).then(async () => {
  const record = await db.admin.findAndCountAll();
  const count = record.count;
  let password = await new Promise((resolve, reject) => {
    bcrypt.genSalt(soltRound, function (err, salt) {
      bcrypt.hash("12345", salt, function (err, hash) {
        resolve(hash);
      });
    });
  });
  if (count === 0) {
    db.admin
      .create({
        username: "admin",
        email: "admin@gmail.com",
        password: password,
        showPassword: "12345",
        role: "admin",
      })
      .then(() => {
        console.log("Admin Created...");
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

module.exports = db;
