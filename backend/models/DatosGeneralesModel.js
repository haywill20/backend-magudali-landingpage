//importamos la coneccion a la base de datos
import db from "../database/db.js";

//importamos sequelize
import { DataTypes } from "sequelize";

const DatosGeneralesModel = db.define("datos_generales", {
  correo: { type: DataTypes.STRING },
  nombre: { type: DataTypes.STRING },
  apellido: { type: DataTypes.STRING },
  cod: { type: DataTypes.STRING },
  telefono: { type: DataTypes.STRING },
  pais: { type: DataTypes.STRING },
  disponibilidad: { type: DataTypes.STRING },
  vacante: { type: DataTypes.STRING },
  aniosExperiencia: { type: DataTypes.STRING },
  expectativaSalario: { type: DataTypes.STRING },
  resumen: { type: DataTypes.TEXT },
  sistemasOperativos: { type: DataTypes.TEXT },
  lenguajesProg: { type: DataTypes.TEXT },
  herramientasProg: { type: DataTypes.TEXT },
  librerias: { type: DataTypes.TEXT },
  basesDatos: { type: DataTypes.TEXT },
  clouds: { type: DataTypes.TEXT },
  español: { type: DataTypes.STRING },
  ingles: { type: DataTypes.STRING },
});
export default DatosGeneralesModel;
