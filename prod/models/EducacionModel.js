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

var EducacionModel = _db["default"].define("educaciones", {
  datosGenerales_id: {
    type: _sequelize.DataTypes.INTEGER,
    required: true
  },
  institucionEducacion: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  mesFinEducacion: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  anioFinEducacion: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  carrera: {
    type: _sequelize.DataTypes.STRING,
    required: true
  }
});
var _default = exports["default"] = EducacionModel;