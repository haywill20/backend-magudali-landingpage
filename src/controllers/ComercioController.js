//importamos el modelo
import ComercioModel from "../models/ComercioModel.js";

//metodo para Mostrar todos los comercios

export const getAllComercios = async (req, res) => {
  try {
    const comercios = await ComercioModel.findAll();
    res.json(comercios);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los comercios",
      error: error.message,
    });
  }
};

//Procedimiento para mostrar un solo comercio
export const getComercio = async (req, res) => {
  const comercioId = req.params.id;

  if (!comercioId || isNaN(parseInt(comercioId))) {
    return res.status(400).json({ message: "ID de comercio no valido" });
  }

  try {
    const comercio = await ComercioModel.findAll({
      where: {
        id: comercioId,
      },
    });

    if (!comercio) {
      return res.status(404).json({ message: "Comercio no encontrado" });
    }
    res.json(comercio[0]);
    console.log(res);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener el comercio", error: error.message });
  }
};
