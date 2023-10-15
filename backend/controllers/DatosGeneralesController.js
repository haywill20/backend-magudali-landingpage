//importamos el modelo
import DatosGeneralesModel from "../models/DatosGeneralesModel.js";

//**Metodos para el CRUD**/

//Metodo para Crear un Registro de datos generales
export const createDatoGeneral = async (req, res) => {
  try {
    await DatosGeneralesModel.create(req.body);
    // Envía una respuesta exitosa
    res.status(200).json({ message: "Datos Generales enviados con éxito" });
  } catch (error) {
    // Maneja errores, si los hay
    console.error("Error al insertar Datos Generales:", error);
    // Envía una respuesta de error
    res.status(500).json({ error: "Error al insertar Datos Generales" });
  }
};
