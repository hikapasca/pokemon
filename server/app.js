require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

app.use(cors());
app.use(express.urlencoded({ extended: "true" }));
app.use(express.json());
app.use(routes);

app.use(errorHandler);
let server = app.listen(PORT, function () {
  console.log(`NOW RUNNING ON PORT ${PORT}`);
});

module.exports = server;
