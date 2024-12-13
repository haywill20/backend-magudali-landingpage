// Importa db.js desde la ubicación correcta
import db from "../../database/db.js";
import { DataTypes } from "sequelize";

const IconModel = db.define("icons", {
  name: { type: DataTypes.STRING, required: true },
  code: { type: DataTypes.STRING, required: true },
});

export default IconModel;
