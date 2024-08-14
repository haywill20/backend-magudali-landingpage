import IconModel from "../../models/admin/IconModel.js"; // Asegúrate de importar tu modelo correctamente
import { Sequelize } from "sequelize"; // Importa Sequelize para manejar errores específicos
import winston from "winston"; // Importa winston

// Configurar winston
const logger = winston.createLogger({
  level: "error",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "error.log" }),
  ],
});

//obtener todos los iconos
export const getAllIcons = async (req, res) => {
  try {
    const icons = await IconModel.findAll();

    if (icons.length === 0) {
      return res.status(204).json({ message: "No hay íconos disponibles" }); // 204 - No Content
    }

    res.status(200).json(icons); // 200 - OK
  } catch (error) {
    if (error instanceof Sequelize.ConnectionError) {
      logger.error("Error de conexión a la base de datos:", {
        error: error.message,
      });
      return res
        .status(503)
        .json({
          message:
            "Servicio no disponible. Error de conexión a la base de datos.",
        });
    }

    if (error instanceof Sequelize.DatabaseError) {
      logger.error("Error en la consulta a la base de datos:", {
        error: error.message,
      });
      return res
        .status(500)
        .json({
          message:
            "Error al obtener los íconos. Problema en la consulta a la base de datos.",
        });
    }

    logger.error("Error inesperado al obtener los íconos:", {
      error: error.message,
    });
    res.status(500).json({ message: "Error inesperado al obtener los íconos" });
  }
};

//obtener icono por ID
export const getIcon = async (req, res) => {
  try {
    const iconId = parseInt(req.params.id);

    if (isNaN(iconId)) {
      return res.status(400).json({ message: "ID de ícono no válido" });
    }

    const icon = await IconModel.findByPk(iconId);

    if (!icon) {
      return res.status(404).json({ message: "Ícono no encontrado" });
    }

    res.status(200).json(icon);
  } catch (error) {
    logger.error("Error inesperado al obtener el ícono:", {
      error: error.message,
    });
    res.status(500).json({ message: "Error inesperado al obtener el ícono" });
  }
};


// Crear un nuevo icono
export const createIcon = async (req, res) => {
  const transaction = await IconModel.sequelize.transaction();

  try {
    const { nombre, valor } = req.body;

    if (!nombre || !valor) {
      await transaction.rollback();
      return res.status(400).json({ message: "Nombre y valor son requeridos" });
    }

    const newIcon = await IconModel.create({ nombre, valor }, { transaction });
    await transaction.commit();

    res.status(201).json(newIcon);
  } catch (error) {
    await transaction.rollback();
    logger.error("Error inesperado al crear el ícono:", {
      error: error.message,
    });
    res.status(500).json({ message: "Error inesperado al crear el ícono" });
  }
};


// Procedimiento para actualizar un icono por ID
export const updateIcon = async (req, res) => {
  const transaction = await IconModel.sequelize.transaction();
  const iconId = parseInt(req.params.id);

  try {
    if (isNaN(iconId)) {
      await transaction.rollback();
      return res.status(400).json({ message: "ID de ícono no válido" });
    }

    const icon = await IconModel.findByPk(iconId);

    if (!icon) {
      await transaction.rollback();
      return res.status(404).json({ message: "Ícono no encontrado" });
    }

    const { nombre, valor } = req.body;
    if (!nombre || !valor) {
      await transaction.rollback();
      return res.status(400).json({ message: "Nombre y valor son requeridos" });
    }

    await IconModel.update({ nombre, valor }, { where: { id: iconId }, transaction });
    await transaction.commit();

    res.status(200).json({ message: "Ícono actualizado correctamente" });
  } catch (error) {
    await transaction.rollback();
    logger.error("Error inesperado al actualizar el ícono:", {
      error: error.message,
    });
    res.status(500).json({ message: "Error inesperado al actualizar el ícono" });
  }
};


// Eliminar un icono por ID
export const deleteIcon = async (req, res) => {
  const transaction = await IconModel.sequelize.transaction();

  try {
    const iconId = parseInt(req.params.id);

    if (isNaN(iconId)) {
      await transaction.rollback();
      return res.status(400).json({ message: "ID de ícono no válido" });
    }

    const icon = await IconModel.findByPk(iconId);

    if (!icon) {
      await transaction.rollback();
      return res.status(404).json({ message: "Ícono no encontrado" });
    }

    await icon.destroy({ transaction });
    await transaction.commit();

    res.status(204).send(); // 204 - No Content
  } catch (error) {
    await transaction.rollback();
    logger.error("Error inesperado al eliminar el ícono:", {
      error: error.message,
    });
    res.status(500).json({ message: "Error inesperado al eliminar el ícono" });
  }
};

