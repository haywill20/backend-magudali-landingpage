import { React } from "react";
import styles from "./StylesRegisterCv";

const StepThree = ({
  activeStep,
  toggleDropdown,
  isOpenSistemasOperativos,
  dropdownRef,
  selectedSistemasOperativos,
  setSelectedSistemasOperativos,
  sistemasOperativos,
  handleSelect,
  selectedLenguajesProgramacion,
  setSelectedLenguajesProgramacion,
  isOpenLenguajesProgramacion,
  lenguajesProgramacion,
  setSelectetTools,
  isOpenTools,
  tools,
  selectedTools,
  setSelectedLibrerias,
  selectedLibrerias,
  isOpenLibrerias,
  librerias,
  setSelectedDataBases,
  isOpenDataBases,
  dataBases,
  selectedDataBases,
  setSelectedCloud,
  selectedCloud,
  isOpenCloud,
  cloud,
  setSelectedEspanol,
  selectedEspanol,
  isOpenEspanol,
  niveles,
  selectedIngles,
  setSelectedIngles,
  isOpenIngles,
}) => {
  return (
    <div className="container mt-5">
      <h2 style={styles.habilidadesColor}>Habilidades</h2>
      <div id="habilidades-container">
        <div className="habilidades-item">
          <div className="row">
            <div className="col-lg-6 mb-3">
              <label htmlFor="sistemasOperativos">Sistemas Operativos</label>
              <div className="dropdown">
                <input
                  key={`sistemasOperativos-${activeStep}`} // Usar activeStep en la key
                  type="text"
                  className="form-control"
                  id="sistemasOperativos"
                  name="sistemasOperativos"
                  placeholder="Seleccione los sistemas operativos que domina"
                  onClick={() => toggleDropdown("sistemasOperativos")} // Mostrar/ocultar la lista al hacer clic en el campo de texto
                  value={selectedSistemasOperativos.join(", ")} // Mostrar los elementos separados por comas
                  readOnly
                  onChange={(e) =>
                    setSelectedSistemasOperativos(e.target.value)
                  }
                />{" "}
                {isOpenSistemasOperativos && (
                  <ul
                    style={styles.ul}
                    className="sistemasOperativos-list"
                    ref={dropdownRef}
                  >
                    {sistemasOperativos.map((option, index) => (
                      <li
                        style={styles.li}
                        key={index}
                        className={
                          selectedSistemasOperativos.includes(option)
                            ? "selected"
                            : " "
                        }
                        onClick={() =>
                          handleSelect(option, "sistemasOperativos")
                        }
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="col-lg-6 mb-3">
              <label htmlFor="lenguajesProgramacion">
                Lenguajes de programación
              </label>
              <div className="dropdown">
                <input
                  key={`lenguajesProgramacion-${activeStep}`} // Usar activeStep en la key
                  type="text"
                  className="form-control"
                  id="lenguajesProgramacion"
                  name="lenguajesProgramacion"
                  placeholder="Seleccione los lenguajes de programación que domina"
                  onClick={() => toggleDropdown("lenguajesProgramacion")} // Mostrar/ocultar la lista al hacer clic en el campo de texto
                  value={selectedLenguajesProgramacion.join(", ")} // Mostrar los elementos separados por comas
                  onChange={(e) =>
                    setSelectedLenguajesProgramacion(e.target.value)
                  }
                  readOnly
                />{" "}
                {isOpenLenguajesProgramacion && (
                  <ul
                    style={styles.ul}
                    className="country-list"
                    ref={dropdownRef}
                  >
                    {lenguajesProgramacion.map((option, index) => (
                      <li
                        style={styles.li}
                        key={index}
                        className={
                          selectedLenguajesProgramacion.includes(option)
                            ? "selected"
                            : " "
                        }
                        onClick={() =>
                          handleSelect(option, "lenguajesProgramacion")
                        }
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 mb-3">
              <label htmlFor="herramientasProgramacion">
                Herramientas de programación
              </label>
              <div className="dropdown">
                <input
                  key={`herramientasProgramacion-${activeStep}`} // Usar activeStep en la key
                  type="text"
                  className="form-control"
                  id="tools"
                  name="tools"
                  placeholder="Seleccione las herramientas de programación que domina"
                  onClick={() => toggleDropdown("tools")} // Mostrar/ocultar la lista al hacer clic en el campo de texto
                  value={selectedTools.join(", ")} // Mostrar los elementos separados por comas
                  onChange={(e) => setSelectetTools(e.target.value)}
                  readOnly
                />
                {isOpenTools && (
                  <ul
                    style={styles.ul}
                    className="tools-list"
                    ref={dropdownRef}
                  >
                    {tools.map((option, index) => (
                      <li
                        style={styles.li}
                        key={index}
                        className={
                          selectedTools.includes(option) ? "selected" : " "
                        }
                        onClick={() => handleSelect(option, "tools")}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="col-lg-6 mb-3">
              <label htmlFor="librerias">Librerías</label>
              <div className="dropdown">
                <input
                  key={`librerias-${activeStep}`} // Usar activeStep en la key
                  type="text"
                  className="form-control"
                  id="librerias"
                  name="librerias"
                  placeholder="Seleccione las librerias que domina"
                  onClick={() => toggleDropdown("librerias")} // Mostrar/ocultar la lista al hacer clic en el campo de texto
                  value={selectedLibrerias.join(", ")} // Mostrar los elementos separados por comas
                  onChange={(e) => setSelectedLibrerias(e.target.value)}
                  readOnly
                />
                {isOpenLibrerias && (
                  <ul
                    style={styles.ul}
                    className="librerias-list"
                    ref={dropdownRef}
                  >
                    {librerias.map((option, index) => (
                      <li
                        style={styles.li}
                        key={index}
                        className={
                          selectedLibrerias.includes(option) ? "selected" : " "
                        }
                        onClick={() => handleSelect(option, "librerias")}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 mb-3">
              <label htmlFor="dataBases">Bases de Datos</label>
              <div className="dropdown">
                <input
                  key={`dataBases-${activeStep}`} // Usar activeStep en la key
                  type="text"
                  className="form-control"
                  id="dataBases"
                  name="dataBases"
                  placeholder="Seleccione las bases de datos que domina"
                  onClick={() => toggleDropdown("dataBases")} // Mostrar/ocultar la lista al hacer clic en el campo de texto
                  value={selectedDataBases.join(", ")} // Mostrar los elementos separados por comas
                  onChange={(e) => setSelectedDataBases(e.target.value)}
                  readOnly
                />
                {isOpenDataBases && (
                  <ul
                    style={styles.ul}
                    className="dataBases-list"
                    ref={dropdownRef}
                  >
                    {dataBases.map((option, index) => (
                      <li
                        style={styles.li}
                        key={index}
                        className={
                          selectedDataBases.includes(option) ? "selected" : " "
                        }
                        onClick={() => handleSelect(option, "dataBases")}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="col-lg-6 mb-3">
              <label htmlFor="cloud">Cloud</label>
              <div className="dropdown">
                <input
                  key={`cloud-${activeStep}`} // Usar activeStep en la key
                  type="text"
                  className="form-control"
                  id="cloud"
                  name="cloud"
                  placeholder="Seleccione las nubes que domina"
                  onClick={() => toggleDropdown("cloud")} // Mostrar/ocultar la lista al hacer clic en el campo de texto
                  value={selectedCloud.join(", ")} // Mostrar los elementos separados por comas
                  onChange={(e) => setSelectedCloud(e.target.value)}
                  readOnly
                />
                {isOpenCloud && (
                  <ul
                    style={styles.ul}
                    className="cloud-list"
                    ref={dropdownRef}
                  >
                    {cloud.map((option, index) => (
                      <li
                        style={styles.li}
                        key={index}
                        className={
                          selectedCloud.includes(option) ? "selected" : " "
                        }
                        onClick={() => handleSelect(option, "cloud")}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
        <br />
        <h2>Idiomas</h2>
        <div id="idioma-container">
          <div className="idioma-item">
            <div className="row">
              <div className="col-lg-3 mb-3">
                <label htmlFor="espanol" className="form-label">
                  Español
                </label>
                <div className="dropdown">
                  <input
                    key={`espanol-${activeStep}`} // Usar activeStep en la key
                    type="text"
                    className="form-control"
                    id="espanol"
                    name="espanol"
                    placeholder="Nivel de español"
                    onClick={() => toggleDropdown("espanol")}
                    value={selectedEspanol}
                    onChange={(e) => setSelectedEspanol(e.target.value)}
                    readOnly
                  />
                  {isOpenEspanol && (
                    <ul
                      style={styles.ul}
                      className="espanol-list"
                      ref={dropdownRef}
                    >
                      {niveles.map((option, index) => (
                        <li
                          style={styles.li}
                          key={index}
                          className="list-item"
                          onClick={() => handleSelect(option, "espanol")}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="col-lg-3 mb-3">
                <label htmlFor="ingles" className="form-label">
                  Ingles
                </label>
                <div className="dropdown">
                  <input
                    key={`ingles-${activeStep}`} // Usar activeStep en la key
                    type="text"
                    className="form-control"
                    id="ingles"
                    name="ingles"
                    placeholder="Nivel de ingles"
                    onClick={() => toggleDropdown("ingles")}
                    value={selectedIngles}
                    onChange={(e) => setSelectedIngles(e.target.value)}
                    readOnly
                  />
                  {isOpenIngles && (
                    <ul
                      style={styles.ul}
                      className="ingles-list"
                      ref={dropdownRef}
                    >
                      {niveles.map((option, index) => (
                        <li
                          style={styles.li}
                          key={index}
                          className="list-item"
                          onClick={() => handleSelect(option, "ingles")}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StepThree;
