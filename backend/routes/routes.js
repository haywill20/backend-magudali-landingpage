import express from "express";
import { getAllEmpleos, getEmpleo } from "../controllers/EmpleoController.js";

const router = express.Router();

//Rutas para empleos
router.get("/empleos", getAllEmpleos);
router.get("/empleos/:id", getEmpleo);

export default router;
