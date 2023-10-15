//importamos la coneccion a la base de datos
import db from "../database/db.js";

//importamos sequelize
import { DataTypes } from "sequelize";

const CertificacionModel = db.define("certificaciones", {
  datosGenerales_id: { type: DataTypes.INTEGER },
  certificacion: { type: DataTypes.STRING },
  mesFinCertificacion: { type: DataTypes.STRING },
  anioFinCertificacion: { type: DataTypes.STRING },
  institucionCertificacion: { type: DataTypes.STRING },
});

export default CertificacionModel;
