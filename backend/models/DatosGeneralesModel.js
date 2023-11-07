//importamos la coneccion a la base de datos
import db from "../database/db.js";

//importamos sequelize
import { DataTypes } from "sequelize";

const DatosGeneralesModel = db.define("datos_generales", {
  nombre: { type: DataTypes.STRING, required: true },
  apellido: { type: DataTypes.STRING, required: true },
  correo: { type: DataTypes.STRING, required: true },
  cod: { type: DataTypes.STRING, required: true },
  telefono: { type: DataTypes.STRING, required: true },
  pais: { type: DataTypes.STRING, required: true },
  disponibilidad: { type: DataTypes.STRING, required: true },
  vacante: { type: DataTypes.STRING, required: true },
  aniosExperiencia: { type: DataTypes.STRING, required: true },
  expectativaSalario: { type: DataTypes.STRING, required: true },
  resumen: { type: DataTypes.TEXT, required: true },
  sistemasOperativos: { type: DataTypes.TEXT, required: true },
  lenguajesProg: { type: DataTypes.TEXT, required: true },
  herramientasProg: { type: DataTypes.TEXT, required: true },
  librerias: { type: DataTypes.TEXT, required: true },
  basesDatos: { type: DataTypes.TEXT, required: true },
  clouds: { type: DataTypes.TEXT, required: true },
  español: { type: DataTypes.STRING, required: true },
  ingles: { type: DataTypes.STRING, required: true },
});
export default DatosGeneralesModel;
