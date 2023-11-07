//importamos la coneccion a la base de datos
import db from "../database/db.js";

//importamos sequelize
import { DataTypes } from "sequelize";

const ExperienciaModel = db.define("experiencias_laborales", {
  datosGenerales_id: { type: DataTypes.INTEGER, required: true },
  empresa: { type: DataTypes.STRING, required: true },
  mesInicioExperiencia: { type: DataTypes.STRING, required: true },
  anioInicioExperiencia: { type: DataTypes.STRING, required: true },
  mesFinExperiencia: { type: DataTypes.STRING, required: true },
  anioFinExperiencia: { type: DataTypes.STRING, required: true },
  cargo: { type: DataTypes.STRING, required: true },
  actividades: { type: DataTypes.STRING, required: true },
  tecnologias: { type: DataTypes.STRING, required: true },
});

export default ExperienciaModel;
