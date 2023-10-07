import express from "express";
import {
  createCertificacion,
  deleteCertificacion,
  getAllCertificaciones,
  getCertificacion,
  updateCertificacion,
} from "../controllers/CertificacionesController.js";
import {
  createDatoGeneral,
  deleteDatosGenerales,
  getAllDatosGenerales,
  getDatoGeneral,
  updateDatoGeneral,
} from "../controllers/DatosGeneralesController.js";
import {
  createEducacion,
  deleteEducacion,
  getAllEducaciones,
  getEducacion,
  updateEducacion,
} from "../controllers/EducacionController.js";
import { getAllEmpleos, getEmpleo } from "../controllers/EmpleoController.js";
import {
  createExperienciaLaboral,
  deleteExperienciaLaboral,
  getAllExperienciasLaborales,
  getExperienciaLaboral,
  updateExperienciaLaboral,
} from "../controllers/ExperienciasLaboralesController.js";
const router = express.Router();

//rutas para empleos
router.get("/empleos", getAllEmpleos);
router.get("/:id", getEmpleo);

//rutas para Datos Generales
router.get("/", getAllDatosGenerales);
router.get("/:id", getDatoGeneral);
router.post("/", createDatoGeneral);
router.put("/:id", updateDatoGeneral);
router.delete("/:id", deleteDatosGenerales);

//rutas para educaciones
router.get("/", getAllEducaciones);
router.get("/:id", getEducacion);
router.post("/", createEducacion);
router.put("/:id", updateEducacion);
router.delete("/:id", deleteEducacion);

//rutas para certificaciones
router.get("/", getAllCertificaciones);
router.get("/:id", getCertificacion);
router.post("/", createCertificacion);
router.put("/:id", updateCertificacion);
router.delete("/:id", deleteCertificacion);

//rutas para experiencias Laborales
router.get("/", getAllExperienciasLaborales);
router.get("/:id", getExperienciaLaboral);
router.post("/", createExperienciaLaboral);
router.put("/:id", updateExperienciaLaboral);
router.delete("/:id", deleteExperienciaLaboral);

export default router;
