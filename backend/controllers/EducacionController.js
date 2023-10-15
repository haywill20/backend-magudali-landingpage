// importamos el modelo
import EducacionModel from "../models/EducacionModel.js";

// Método para crear registros de educación
export const createEducacion = async (req, res) => {
  try {
    const educaciones = req.body; // El arreglo de objetos

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
