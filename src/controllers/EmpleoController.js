//importamos el modelo
import EmpleoModel from "../models/EmpleoModel.js";

//Metodos para el CRUD

//Mostrar todas las vacantes
export const getAllEmpleos = async (req, res) => {
  try {
    const empleos = await EmpleoModel.findAll();
    res.json(empleos);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener los empleos", error: error.message });
  }
};

//Mostrar una vacante

export const getEmpleo = async (req, res) => {
  const empleoId = req.params.id;

  if (!empleoId || isNaN(parseInt(empleoId))) {
    return res.status(400).json({ message: "ID de empleo no válido" });
  }

  try {
    const empleo = await EmpleoModel.findAll({
      where: {
        id: empleoId,
      },
    });

    if (!empleo) {
      return res.status(404).json({ message: "Empleo no encontrado" });
    }

    res.json(empleo[0]);
    console.log(res);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener el empleo", error: error.message });
  }
};
