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

// Obtener todos los íconos
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
      }); // Log de error de conexión
      return res
        .status(503)
        .json({
          message:
            "Servicio no disponible. Error de conexión a la base de datos.",
        }); // 503 - Service Unavailable
    }

    if (error instanceof Sequelize.DatabaseError) {
      logger.error("Error en la consulta a la base de datos:", {
        error: error.message,
      }); // Log de error de consulta
      return res
        .status(500)
        .json({
          message:
            "Error al obtener los íconos. Problema en la consulta a la base de datos.",
        }); // 500 - Error Interno del Servidor
    }

    logger.error("Error inesperado al obtener los íconos:", {
      error: error.message,
    }); // Log de error inesperado
    res.status(500).json({ message: "Error inesperado al obtener los íconos" }); // 500 - Error Interno del Servidor
  }
};

// Obtener un icono por ID
export const getIcon = async (req, res) => {
  try {
    const icon = await IconModel.findByPk(req.params.id);
    if (!icon) return res.status(404).json({ message: "Ícono no encontrado" }); // 404 - No Encontrado
    res.status(200).json(icon); // 200 - OK
  } catch (error) {
    logger.error("Error inesperado al obtener el ícono:", {
      error: error.message,
    }); // Log de error inesperado
    res
      .status(500)
      .json({
        message: "Error inesperado al obtener el ícono",
        error: error.message,
      }); // 500 - Error Interno del Servidor
  }
};

// Crear un nuevo icono
export const createIcon = async (req, res) => {
  try {
    const { nombre, valor } = req.body;
    const newIcon = await IconModel.create({ nombre, valor });
    res.status(201).json(newIcon); // 201 - Creado
  } catch (error) {
    logger.error("Error inesperado al crear el ícono:", {
      error: error.message,
    }); // Log de error inesperado
    res
      .status(500)
      .json({
        message: "Error inesperado al crear el ícono",
        error: error.message,
      }); // 500 - Error Interno del Servidor
  }
};

// Procedimiento para actualizar un icono por ID
export const updateIcon = async (req, res) => {
  const iconId = req.params.id;

  // Verificar que el ID del ícono sea válido
  if (!iconId || isNaN(parseInt(iconId))) {
    return res.status(400).json({ message: "ID de ícono no válido" });
  }

  try {
    // Verificar que el ícono exista en la base de datos
    const icon = await IconModel.findByPk(iconId);

    if (!icon) {
      return res.status(404).json({ message: "Ícono no encontrado" });
    }

    // Validaciones adicionales para los campos del ícono
    const { nombre, valor } = req.body;
    if (!nombre || !valor) {
      return res.status(400).json({ message: "Nombre y valor son requeridos" });
    }

    // Actualizar el ícono
    await IconModel.update(req.body, {
      where: {
        id: iconId,
      },
    });

    res.status(200).json({ message: "Ícono actualizado correctamente" });
  } catch (error) {
    logger.error("Error inesperado al actualizar el ícono:", {
      error: error.message,
    }); // Log de error inesperado
    res
      .status(500)
      .json({
        message: "Error inesperado al actualizar el ícono",
        error: error.message,
      }); // 500 - Error Interno del Servidor
  }
};

// Eliminar un icono por ID
export const deleteIcon = async (req, res) => {
  try {
    const icon = await IconModel.findByPk(req.params.id);
    if (!icon) return res.status(404).json({ message: "Ícono no encontrado" }); // 404 - No Encontrado
    await icon.destroy();
    res.status(204).send(); // 204 - Sin Contenido
  } catch (error) {
    logger.error("Error inesperado al eliminar el ícono:", {
      error: error.message,
    }); // Log de error inesperado
    res
      .status(500)
      .json({
        message: "Error inesperado al eliminar el ícono",
        error: error.message,
      }); // 500 - Error Interno del Servidor
  }
};
