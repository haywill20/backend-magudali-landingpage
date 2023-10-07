//importamos el modelo
import EmpleoModel from "../models/EmpleoModel.js";

//Metodos para el CRUD

//Mostrar todas las vacantes
export const getAllEmpleos = async (req, res) => {
  try {
    const empleos = await EmpleoModel.findAll();
    res.json(empleos);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Mostrar una vacante

export const getEmpleo = async (req, res) => {
  try {
    const empleo = await EmpleoModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(empleo[0]);
    console.log(res);
  } catch (error) {
    res.json({ message: error.message });
  }
};
