//importamos el modelo
import EmpleoModel from "../models/EmpleoModel.js";

//Metodos para el CRUD

//Mostrar todas las vacantes
export const getAllEmpleos = async (req, res) => {
  try {
    const empleos = await EmpleoModel.findAll();
    if ( empleos.length === 0 ) {
      res.status(200).json({ message: "NO HAY EMPLEOS DISPONIBLES" });
    } else if( empleos.length > 0) {
      res.status(200).json(empleos);
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "ERROR INTERNO AL OBTENER EMPLEOS", error: err.message });
  }
};

//Mostrar una vacante
export const getEmpleo = async (req, res) => {
  const empleoId = req.params.id;

  const empleoFound = await EmpleoModel.findOne({
    where: { id: empleoId },
  });

  if (!empleoId || isNaN(parseInt(empleoId))) {
    return res.status(400).json({ message: "ID EMPLEO NO VALIDO" });
  }

  if (!empleoFound) {
    return res.status(200).json({
      message: "EMPLEO NO ENCONTRADO"
    });
  }

  try {
    const empleo = await EmpleoModel.findAll({
      where: {
        id: empleoId,
      },
    });

    if (!empleo) {
      return res.status(200).json({ message: "EMPLEO NO ENCONTRADO" });
    }

    res.json(empleo[0]);
  } catch (err) {
    res
      .status(500)
      .json({ message: "ERROR INTERNO AL OBTENER EMPLEO", error: err.message });
  }
};

//Crear una vacante
export const createEmpleo = async (req, res) => {
  try {
    const empleo = await EmpleoModel.create(req.body);
    // valida si el objeto devuelto por create() NO está vacío
    if( Object.keys(empleo).length !== 0 && empleo.constructor !== Object ) {
      res.status(201).json(empleo);
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "ERROR INTERNO AL CREAR EMPLEO", error: err.message });
  }
};

//Actualizar una vacante
export const updateEmpleo = async (req, res) => {
  const empleoId = req.params.id;

  if (!empleoId || isNaN(parseInt(empleoId))) {
    return res.status(400).json({ message: "ID EMPLEO NO VALIDO" });
  }

  const empleoFound = await EmpleoModel.findOne({
    where: { id: empleoId },
  });

  if (!empleoFound) {
    return res.status(200).json({ message: "EMPLEO NO ENCONTRADO" });
  }

  try {
    const empleo = await EmpleoModel.update(req.body, {
      where: {
        id: empleoId,
      },
    });

    if (!empleo) {
      return res.status(200).json({ message: "EMPLEO NO ENCONTRADO" });
    }

    res.status(200).json({ message: "EMPLEO ACTUALIZADO" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "ERROR INTERNO AL ACTUALIZAR", error: err.message });
  }
};

//Eliminar una vacante
export const deleteEmpleo = async (req, res) => {
  const empleoId = req.params.id;

  if (!empleoId || isNaN(parseInt(empleoId))) {
    return res.status(400).json({ message: "ID EMPLEO NO VALIDO" });
  }

  const empleoFound = await EmpleoModel.findOne({
    where: { id: empleoId },
  });

  if (!empleoFound) {
    return res.status(200).json({ message: "EMPLEO NO ENCONTRADO" });
  }

  try {
    const empleo = await EmpleoModel.destroy({
      where: {
        id: empleoId,
      },
    });
    
    res.status(200).json({ message: "EMPLEO ELIMINADO" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "ERROR INTERNO AL ELIMINAR EMPLEO", error: err.message });
  }
};
