// Importa db.js desde la ubicación correcta
import db from "../../database/db.js";
import { DataTypes } from "sequelize";

const IconModel = db.define("iconos", {
  nombre: { type: DataTypes.STRING, required: true },
  valor: { type: DataTypes.STRING, required: true }
});

export default IconModel;
