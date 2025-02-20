const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const bcrypt = require("bcrypt");
const path = require("path");
let db = null;
const dbFilePath = path.join(__dirname, "./userData.db");
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

app.get('/user', function (req, res) {
  console.log("/user request called");
  res.setHeader('Content-Type', 'application/json');
  res.json({"name":"Vamsee Kalyan"});
});

app.use(express.static('./apartment_manager_frontend/dist/apartment_manager_frontend/browser'));