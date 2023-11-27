// importamos el modelo
import DepartamentoModel from "../models/Departamento.js";

//Metodo para mostrar todos los departamentos de departamentos
export const getAllDepartamentos = async (req, res) => {
  try {
    const departamentos = await DepartamentoModel.findAll();
    res.json(departamentos);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los departamentos",
      error: error.message,
    });
  }
};
