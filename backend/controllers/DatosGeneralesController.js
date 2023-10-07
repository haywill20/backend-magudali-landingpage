//importamos el modelo
import DatosGeneralesModel from "../models/DatosGeneralesModel.js";

//**Metodos para el CRUD**/

//Mostrar todos los registros

export const getAllDatosGenerales = async (req, res) => {
  try {
    const DatosGenerales = await DatosGeneralesModel.findAll();
    res.json(DatosGenerales);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Mostrar un registro
export const getDatoGeneral = async (req, res) => {
  try {
    const DatoGeneral = await DatosGeneralesModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(DatoGeneral[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Crear un Registro
export const createDatoGeneral = async (req, res) => {
  try {
    await DatosGeneralesModel.create(req.body);
    res.json({
      message: "¡Registro creado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Actualizar un registro
export const updateDatoGeneral = async (req, res) => {
  try {
    await DatosGeneralesModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "¡Registro Actualizado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//eliminar un registro
export const deleteDatosGenerales = async (req, res) => {
  try {
    await DatosGeneralesModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "¡Registro Eliminado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
