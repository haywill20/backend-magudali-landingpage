//importamos la coneccion a la base de datos
import db from "../database/db.js";

//importamos sequelize
import { DataTypes } from "sequelize";

const EducacionModel = db.define("educaciones", {
  candidato_id: { type: DataTypes.INTEGER },
  institucionEducacion: { type: DataTypes.STRING },
  mesFinEducacion: { type: DataTypes.STRING },
  anioFinEducacion: { type: DataTypes.STRING },
  carrera: { type: DataTypes.STRING },
});

export default EducacionModel;
