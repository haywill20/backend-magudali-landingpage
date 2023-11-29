//importamos el modelo
import DatosGeneralesModel from "../models/DatosGeneralesModel.js";
import { body, validationResult } from 'express-validator';

//**Metodos para el CRUD**/

//Metodo para Crear un Registro de datos generales
export const createDatoGeneral = async (req, res) => {
  try {
    // valida que los campos no esten vacios
    await body('nombre').notEmpty().run(req);
    await body('apellido').notEmpty().run(req);
    await body('correo').notEmpty().run(req);
    await body('cod').notEmpty().run(req);
    await body('telefono').notEmpty().run(req);
    await body('pais').notEmpty().run(req);
    await body('disponibilidad').notEmpty().run(req);
    await body('vacante').notEmpty().run(req);
    await body('aniosExperiencia').notEmpty().run(req);
    await body('expectativaSalario').notEmpty().run(req);
    await body('resumen').notEmpty().run(req);
    await body('sistemasOperativos').notEmpty().run(req);
    await body('lenguajesProg').notEmpty().run(req);
    await body('herramientasProg').notEmpty().run(req);
    await body('librerias').notEmpty().run(req);
    await body('basesDatos').notEmpty().run(req);
    await body('clouds').notEmpty().run(req);
    await body('español').notEmpty().run(req);
    await body('ingles').notEmpty().run(req);
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    };

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
