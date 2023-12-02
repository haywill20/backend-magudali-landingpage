"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _CertificacionController = require("../controllers/CertificacionController.js");
var _DatosGeneralesController = require("../controllers/DatosGeneralesController.js");
var _EducacionController = require("../controllers/EducacionController.js");
var _ExperienciaController = require("../controllers/ExperienciaController.js");
var _EmpleoController = require("../controllers/EmpleoController.js");
var _ComercioController = require("../controllers/ComercioController.js");
var _DepartamentoController = require("../controllers/DepartamentoController.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();

//rutas para empleos
router.get("/empleos", _EmpleoController.getAllEmpleos);
router.get("/empleos/:id", _EmpleoController.getEmpleo);

//rutas para Datos Generales
router.post("/datosgenerales", _DatosGeneralesController.createDatoGeneral);

//rutas para educaciones
router.post("/educaciones", _EducacionController.createEducacion);

//rutas para certificaciones
router.post("/certificaciones", _CertificacionController.createCertificacion);

//rutas para experiencias Laborales
router.post("/experienciaslaborales", _ExperienciaController.createExperiencia);

//rutas para comercios
router.get("/comercios", _ComercioController.getAllComercios);
router.get("/comercio/:id", _ComercioController.getComercio);

//rutas para departamentos
router.get("/departamentos", _DepartamentoController.getAllDepartamentos);
var _default = exports["default"] = router;