//importamos el modelo
import ExperienciasLaboralesModel from "../models/ExperienciasLaboralesModel.js";

//**Metodos para el CRUD**/

//Mostrar todos las experiencias laborales

export const getAllExperienciasLaborales = async (req, res) => {
  try {
    const ExperienciasLaborales = await ExperienciasLaboralesModel.findAll();
    res.json(ExperienciasLaborales);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Mostrar una experiencia laboral
export const getExperienciaLaboral = async (req, res) => {
  try {
    const ExperienciaLaboral = await ExperienciasLaboralesModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(ExperienciaLaboral[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Crear un Registro
export const createExperienciaLaboral = async (req, res) => {
  try {
    await ExperienciasLaboralesModel.create(req.body);
    res.json({
      message: "¡Experiencia laboral creada correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Actualizar un registro
export const updateExperienciaLaboral = async (req, res) => {
  try {
    await ExperienciasLaboralesModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "¡Experiencia laboral Actualizada correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//eliminar un registro
export const deleteExperienciaLaboral = async (req, res) => {
  try {
    await ExperienciasLaboralesModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "¡Experiencia laboral eliminada correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
