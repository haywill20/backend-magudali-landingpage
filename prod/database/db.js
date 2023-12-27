"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var db = new _sequelize.Sequelize("maguinev_landingpage_db", "maguinev_magudali", "magudali@21", {
  host: "localhost",
  dialect: "mysql"
});
var _default = exports["default"] = db;