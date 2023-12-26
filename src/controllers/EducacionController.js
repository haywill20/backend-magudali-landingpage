// importamos el modelo
import EducacionModel from "../models/EducacionModel.js";

// Método para crear registros de educación
export const createEducacion = async (req, res) => {
  try {
    const educaciones = req.body; // El arreglo de objetos

    if (educaciones.length === 0) {
      return res.status(400).json({
        message: "El arreglo de educación no puede estar vacío",
      });
    }

    educaciones.forEach(async (educacion) => {
      // Insertar cada elemento en la base de datos
      await EducacionModel.create({
        datosGenerales_id: educacion.datosGenerales_id,
        institucionEducacion: educacion.institucion,
        mesFinEducacion: educacion.mesFinEducacion,
        anioFinEducacion: educacion.anioFinEducacion,
        carrera: educacion.carrera,
      });
    });

    // Envía una respuesta exitosa
    res.status(200).json({ message: "Educación enviada con éxito" });
  } catch (error) {
    // Maneja errores, si los hay
    console.error("Error al insertar Educación:", error);
    // Envía una respuesta de error
    res.status(500).json({ error: "Error al insertar Educación" });
  }
};

// Método para obtener registros de educación
export const getEducacion = async (req, res) => {
  try {
    // Obtiene el ID de los parámetros de ruta
    const { id } = req.params;
    // Busca la educación que coincida con el ID de ruta
    const educacion = await EducacionModel.findByPk(id);

    if (!educacion) {
      return res
        .status(404)
        .json({ error: "No existe una educación con ese ID" });
    }
    // Envía una respuesta exitosa con la educación
    res.status(200).json({
      message: "Educación obtenida con éxito",
      data: educacion,
    });
  } catch (error) {
    // Maneja errores, si los hay
    console.error("Error en getEducacion:", error);
    // Envía una respuesta de error
    res.status(500).json({ error: "Error al obtener la educación" });
  }
};

// Método para obtener todos los registros de educación
export const getAllEducaciones = async (req, res) => {
  try {
    // Busca todas las educaciones
    const educaciones = await EducacionModel.findAll();
    // Envía una respuesta exitosa con las educaciones
    res.status(200).json({
      message: "Educaciones obtenidas con éxito",
      data: educaciones,
    });
  } catch (error) {
    // Maneja errores, si los hay
    console.error("Error en getAllEducaciones:", error);
    // Envía una respuesta de error
    res.status(500).json({ error: "Error al obtener las educaciones" });
  }
};

// Método para actualizar registros de educación
export const updateEducacion = async (req, res) => {
  try {
    // Obtiene el ID de los parámetros de ruta
    const { id } = req.params;
    // Obtiene el cuerpo de la solicitud
    const educacion = req.body;
    // Busca la educación que coincida con el ID de ruta
    const educacionFound = await EducacionModel.findByPk(id);

    if (!educacionFound) {
      return res
        .status(404)
        .json({ error: "No existe una educación con ese ID" });
    }
    // Actualiza la educación
    await educacionFound.update(educacion);
    // Envía una respuesta exitosa
    res.status(200).json({ message: "Educación actualizada con éxito" });
  } catch (error) {
    // Maneja errores, si los hay
    console.error("Error en updateEducacion:", error);
    // Envía una respuesta de error
    res.status(500).json({ error: "Error al actualizar la educación" });
  }
};

// Método para eliminar registros de educación
export const deleteEducacion = async (req, res) => {
  try {
    // Obtiene el ID de los parámetros de ruta
    const { id } = req.params;
    // Busca la educación que coincida con el ID de ruta
    const educacion = await EducacionModel.findByPk(id);

    if (!educacion) {
      return res
        .status(404)
        .json({ error: "No existe una educación con ese ID" });
    }
    // Elimina la educación
    await educacion.destroy();
    // Envía una respuesta exitosa
    res.status(200).json({ message: "Educación eliminada con éxito" });
  } catch (error) {
    // Maneja errores, si los hay
    console.error("Error en deleteEducacion:", error);
    // Envía una respuesta de error
    res.status(500).json({ error: "Error al eliminar la educación" });
  }
};
