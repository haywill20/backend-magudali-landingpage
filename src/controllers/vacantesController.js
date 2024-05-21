import vacantesModel from "../models/vacantesModel.js";

export const getAllVacantes = async (req, res) => {
    try {
        const vacantes = await vacantesModel.findAll();
        if( vacantes.length === 0 ) {
            res.status(204).json({ message: "No hay ninguna vacante disponible" });
        } else if( vacantes.length > 0) {
            res.status(200).json(vacantes);
        }
    } catch( error ) {
        res.status(500).json({ message: "Error al obtener todos las vacantes", error: error.message });
    }
};

export const getVacante = async (req, res) => {
    const vacanteID = req.params.id;

    try {
        const vacanteFound = await vacantesModel.findOne({
            where: { id: vacanteID }
        });

        if ( !vacanteFound ) {
            return res.status(204).json({ message: "¡Vacante no encontrada!" });
        }

        if ( !vacanteID || isNaN(parseInt(vacanteID)) ) {
            return res.status(400).json({
                message: "ID Vacante no valido"
            });
        }

    } catch(err) {
        res.status(500).json({
            message: "Ocurrio un error al obtener vacante",
            error: err.message
        });
    }

    try {
        const vacante = await vacantesModel.findAll({
            where: {
                id: vacanteID
            }
        });

        if ( !vacante ) {
            return res.status(204).json({ message: "Vacante no Encontrada" });
        }

        res.json(vacante[0]);
    } catch(err) {
        res.status(500).json({
            message: "Ocurrio un error al obtener vacante",
            error: err.message
        });
    }
};

export const createVacante = async (req, res) => {
    try {
        const vacante = await vacantesModel.create(req.body);
        if ( Object.keys(vacante).length !== 0 && vacante.constructor !== Object ) {
            return res.status(200).json(vacante);
        }
    } catch(err) {
        res.status(500).json({
            message : "Error al crear la vacante",
            error: err.message
        });
    }
};

export const updateVacante = async (req, res) => {
    const vacanteID = req.params.id;
    try {
        const vacanteFound = await vacantesModel.findOne({
            where: { id: vacanteID }
        });

        if( !vacanteFound ) {
            return res.status(204).json({ message: "Vacante no Encontrada" })
        }

        if ( !vacanteID || isNaN(parseInt(vacanteID)) ) {
            return res.status(400).json({ message: "ID Vacante Invalido"});
        }
    } catch(err) {
        res.status(500).json({
            message: "Error Interno al Actualizar",
            error: err.message
        });
    }

    try {
        const vacante = await vacantesModel.update(req.body, {
            where: {
                id: vacanteID
            }
        });

        if( !vacante ) {
            return res.status(204).json({ message: "Vacante no Encontrada" });
        }

        res.status(200).json({ message: "Vacante Actualizada" });
    } catch(err) {
        res.status(500).json({
            message: "Error Interno al Actualizar",
            error: err.message
        });
    }
};

export const deleteVacante = async (req, res) => {
    const vacanteID = req.params.id;

    try {
        const vacanteFound = await vacantesModel.findOne({
            where: { id: vacanteID}
        });

        if( !vacanteFound ) {
            return res.status(204).json({ message: "Vacante no Encontrada" });
        }

        if( !vacanteID || isNaN(parseInt(vacanteID)) ) {
            return res.status(400).json({ message: "ID Vacante no Valido"});
        }

        try {
            const vacante = await vacantesModel.destroy({
                where: {
                    id: vacanteID
                }
            });

            res.status(200).json({ message: "Vacante Eliminada" });
        } catch(err) {
            res.status(500).json({
                message: "Error Interno al Eliminar",
                error: err.message
            });
        }
    } finally {
        res.status(500).json({
            message: "Error Interno Extraer Vacante",
        });
    }
};