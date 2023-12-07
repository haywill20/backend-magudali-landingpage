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

  const comercio = await ComercioModel.findByPk(comercioId);

  if (!comercio) {
    return res.status(404).json({ message: "Comercio no encontrado" });
  }

  if (!comercioId || isNaN(parseInt(comercioId))) {
    return res.status(400).json({ message: "ID de comercio no valido" });
  }

  try {
    res.json({
      message: "Comercio encontrado satisfactoriamente",
      data: comercio,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener el comercio", error: error.message });
  }
};

//Procedimiento para crear un comercio
export const createComercio = async (req, res) => {
  try {
    const comercio = await ComercioModel.create(req.body);
    res.status(200).json({
      message: "Comercio creado correctamente",
      data: comercio,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el comercio",
      error: error.message,
    });
  }
};

//Procedimiento para actualizar un comercio
export const updateComercio = async (req, res) => {
  const comercioId = req.params.id;

  //verificamos que el id exista en la base de datos
  const comercio = await ComercioModel.findAll({
    where: {
      id: comercioId,
    },
  });

  if (!comercio) {
    return res.status(404).json({ message: "Comercio no encontrado" });
  }

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

    await ComercioModel.update(req.body, {
      where: {
        id: comercioId,
      },
    });

    res.json({ message: "Comercio actualizado correctamente" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al actualizar el comercio", error: error.message });
  }
};

//Procedimiento para eliminar un comercio
export const deleteComercio = async (req, res) => {
  const comercioId = req.params.id;

  //verificamos que el id exista en la base de datos
  const comercio = await ComercioModel.findByPk(comercioId);

  if (!comercio) {
    return res.status(404).json({ message: "Comercio no encontrado" });
  }

  if (!comercioId || isNaN(parseInt(comercioId))) {
    return res.status(400).json({ message: "ID de comercio no valido" });
  }

  try {
    await ComercioModel.destroy({
      where: {
        id: comercioId,
      },
    });
    res.json({ message: "Comercio eliminado correctamente" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar el comercio", error: error.message });
  }
};
