import db from "../database/db.js";
import { DataTypes } from "sequelize";

const vacantesModel = db.define("vacantes", {
    cargo: { type: DataTypes.STRING, required: true },
    rol: { type: DataTypes.STRING, required: true },
    idioma: { type: DataTypes.STRING, required: true },
    nivel_ingles: { type: DataTypes.STRING, required: true },
    tecnologias: { type: DataTypes.STRING, required: true },
    rate_maximo: { type: DataTypes.INTEGER, required: true },
    rate_minimo: { type: DataTypes.INTEGER, required: true },
    tiempo: { type: DataTypes.STRING, required: true },
    años_experiencia: { type: DataTypes.INTEGER, required: true },
    descripcion: { type: DataTypes.STRING, required: true },
    responsabilidades: { type: DataTypes.STRING, required: true }
});

export default vacantesModel;