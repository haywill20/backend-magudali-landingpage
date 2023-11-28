const validateFieldStepOne = (
    nombre, 
    apellido,
    correo,
    cod,
    telefono,
    pais,
    disponibilidad,
    empleo,
    experiencia,
    salario,
    resumen,
    educacionFields,
    ) => {
    if (!nombre || 
        !apellido || 
        !correo ||
        !cod ||
        !telefono ||
        !pais || 
        !disponibilidad || 
        !empleo || 
        !experiencia || 
        !salario || 
        !resumen 
        ) {
        return false;
    }

    for (const educacion of educacionFields) {
        if (!educacion.institucion || !educacion.mesFinEducacion || !educacion.anioFinEducacion || !educacion.carrera) {
            return false;
        }
    }
    return true; 
};

export default validateFieldStepOne;