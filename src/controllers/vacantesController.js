import vacantesModel from "../models/vacantesModel.js";

export const getAllVacantes = async (req, res) => {
    try {
        const vacantes = await vacantesModel.findAll();
        if( vacantes.length === 0 ) {
            res.status(200).json({ message: "NO HAY VACANTES DISPONIBLES" });
        } else if( vacantes.length > 0) {
            res.status(200).json(vacantes);
        }
    } catch( err ) {
        res.status(500).json({ message: "Error Interno al Obtener Vacantes" });
    }
};

export const getVacante = async (req, res) => {
    const vacanteID = req.params.id;

    try {
        const vacanteFound = await vacantesModel.findOne({
            where: { id: vacanteID }
        });

        if ( !vacanteID || isNaN(parseInt(vacanteID)) ) {
            return res.status(400).json({
                message: "ID PASADO NO ES VALIDO"
            });
        }

        if ( !vacanteFound ) {
            return res.status(200).json({
                message: "VACANTE NO ENCONTRADA"
            });
        }

    } catch(err) {
        res.status(500).json({
            message: "Ocurrio un Error Interno al Obtener Vacante",
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
            return res.status(200).json({ message: "VACANTE NO ENCONTRADA" });
        }

        res.status(200).json(vacante[0]);
    } catch(err) {
        res.status(500).json({
            message: "Ocurrio un Error Interno al Obtener Vacante",
            error: err.message
        });
    }
};

export const createVacante = async (req, res) => {
    try {
        const vacante = await vacantesModel.create(req.body);
        if ( Object.keys(vacante).length !== 0 && vacante.constructor !== Object ) {
            return res.status(201).json(vacante);
        }
    } catch(err) {
        res.status(500).json({
            message : "ERROR INTERNO AL CREAR LA VACANTE",
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

        if ( !vacanteID || isNaN(parseInt(vacanteID)) ) {
            return res.status(400).json({
                message: "ID VACANTE NO VALIDO"
            });
        }

        if( !vacanteFound ) {
            return res.status(200).json({
                message: "VACANTE NO ENCONTRADA"
            });
        }

    } catch(err) {
        res.status(500).json({
            message: "ERROR INTERNO DEL SERVIDOR AL ACTUALIZAR",
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
            return res.status(200).json({ message: "VACANTE NO ENCONTRADA" });
        }

        res.status(200).json({ message: "VACANTE ACTUALIZADA" });
    } catch(err) {
        res.status(500).json({
            message: "ERROR INTERNO AL ACTUALIZAR",
            error: err.message
        });
    }
};

export const deleteVacante = async (req, res) => {
    const vacanteID = req.params.id;

    try {

        if( !vacanteID || isNaN(parseInt(vacanteID)) ) {
            return res.status(400).json({
                message: "ID VACANTE NO VALIDO"
            });
        }

        const vacanteFound = await vacantesModel.findOne({
            where: { id: vacanteID}
        });

        if( !vacanteFound ) {
            return res.status(200).json({
                message: "VACANTE NO ENCONTRADA"
            });
        }

        try {
            const vacante = await vacantesModel.destroy({
                where: {
                    id: vacanteID
                }
            });

            res.status(200).send({ message: "VACANTE ELIMINADA" });
        } catch(err) {
            res.status(500).json({
                message: "ERROR INTERNO AL ELIMINAR",
                error: err.message
            });
        }
    } catch {
        res.status(500).json({
            message: "ERROR INTERNO DEL SERVIDOR",
        });
    }
};