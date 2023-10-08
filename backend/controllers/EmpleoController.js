import EmpleoModel from "../models/EmpleoModel.js";

//**Metodos para el crud */

//Metodo para mostrar todos los registros
export const getAllEmpleos = async (req, res) => {
  try {
    const empleos = await EmpleoModel.findAll();
    res.json(empleos);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Metodo para mostrar solo un empleo

export const getEmpleo = async (req, res) => {
  try {
    const empleo = await EmpleoModel.findAll({
      where: { id: req.params.id },
    });
    res.json(empleo[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};
