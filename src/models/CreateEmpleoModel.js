//importamos la coneccion a la base de datos
import db from "../database/db.js";

//importamos sequelize
import { DataTypes } from "sequelize";

const CreateEmpleoModel = db.define("vacantes", {
    cargo: { type: DataTypes.STRING, required: true },
    rol: { type: DataTypes.STRING, required: true },
    idioma: { type: DataTypes.STRING, required: true },
    nivel_ingles: { type: DataTypes.STRING, required: true },
    tecnologias: { type: DataTypes.STRING, required: true },
    rate_maximo: { type: DataTypes.STRING, required: true },
    rate_minimo: { type: DataTypes.STRING, required: true },
    tiempo: { type: DataTypes.STRING, required: true },
    años_experiencia: { type: DataTypes.STRING, required: true },
    descripcion: { type: DataTypes.STRING, required: true },
    responsabilidades: { type: DataTypes.STRING, required: true },
});

export default CreateEmpleoModel;
