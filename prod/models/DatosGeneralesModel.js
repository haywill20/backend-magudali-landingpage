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

var DatosGeneralesModel = _db["default"].define("datos_generales", {
  nombre: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  apellido: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  correo: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  cod: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  telefono: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  pais: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  disponibilidad: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  vacante: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  aniosExperiencia: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  expectativaSalario: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  resumen: {
    type: _sequelize.DataTypes.TEXT,
    required: true
  },
  sistemasOperativos: {
    type: _sequelize.DataTypes.TEXT,
    required: true
  },
  lenguajesProg: {
    type: _sequelize.DataTypes.TEXT,
    required: true
  },
  herramientasProg: {
    type: _sequelize.DataTypes.TEXT,
    required: true
  },
  librerias: {
    type: _sequelize.DataTypes.TEXT,
    required: true
  },
  basesDatos: {
    type: _sequelize.DataTypes.TEXT,
    required: true
  },
  clouds: {
    type: _sequelize.DataTypes.TEXT,
    required: true
  },
  español: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  ingles: {
    type: _sequelize.DataTypes.STRING,
    required: true
  }
});
var _default = exports["default"] = DatosGeneralesModel;