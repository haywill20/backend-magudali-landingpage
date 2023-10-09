//importamos el modelo
import DatosGeneralesModel from "../models/DatosGeneralesModel.js";

//**Metodos para el CRUD**/

//Metodo para Crear un Registro de datos generales
export const createDatoGeneral = async (req, res) => {
  try {
    await DatosGeneralesModel.create(req.body);
    res.json({
      message: "¡Registro creado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
