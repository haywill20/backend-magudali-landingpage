import CreateEmpleoModel from "../models/CreateEmpleoModel.js";

export const createJobController = async (req, res) => {
    try {
        const {
            nombreCargo,
            rol,
            idioma,
            nivelIngles,
            tecnologias,
            rateMaximo,
            rateMinimo,
            tiempoDuracion,
            aniosExperiencias,
            descripciones,
            responsabilidades,
        } = req.body;
        
        const descripcionesString = descripciones.join(",");
        const responsabilidadesString = responsabilidades.join(",");

        const newJob = await CreateEmpleoModel.create({
            cargo: nombreCargo,
            rol,
            idioma,
            nivel_ingles: nivelIngles,
            tecnologias,
            rate_maximo: rateMaximo,
            rate_minimo: rateMinimo,
            tiempo: tiempoDuracion,
            años_experiencia: aniosExperiencias,
            descripcion: descripcionesString,
            responsabilidades: responsabilidadesString,
        });

        res.status(200).json(newJob);
    } catch (error) {
        console.error("Error al crear empleo:", error);
        res.status(500).json({ error: "Error al crear empleo" });
    }
}