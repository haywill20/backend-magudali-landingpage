//importamos la coneccion a la base de datos
import db from "../database/db.js";

//importamos sequelize
import { DataTypes } from "sequelize";

const DepartamentoModel = db.define("departamentos", {
  departamento: { type: DataTypes.STRING, required: true },
});

export default DepartamentoModel;
