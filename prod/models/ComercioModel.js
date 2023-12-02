"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _db = _interopRequireDefault(require("../database/db.js"));
var _sequelize = require("sequelize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//importamos la coneccion a la base de datos

//importamos sequelize

var ComercioModel = _db["default"].define("comercios", {
  imagen: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  nombre: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  descripcion: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  link: {
    type: _sequelize.DataTypes.TEXT,
    required: true
  }
});
var _default = exports["default"] = ComercioModel;