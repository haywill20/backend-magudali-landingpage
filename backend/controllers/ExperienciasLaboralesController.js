//importamos el modelo
import ExperienciasLaboralesModel from "../models/ExperienciasLaboralesModel.js";

//**Metodos para el CRUD**/

//Metodo para Crear un Registro de experiecia laboral
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
