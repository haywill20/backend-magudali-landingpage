//importamos la coneccion a la base de datos
import db from "../database/db.js";

//importamos sequelize
import { DataTypes } from "sequelize";

const EducacionModel = db.define("educaciones", {
  datosGenerales_id: { type: DataTypes.INTEGER, required: true },
  institucionEducacion: { type: DataTypes.STRING, required: true },
  mesFinEducacion: { type: DataTypes.STRING, required: true },
  anioFinEducacion: { type: DataTypes.STRING, required: true },
  carrera: { type: DataTypes.STRING, required: true },
});

export default EducacionModel;
