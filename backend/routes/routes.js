import express from "express";
import { createCertificacion } from "../controllers/CertificacionesController.js";
import { createDatoGeneral } from "../controllers/DatosGeneralesController.js";
import { createEducacion } from "../controllers/EducacionController.js";
import { createExperienciaLaboral } from "../controllers/ExperienciasLaboralesController.js";
import { getAllEmpleos, getEmpleo } from "../controllers/EmpleoController.js";

const router = express.Router();

//rutas para empleos
router.get("/empleos", getAllEmpleos);
router.get("/empleos/:id", getEmpleo);

//rutas para Datos Generales
router.post("/datosgenerales", createDatoGeneral);

//rutas para educaciones
router.post("/educaciones", createEducacion);

//rutas para certificaciones
router.post("/certificaciones", createCertificacion);

//rutas para experiencias Laborales
router.post("/experienciaslaborales", createExperienciaLaboral);

export default router;
