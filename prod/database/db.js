"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var db = new _sequelize.Sequelize("landingpage_db", "root", "", {
  host: "localhost",
  dialect: "mysql"
});
var _default = exports["default"] = db;