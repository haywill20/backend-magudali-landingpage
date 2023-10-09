//importamos la coneccion a la base de datos
import db from "../database/db.js";

//importamos sequelize
import { DataTypes } from "sequelize";

const CertificacionesModel = db.define("certificaciones", {
  candidato_id: { type: DataTypes.INTEGER },
  certificacion: { type: DataTypes.STRING },
  mesFinCertificacion: { type: DataTypes.STRING },
  anioFinCertificacion: { type: DataTypes.STRING },
  institucionCertificacion: { type: DataTypes.STRING },
});

export default CertificacionesModel;
