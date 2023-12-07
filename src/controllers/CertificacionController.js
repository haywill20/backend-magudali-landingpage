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

//Meotodo para obtener un registro de certificaciones
export const getCertificacion = async (req, res) => {
  try {
    const { id } = req.params; //El id del registro a obtener

    //verificar que el id este en la base de datos
    const certificacion = await CertificacionModel.findOne({
      where: { id: id },
    });

    if (!certificacion) {
      return res.status(400).json({
        message: "El registro de Certificacion no existe",
      });
    }

    // Envía una respuesta exitosa
    res.status(200).json({
      message: "Certificacion obtenida con exito",
      data: certificacion,
    });
  } catch (error) {
    // Maneja errores, si los hay
    console.error("Error al obtener Certificacion:", error);
    // Envía una respuesta de error
    res.status(500).json({ error: "Error al obtener Certificacion" });
  }
};

//Meotodo para obtener todos los registros de certificaciones
export const getAllCertificacion = async (req, res) => {
  try {
    const certificacion = await CertificacionModel.findAll();

    // Envía una respuesta exitosa
    res.status(200).json({
      message: "Certificacion obtenida con exito",
      data: certificacion,
    });
  } catch (error) {
    // Maneja errores, si los hay
    console.error("Error al obtener Certificacion:", error);
    // Envía una respuesta de error
    res.status(500).json({ error: "Error al obtener Certificacion" });
  }
};

// Metodo para actualizar un registro de certificaciones
export const updateCertificacion = async (req, res) => {
  try {
    const { id } = req.params; // El id del registro a actualizar
    const certificacion = req.body; // El nuevo registro a actualizar

    // verificar que el id esté en la base de datos
    const certificacionFound = await CertificacionModel.findOne({
      where: { id: id },
    });

    if (!certificacionFound) {
      return res.status(400).json({
        message: "El registro de Certificacion no existe",
      });
    }

    // actualizar el registro
    await CertificacionModel.update(
      {
        datosGenerales_id: certificacion.datosGenerales_id,
        certificacion: certificacion.certificacion,
        mesFinCertificacion: certificacion.mesFinCertificacion,
        anioFinCertificacion: certificacion.anioFinCertificacion,
        institucionCertificacion: certificacion.institucionCertificacion,
      },
      { where: { id: id } }
    );

    // Envía una respuesta exitosa
    res.status(200).json({
      message: "Certificacion actualizada con éxito",
    });
  } catch (error) {
    // Maneja errores, si los hay
    console.error("Error al actualizar Certificacion:", error);
    // Envía una respuesta de error
    res.status(500).json({ error: "Error al actualizar Certificacion" });
  }
};


//Metodo para eliminar un producto
export const deleteCertificacion = async (req, res) => {
  try {
    const { id } = req.params; // El id del registro a eliminar
    const certificacion = req.body; // El registro a eliminar
    
    // verificar que el id esté en la base de datos
    const certificacionFound = await CertificacionModel.findOne({
      where: { id: id },
    });

    if (!certificacionFound) {
      return res.status(400).json({
        message: "El registro de Certificacion no existe",
      });
    }
    
    await CertificacionModel.destroy({
      where: { id: id },
    });
    res.json({
      message: "¡Producto eliminado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};


