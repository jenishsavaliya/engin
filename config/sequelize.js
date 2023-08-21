module.exports = {
  // HOST: "127.0.0.1",
  // USER: "root",
  // PASSWORD: "Loop@123",
  // DB: "hrsimplify",
  // dialect: "mysql",

  HOST: "127.0.0.1",
  USER: "root",
  PASSWORD: "12345",
  DB: "engin",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
