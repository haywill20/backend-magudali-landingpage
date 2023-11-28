const validateFieldStepTwo = (
    experienciaFields,
    certificacionFields,
    ) => {

    for (const experiencia of experienciaFields) {
        if (!experiencia.empresaName || !experiencia.mesInicioExperiencia || !experiencia.anioInicioExperiencia || !experiencia.mesFinExperiencia || !experiencia.anioFinExperiencia || !experiencia.cargo || !experiencia.actividades || !experiencia.tecnologias) {
            return false;
        }
    }

    for (const certificacion of certificacionFields) {
        if (!certificacion.certificacionName || !certificacion.mesFinCertificacion || !certificacion.anioFinCertificacion || !certificacion.institucionCertificacion) {
            return false;
        }
    }
    return true; 
};

export default validateFieldStepTwo;