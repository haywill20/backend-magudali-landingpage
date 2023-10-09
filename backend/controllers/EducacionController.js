//importamos el modelo
import EducacionModel from "../models/EducacionModel.js";

//Metodos para el CRUD

//Meotodo para crear Crear un registro de educacion
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
