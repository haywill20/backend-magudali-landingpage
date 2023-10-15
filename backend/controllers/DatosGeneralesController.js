//importamos el modelo
import DatosGeneralesModel from "../models/DatosGeneralesModel.js";

//**Metodos para el CRUD**/

//Metodo para Crear un Registro de datos generales
export const createDatoGeneral = async (req, res) => {
  try {
    const datosGenerales = await DatosGeneralesModel.create(req.body);

    // Acceder al ID de los datos generales recién creados
    const idDatosGenerales = datosGenerales.id;
    // Envía una respuesta exitosa
    res.status(200).json({
      message: "Datos Generales enviados con éxito",
      id: idDatosGenerales,
    });
  } catch (error) {
    // Maneja errores, si los hay
    console.error("Error al insertar Datos Generales:", error);
    // Envía una respuesta de error
    res.status(500).json({ error: "Error al insertar Datos Generales" });
  }
};
