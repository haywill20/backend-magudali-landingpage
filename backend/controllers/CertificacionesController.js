import CertificacionesModel from "../models/CertificacionesModel.js";

//**Metodos para el CRUD**/

//Meotodo para crear un registro de certificaciones
export const createCertificacion = async (req, res) => {
  try {
    await CertificacionesModel.create(req.body);
    res.json({
      message: "¡Certificacion creada correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
