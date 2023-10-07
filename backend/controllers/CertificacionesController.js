import CertificacionesModel from "../models/CertificacionesModel.js";

//**Metodos para el CRUD**/

//Mostrar todos los registros
export const getAllCertificaciones = async (req, res) => {
  try {
    const Certificaciones = await CertificacionesModel.findAll();
    res.json(Certificaciones);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Mostrar un registro
export const getCertificacion = async (req, res) => {
  try {
    const Certificacion = await CertificacionesModel.findAll({
      where: { id: req.params.id },
    });
    res.json(Certificacion[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//crear un registro
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

//Actualizar un registro
export const updateCertificacion = async (req, res) => {
  try {
    await CertificacionesModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "¡Certificacion Actualizada correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//eliminar un registro
export const deleteCertificacion = async (req, res) => {
  try {
    await CertificacionesModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "¡Certificacion Eliminada correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
