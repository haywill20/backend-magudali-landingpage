import express from "express";
import { createCertificacion } from "../controllers/CertificacionController.js";
import { createDatoGeneral } from "../controllers/DatosGeneralesController.js";
import { createEducacion } from "../controllers/EducacionController.js";
import { createExperiencia } from "../controllers/ExperienciaController.js";
import { getAllEmpleos, getEmpleo } from "../controllers/EmpleoController.js";
import {
  getAllComercios,
  getComercio,
} from "../controllers/ComercioController.js";

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
router.post("/experienciaslaborales", createExperiencia);

//rutas para comercios
router.get("/comercios", getAllComercios);
router.get("/comercio/:id", getComercio);

export default router;
