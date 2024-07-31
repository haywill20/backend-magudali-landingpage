import express from "express";
import { createCertificacion, getCertificacion, getAllCertificacion, updateCertificacion, deleteCertificacion } from "../controllers/CertificacionController.js";
import { createDatoGeneral, getDatoGeneral, updateDatoGeneral, getAllDatosGenerales, deleteDatoGeneral } from "../controllers/DatosGeneralesController.js";
import { createEducacion, getEducacion, getAllEducaciones, updateEducacion, deleteEducacion } from "../controllers/EducacionController.js";
import { createExperiencia, getExperiencia, getAllExperiencias, updateExperiencia, deleteExperiencia } from "../controllers/ExperienciaController.js";
import { getAllEmpleos, getEmpleo, createEmpleo, updateEmpleo, deleteEmpleo } from "../controllers/EmpleoController.js";
import {
  getAllComercios,
  getComercio,
  createComercio,
  updateComercio,
  deleteComercio,
} from "../controllers/ComercioController.js";
import { getAllDepartamentos, getDepartamento, createDepartamento, updateDepartamento, deleteDepartamento } from "../controllers/DepartamentoController.js";
import { isAuthenticaded, login } from "../controllers/authController.js";
import { createJobController } from "../controllers/createJobController.js";

import { getAllVacantes, getVacante, createVacante, updateVacante, deleteVacante } from "../controllers/vacantesController.js";

import {
   getAllIcons,
   getIcon,
   createIcon,
   updateIcon,
   deleteIcon
} from "../controllers/admin/IconController.js";

const router = express.Router();

//rutas para empleos
router.get("/empleos", getAllEmpleos);
router.get("/empleo/:id", getEmpleo);
router.post("/empleo", createEmpleo);
router.put("/empleo/:id", updateEmpleo);
router.delete("/empleo/:id", deleteEmpleo);

//rutas para Datos Generales
router.post("/datosgenerales", createDatoGeneral);
router.get("/datogeneral/:id", getDatoGeneral);
router.get("/datosgenerales", getAllDatosGenerales);
router.put("/datogeneral/:id", updateDatoGeneral);
router.delete("/datogeneral/:id", deleteDatoGeneral);

//rutas para educaciones
router.post("/educaciones", createEducacion);
router.get("/educacion/:id", getEducacion);
router.get("/educaciones", getAllEducaciones);
router.put("/educacion/:id", updateEducacion);
router.delete("/educacion/:id", deleteEducacion);

//rutas para certificaciones
router.post("/certificaciones", createCertificacion);
router.get("/certificacion/:id", getCertificacion);
router.get("/certificaciones", getAllCertificacion);
router.put("/certificacion/:id", updateCertificacion);
router.delete("/certificacion/:id", deleteCertificacion);

//rutas para experiencias Laborales
router.post("/experienciaslaborales", createExperiencia);
router.get("/experiencialaboral/:id", getExperiencia);
router.get("/experienciaslaborales", getAllExperiencias);
router.put("/experiencialaboral/:id", updateExperiencia);
router.delete("/experiencialaboral/:id", deleteExperiencia);

//rutas para comercios
router.get("/comercios", getAllComercios);
router.get("/comercio/:id", getComercio);
router.post("/comercio", createComercio);
router.put("/comercio/:id", updateComercio);
router.delete("/comercio/:id", deleteComercio);

//rutas para departamentos
router.get("/departamentos", getAllDepartamentos);
router.get("/departamento/:id", getDepartamento);
router.post("/departamento", createDepartamento);
router.put("/departamento/:id", updateDepartamento);
router.delete("/departamento/:id", deleteDepartamento);

// rutas para el login
router.post("/login", login);
router.get("/homeValidate", isAuthenticaded); // TODO: esto nos dira si tenemos permisos para ir al home

// rutas para empleos
router.post("/createjob", createJobController);

// rutas para vacantes:
router.post("/vacante", createVacante);
router.get("/vacantes", getAllVacantes);
router.get("/vacante/:id", getVacante);
router.put("/vacante/:id", updateVacante);
router.delete("/vacante/:id", deleteVacante);

//rutas para iconos
router.get("/icons", getAllIcons);
router.get("/icon/:id", getIcon);
router.post("/icon", createIcon);
router.put("/icon/:id", updateIcon);
router.delete("/icon/:id", deleteIcon);

export default router;
