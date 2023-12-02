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

var EmpleoModel = _db["default"].define("empleos", {
  nombre: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  resumen: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  descripcion: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  perfil: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  responsabilidades: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  pago: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  idioma: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  prioridad: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  tecnologias: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  tiempo: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  icon: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  estilo: {
    type: _sequelize.DataTypes.STRING,
    required: true
  }
});
var _default = exports["default"] = EmpleoModel;