//importamos la conexion a la base de datos
import db from "../database/db.js";

//importamos Sequelize
import { DataTypes } from "sequelize";

const EmpleoModel = db.define("empleos", {
  nombre: { type: DataTypes.STRING },
  resumen: { type: DataTypes.STRING },
  descripcion: { type: DataTypes.STRING },
  perfil: { type: DataTypes.STRING },
  responsabilidades: { type: DataTypes.STRING },
  pago: { type: DataTypes.STRING },
  idioma: { type: DataTypes.STRING },
  prioridad: { type: DataTypes.STRING },
  tecnologias: { type: DataTypes.STRING },
  tiempo: { type: DataTypes.STRING },
  icon: { type: DataTypes.STRING },
  estilo: { type: DataTypes.STRING },
});
export default EmpleoModel;
