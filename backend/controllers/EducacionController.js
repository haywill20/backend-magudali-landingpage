//importamos el modelo
import EducacionModel from "../models/EducacionModel.js";

//Metodos para el CRUD

//Mostrar Educaciones
export const getAllEducaciones = async (req, res) => {
  try {
    const educaciones = await EducacionModel.findAll();
    res.json(educaciones);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Mostrar una educacion
export const getEducacion = async (req, res) => {
  try {
    const educacion = await EducacionModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(educacion[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Crear una educación
export const createEducacion = async (req, res) => {
  try {
    await EducacionModel.create(req.body);
    res.json({
      message: "¡Educacion creada correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Actualizar una educación
export const updateEducacion = async (req, res) => {
  try {
    await EducacionModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "¡Educacion actualizada correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//eliminar un registro
export const deleteEducacion = async (req, res) => {
  try {
    await EducacionModel.destroy({
      where: { id: req.params.id },
    });
  } catch (error) {
    res.json({
      message: "¡Educacion eliminada correctamente!",
    });
  }
};
