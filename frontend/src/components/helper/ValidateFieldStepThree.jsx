const validateFieldStepThree = (
    selectedSistemasOperativos,
    selectedLenguajesProgramacion,
    selectedTools,
    selectedLibrerias,
    selectedDataBases,
    selectedCloud,
    selectedEspanol,
    selectedIngles
    ) => {
    if (
        selectedSistemasOperativos.length === 0 ||
        selectedLenguajesProgramacion.length === 0 ||
        selectedTools.length === 0 ||
        selectedLibrerias.length === 0 ||
        selectedDataBases.length === 0 ||
        selectedCloud.length === 0 ||
        selectedEspanol.length === 0 ||
        selectedIngles.length === 0
        ) {
        return false;
    }

    return true; 
};

export default validateFieldStepThree;