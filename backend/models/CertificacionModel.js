//importamos la coneccion a la base de datos
import db from "../database/db.js";

//importamos sequelize
import { DataTypes } from "sequelize";

const CertificacionModel = db.define("certificaciones", {
  datosGenerales_id: { type: DataTypes.INTEGER, required: true },
  certificacion: { type: DataTypes.STRING, required: true },
  mesFinCertificacion: { type: DataTypes.STRING, required: true },
  anioFinCertificacion: { type: DataTypes.STRING, required: true },
  institucionCertificacion: { type: DataTypes.STRING, required: true },
});

export default CertificacionModel;
