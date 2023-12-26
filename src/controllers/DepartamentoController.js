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

//Procedimiento para mostrar un solo departamento
export const getDepartamento = async (req, res) => {
  const departamentoId = req.params.id;

  const departamento = await DepartamentoModel.findByPk(departamentoId);

  if (!departamento) {
    return res.status(404).json({ message: "Departamento no encontrado" });
  }

  if (!departamentoId || isNaN(parseInt(departamentoId))) {
    return res.status(400).json({ message: "ID de departamento no valido" });
  }

  try {
    res.json({
      message: "Departamento encontrado satisfactoriamente",
      data: departamento,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener el departamento", error: error.message });
  }
};

//Procedimiento para crear un departamento
export const createDepartamento = async (req, res) => {
  try {
    const departamento = await DepartamentoModel.create(req.body);
    res.status(200).json({
      message: "Departamento creado correctamente",
      data: departamento,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el departamento",
      error: error.message,
    });
  }
};

//Procedimiento para actualizar un departamento
export const updateDepartamento = async (req, res) => {
  const departamentoId = req.params.id;

  const departamento = await DepartamentoModel.findByPk(departamentoId);

  if (!departamento) {
    return res.status(404).json({ message: "Departamento no encontrado" });
  }

  if (!departamentoId || isNaN(parseInt(departamentoId))) {
    return res.status(400).json({ message: "ID de departamento no valido" });
  }

  try {
    await departamento.update(req.body);
    res.json({
      message: "Departamento actualizado correctamente",
      data: departamento,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar el departamento",
      error: error.message,
    });
  }
};

//Procedimiento para eliminar un departamento
export const deleteDepartamento = async (req, res) => {
  const departamentoId = req.params.id;

  const departamento = await DepartamentoModel.findByPk(departamentoId);

  if (!departamento) {
    return res.status(404).json({ message: "Departamento no encontrado" });
  }

  if (!departamentoId || isNaN(parseInt(departamentoId))) {
    return res.status(400).json({ message: "ID de departamento no valido" });
  }

  try {
    await departamento.destroy();
    res.json({ message: "Departamento eliminado correctamente" });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar el departamento",
      error: error.message,
    });
  }
};