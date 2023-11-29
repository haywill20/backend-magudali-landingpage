//importamos la coneccion a la base de datos
import db from "../database/db.js";

//importamos sequelize
import { DataTypes } from "sequelize";

const ComercioModel = db.define("comercios", {
  imagen: { type: DataTypes.STRING, required: true },
  nombre: { type: DataTypes.STRING, required: true },
  descripcion: { type: DataTypes.STRING, required: true },
  link: { type: DataTypes.TEXT, required: true },
});

export default ComercioModel;
