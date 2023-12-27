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
router.get("/empleo/:id", _EmpleoController.getEmpleo);
router.post("/empleo", _EmpleoController.createEmpleo);
router.put("/empleo/:id", _EmpleoController.updateEmpleo);
router["delete"]("/empleo/:id", _EmpleoController.deleteEmpleo);

//rutas para Datos Generales
router.post("/datosgenerales", _DatosGeneralesController.createDatoGeneral);
router.get("/datogeneral/:id", _DatosGeneralesController.getDatoGeneral);
router.get("/datosgenerales", _DatosGeneralesController.getAllDatosGenerales);
router.put("/datogeneral/:id", _DatosGeneralesController.updateDatoGeneral);
router["delete"]("/datogeneral/:id", _DatosGeneralesController.deleteDatoGeneral);

//rutas para educaciones
router.post("/educaciones", _EducacionController.createEducacion);
router.get("/educacion/:id", _EducacionController.getEducacion);
router.get("/educaciones", _EducacionController.getAllEducaciones);
router.put("/educacion/:id", _EducacionController.updateEducacion);
router["delete"]("/educacion/:id", _EducacionController.deleteEducacion);

//rutas para certificaciones
router.post("/certificaciones", _CertificacionController.createCertificacion);
router.get("/certificacion/:id", _CertificacionController.getCertificacion);
router.get("/certificaciones", _CertificacionController.getAllCertificacion);
router.put("/certificacion/:id", _CertificacionController.updateCertificacion);
router["delete"]("/certificacion/:id", _CertificacionController.deleteCertificacion);

//rutas para experiencias Laborales
router.post("/experienciaslaborales", _ExperienciaController.createExperiencia);
router.get("/experiencialaboral/:id", _ExperienciaController.getExperiencia);
router.get("/experienciaslaborales", _ExperienciaController.getAllExperiencias);
router.put("/experiencialaboral/:id", _ExperienciaController.updateExperiencia);
router["delete"]("/experiencialaboral/:id", _ExperienciaController.deleteExperiencia);

//rutas para comercios
router.get("/comercios", _ComercioController.getAllComercios);
router.get("/comercio/:id", _ComercioController.getComercio);
router.post("/comercio", _ComercioController.createComercio);
router.put("/comercio/:id", _ComercioController.updateComercio);
router["delete"]("/comercio/:id", _ComercioController.deleteComercio);

//rutas para departamentos
router.get("/departamentos", _DepartamentoController.getAllDepartamentos);
router.get("/departamento/:id", _DepartamentoController.getDepartamento);
router.post("/departamento", _DepartamentoController.createDepartamento);
router.put("/departamento/:id", _DepartamentoController.updateDepartamento);
router["delete"]("/departamento/:id", _DepartamentoController.deleteDepartamento);
var _default = exports["default"] = router;