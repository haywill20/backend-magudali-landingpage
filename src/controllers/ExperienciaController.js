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
