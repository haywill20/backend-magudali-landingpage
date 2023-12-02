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

var CertificacionModel = _db["default"].define("certificaciones", {
  datosGenerales_id: {
    type: _sequelize.DataTypes.INTEGER,
    required: true
  },
  certificacion: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  mesFinCertificacion: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  anioFinCertificacion: {
    type: _sequelize.DataTypes.STRING,
    required: true
  },
  institucionCertificacion: {
    type: _sequelize.DataTypes.STRING,
    required: true
  }
});
var _default = exports["default"] = CertificacionModel;