//importamos la coneccion a la base de datos
import db from "../database/db.js";

//importamos sequelize
import { DataTypes } from "sequelize";

const ExperienciasLaboralesModel = db.define("experiencias_laborales", {
  candidato_id: { type: DataTypes.INTEGER },
  empresa: { type: DataTypes.STRING },
  mesInicioExperiencia: { type: DataTypes.STRING },
  anioInicioExperiencia: { type: DataTypes.STRING },
  mesFinExperiencia: { type: DataTypes.STRING },
  anioFinExperiencia: { type: DataTypes.STRING },
  cargo: { type: DataTypes.STRING },
  actividades: { type: DataTypes.STRING },
  tecnologias: { type: DataTypes.STRING },
});

export default ExperienciasLaboralesModel;
