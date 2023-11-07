import CertificacionModel from "../models/CertificacionModel.js";

//Meotodo para crear un registro de certificaciones
export const createCertificacion = async (req, res) => {
  try {
    const certificaciones = req.body; //El arreglo de objetos

    if (certificaciones.length === 0) {
      return res.status(400).json({
        message: "El arreglo de certificaciones no puede estar vacio",
      });
    }

    certificaciones.forEach(async (certificacion) => {
      //insertar cada elemento en la base de datos
      await CertificacionModel.create({
        datosGenerales_id: certificacion.datosGenerales_id,
        certificacion: certificacion.certificacionName,
        mesFinCertificacion: certificacion.mesFinCertificacion,
        anioFinCertificacion: certificacion.anioFinCertificacion,
        institucionCertificacion: certificacion.institucion,
      });
    });

    // Envía una respuesta exitosa
    res.status(200).json({
      message: "Certificacion enviada con exito",
    });
  } catch (error) {
    // Maneja errores, si los hay
    console.error("Error al insertar Certificacion:", error);
    // Envía una respuesta de error
    res.status(500).json({ error: "Error al insertar Certificacion" });
  }
};
