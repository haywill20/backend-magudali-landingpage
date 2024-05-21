//importamos el modelo
import EmpleoModel from "../models/EmpleoModel.js";

//Metodos para el CRUD

//Mostrar todas las vacantes
export const getAllEmpleos = async (req, res) => {
  try {
    const empleos = await EmpleoModel.findAll();
    if ( empleos.length === 0 ) {
      res.status(204).json({ message: "No hay empleos disponibles" });
    } else if( empleos.length > 0) {
      res.status(200).json(empleos);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener los empleos", error: error.message });
  }
};

//Mostrar una vacante
export const getEmpleo = async (req, res) => {
  const empleoId = req.params.id;

  const empleoFound = await EmpleoModel.findOne({
    where: { id: empleoId },
  });

  if (!empleoFound) {
    return res.status(204).json({ message: "Empleo no encontrado" });
  }

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
      return res.status(204).json({ message: "Empleo no encontrado" });
    }

    res.json(empleo[0]);
    //console.log(res);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener el empleo", error: error.message });
  }
};

//Crear una vacante
export const createEmpleo = async (req, res) => {
  try {
    const empleo = await EmpleoModel.create(req.body);
    // valida si el objeto devuelto por create() NO está vacío
    if( Object.keys(empleo).length !== 0 && empleo.constructor !== Object ) {
      res.status(200).json(empleo);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear el empleo", error: error.message });
  }
};

//Actualizar una vacante
export const updateEmpleo = async (req, res) => {
  const empleoId = req.params.id;

  const empleoFound = await EmpleoModel.findOne({
    where: { id: empleoId },
  });

  if (!empleoFound) {
    return res.status(204).json({ message: "Empleo no encontrado" });
  }

  if (!empleoId || isNaN(parseInt(empleoId))) {
    return res.status(400).json({ message: "ID de empleo no válido" });
  }

  try {
    const empleo = await EmpleoModel.update(req.body, {
      where: {
        id: empleoId,
      },
    });

    if (!empleo) {
      return res.status(204).json({ message: "Empleo no encontrado" });
    }

    res.status(200).json({ message: "Empleo actualizado" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al actualizar el empleo", error: error.message });
  }
};

//Eliminar una vacante
export const deleteEmpleo = async (req, res) => {
  const empleoId = req.params.id;

  const empleoFound = await EmpleoModel.findOne({
    where: { id: empleoId },
  });

  if (!empleoFound) {
    return res.status(204).json({ message: "Empleo no encontrado" });
  }

  if (!empleoId || isNaN(parseInt(empleoId))) {
    return res.status(400).json({ message: "ID de empleo no válido" });
  }

  try {
    const empleo = await EmpleoModel.destroy({
      where: {
        id: empleoId,
      },
    });
    
    res.status(200).json({ message: "Empleo eliminado" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar el empleo", error: error.message });
  }
};
