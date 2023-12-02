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

var ExperienciaModel = _db["default"].define("experiencias_laborales", {
  datosGenerales_id: {
    type: _sequelize.DataTypes.INTEGER,
    required: true
  },
  empresa: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  mesInicioExperiencia: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  anioInicioExperiencia: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  mesFinExperiencia: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  anioFinExperiencia: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  cargo: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  actividades: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  tecnologias: {
    type: _sequelize.DataTypes.STRING,
    required: true
  }
});
var _default = exports["default"] = ExperienciaModel;