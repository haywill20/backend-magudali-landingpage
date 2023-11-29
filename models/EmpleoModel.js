//importamos la coneccion a la base de datos
import db from "../database/db.js";

//importamos sequelize
import { DataTypes } from "sequelize";

const EmpleoModel = db.define("empleos", {
  nombre: { type: DataTypes.STRING, required: true },
  resumen: { type: DataTypes.STRING, required: true },
  descripcion: { type: DataTypes.STRING, required: true },
  perfil: { type: DataTypes.STRING, required: true },
  responsabilidades: { type: DataTypes.STRING, required: true },
  pago: { type: DataTypes.STRING, required: true },
  idioma: { type: DataTypes.STRING, required: true },
  prioridad: { type: DataTypes.STRING, required: true },
  tecnologias: { type: DataTypes.STRING, required: true },
  tiempo: { type: DataTypes.STRING, required: true },
  icon: { type: DataTypes.STRING, required: true },
  estilo: { type: DataTypes.STRING, required: true },
});

export default EmpleoModel;
