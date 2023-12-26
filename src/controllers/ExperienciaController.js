import ExperienciaModel from "../models/ExperienciaModel.js";

//Metodo para crear registro de experiencias laborales
export const createExperiencia = async (req, res) => {
  try {
    const experiencias = req.body; // El arreglo de objetos

    if (!Array.isArray(experiencias) || experiencias.length === 0) {
      return res
        .status(400)
        .json({ error: "Datos de experiencia laboral no válidos" });
    }

    experiencias.forEach(async (experiencia) => {
      //insertar cada elemento en la base de datos

      await ExperienciaModel.create({
        datosGenerales_id: experiencia.datosGenerales_id,
        empresa: experiencia.empresaName,
        mesInicioExperiencia: experiencia.mesInicioExperiencia,
        anioInicioExperiencia: experiencia.anioInicioExperiencia,
        mesFinExperiencia: experiencia.mesFinExperiencia,
        anioFinExperiencia: experiencia.anioFinExperiencia,
        cargo: experiencia.cargo,
        actividades: experiencia.actividades,
        tecnologias: experiencia.tecnologias,
      });
    });
    // Envía una respuesta exitosa
    res.status(200).json({ message: "Experiencia laboral enviada con éxito" });
  } catch (error) {
    // Maneja errores, si los hay
    console.error("Error al insertar Experiencia laboral:", error);
    // Envía una respuesta de error
    res.status(500).json({ error: "Error al insertar Experiencia laboral" });
  }
};

//Metodo para obtener registros de experiencias laborales
export const getExperiencia = async (req, res) => {
  try {
    // Obtiene el ID de los parámetros de ruta
    const { id } = req.params;
    // Busca la experiencia que coincida con el ID de ruta
    const experiencia = await ExperienciaModel.findByPk(id);

    if (!experiencia) {
      return res
        .status(404)
        .json({ error: "No existe una experiencia con ese ID" });
    }
    // Envía una respuesta exitosa con la experiencia
    res.status(200).json({
      message: "Experiencia obtenida con éxito",
      data: experiencia,
    });
  } catch (error) {
    // Maneja errores, si los hay
    console.error("Error en getExperiencia:", error);
    // Envía una respuesta de error
    res.status(500).json({ error: "Error al obtener la experiencia" });
  }
};

//Metodo para obtener todos los registros de experiencias laborales
export const getAllExperiencias = async (req, res) => {
  try {
    // Busca todas las experiencias
    const experiencias = await ExperienciaModel.findAll();

    if (!experiencias) {
      return res
        .status(404)
        .json({ error: "No existen experiencias registradas" });
    }
    // Envía una respuesta exitosa con las experiencias
    res.status(200).json({
      message: "Experiencias obtenidas con éxito",
      data: experiencias,
    });
  } catch (error) {
    // Maneja errores, si los hay
    console.error("Error en getAllExperiencias:", error);
    // Envía una respuesta de error
    res.status(500).json({ error: "Error al obtener las experiencias" });
  }
};

//Metodo para actualizar registros de experiencias laborales
export const updateExperiencia = async (req, res) => {
  try {
    // Obtiene el ID de los parámetros de ruta
    const { id } = req.params;
    // Obtiene los datos del cuerpo de la solicitud
    const experiencia = req.body;
    // Busca una experiencia que coincida con el ID de ruta
    const experienciaSelect = await ExperienciaModel.findByPk(id);

    if (!experienciaSelect) {
      return res
        .status(404)
        .json({ error: "No existe una experiencia con ese ID" });
    }
    // Actualiza la experiencia
    await experienciaSelect.update(experiencia);
    // Envía una respuesta exitosa
    res.status(200).json({ message: "Experiencia actualizada con éxito" });
  } catch (error) {
    // Maneja errores, si los hay
    console.error("Error en updateExperiencia:", error);
    // Envía una respuesta de error
    res.status(500).json({ error: "Error al actualizar la experiencia" });
  }
};

//Metodo para eliminar registros de experiencias laborales
export const deleteExperiencia = async (req, res) => {
  try {
    // Obtiene el ID de los parámetros de ruta
    const { id } = req.params;
    // Busca una experiencia que coincida con el ID de ruta
    const experiencia = await ExperienciaModel.findByPk(id);

    if (!experiencia) {
      return res
        .status(404)
        .json({ error: "No existe una experiencia con ese ID" });
    }
    // Elimina la experiencia
    await experiencia.destroy();
    // Envía una respuesta exitosa
    res.status(200).json({ message: "Experiencia eliminada con éxito" });
  } catch (error) {
    // Maneja errores, si los hay
    console.error("Error en deleteExperiencia:", error);
    // Envía una respuesta de error
    res.status(500).json({ error: "Error al eliminar la experiencia" });
  }
};