const express = require("express");

const path = require("path");
const app = express();
const bodyParser = require("body-parser");
global.appRoot = path.resolve(__dirname);

const port = 8080;
require("dotenv").config();
var cors = require("cors");
// app.use(cors());
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("ngrok-skip-browser-warning", true);
  next();
});

require("./config/sequelize");
require("./database");

app.use("/api", require("./routes/auth.routes"));
app.use("/api", require("./routes/user.routes"));
app.use("/api", require("./routes/customer.routes"));
app.use("/api", require("./routes/machine.routes"));
app.use("/api", require("./routes/engCards.routes"));

app.listen(port, () => console.log("Listening on port " + port));
