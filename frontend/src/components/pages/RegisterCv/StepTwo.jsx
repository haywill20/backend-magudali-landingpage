import { React } from "react";
import styles from "./StylesRegisterCv";

const StepTwo = ({
  activeStep,
  experienciaFields,
  setExperienciaFields,
  handleInputChangeExperiencia,
  generateYearsRange,
  handleAgregarExperiencia,
  handleEliminarExperiencia,
  certificacionFields,
  handleInputChangeCertificacion,
  handleEliminarCertificacion,
  handleAgregarCertificacion,
}) => {
  return (
    <div className="container mt-5">
      <h2 style={styles.experienciasColor}>Experiencias Laborales</h2>
      <div id="experiencia-container">
        {experienciaFields.map((field, index) => (
          <div className="experiencia-item" key={index}>
            <hr />
            <div className="row mt-3">
              <div className="col-lg-4 mb-3">
                <label htmlFor={`empresa${index}`}>Nombre de empresa:</label>
                <input
                  key={`empresa-${activeStep}`} // Usar activeStep en la key
                  type="text"
                  className="form-control"
                  name={`empresaName${index}`}
                  value={field.empresaName}
                  onChange={(e) =>
                    handleInputChangeExperiencia(e, index, "empresaName")
                  }
                  placeholder="Ingrese el nombre de la empresa"
                />
              </div>
              <div className="col-lg-2 mb-3">
                <label htmlFor={`mesInicioExperiencia${index}`}>
                  Mes de inicio:
                </label>
                <select
                  className="form-control"
                  name={`mesInicioExperiencia${index}`}
                  value={field.mesInicioExperiencia}
                  onChange={(e) =>
                    handleInputChangeExperiencia(
                      e,
                      index,
                      "mesInicioExperiencia"
                    )
                  }
                >
                  <option value="">Mes de Inicio</option>
                  <option value="Ene">Enero</option>
                  <option value="Feb">Febrero</option>
                  <option value="Mar">Marzo</option>
                  <option value="Abr">Abril</option>
                  <option value="May">Mayo</option>
                  <option value="Jun">Junio</option>
                  <option value="Jul">Julio</option>
                  <option value="Ago">Agosto</option>
                  <option value="Sep">Septiembre</option>
                  <option value="Oct">Octubre</option>
                  <option value="Nov">Noviembre</option>
                  <option value="Dic">Diciembre</option>
                </select>
              </div>

              <div className="col-lg-2 mb-3">
                <label htmlFor={`anioInicioExperiencia${index}`}>
                  Año de inicio:
                </label>
                <select
                  className="form-control"
                  id={`anioInicioExperiencia${index}`}
                  name={`anioInicioExperiencia${index}`}
                  value={field.anioInicioExperiencia}
                  onChange={(e) =>
                    handleInputChangeExperiencia(
                      e,
                      index,
                      "anioInicioExperiencia"
                    )
                  }
                >
                  {" "}
                  <option value="">Año de inicio</option>
                  {generateYearsRange().map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-lg-2 mb-3">
                <label htmlFor={`mesFinExperiencia${index}`}>
                  Mes de finalización:
                </label>
                <select
                  className="form-control"
                  name={`mesFinExperiencia${index}`}
                  value={field.mesFinExperiencia}
                  onChange={(e) =>
                    handleInputChangeExperiencia(e, index, "mesFinExperiencia")
                  }
                >
                  <option value="">Mes Fin</option>
                  <option value="Ene">Enero</option>
                  <option value="Feb">Febrero</option>
                  <option value="Mar">Marzo</option>
                  <option value="Abr">Abril</option>
                  <option value="May">Mayo</option>
                  <option value="Jun">Junio</option>
                  <option value="Jul">Julio</option>
                  <option value="Ago">Agosto</option>
                  <option value="Sep">Septiembre</option>
                  <option value="Oct">Octubre</option>
                  <option value="Nov">Noviembre</option>
                  <option value="Dic">Diciembre</option>
                </select>
              </div>

              <div className="col-lg-2 mb-3">
                <label htmlFor={`anioFinExperiencia${index}`}>
                  Año de finalización:
                </label>
                <select
                  className="form-control"
                  id={`anioFinExperiencia${index}`}
                  name={`anioFinExperiencia${index}`}
                  value={field.anioFinExperiencia}
                  onChange={(e) =>
                    handleInputChangeExperiencia(e, index, "anioFinExperiencia")
                  }
                >
                  {" "}
                  <option value="">Año de finalización</option>
                  {generateYearsRange().map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 mb-3">
                <label htmlFor={`cargo${index}`}>Cargo desempeñado:</label>
                <input
                  key={`cargo-${activeStep}`} // Usar activeStep en la key
                  type="text"
                  className="form-control"
                  name={`cargo${index}`}
                  value={field.cargo}
                  onChange={(e) =>
                    handleInputChangeExperiencia(e, index, "cargo")
                  }
                  placeholder="Ingrese el cargo que desempeñó"
                ></input>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 mb-3">
                <label htmlFor={`actividades${index}`}>
                  Actividades realizadas en la empresa:
                </label>
                <textarea
                  className="form-control"
                  name={`actividades${index}`}
                  rows="3"
                  value={field.actividades}
                  onChange={(e) =>
                    handleInputChangeExperiencia(e, index, "actividades")
                  }
                  placeholder="Ingrese las actividades realizadas"
                ></textarea>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 mb-3">
                <label htmlFor={`tecnologias${index}`}>
                  Tecnologias utilizadas:
                </label>
                <input
                  key={`tecnologias-${activeStep}`} // Usar activeStep en la key
                  type="text"
                  className="form-control"
                  name={`tecnologias${index}`}
                  value={field.tecnologias}
                  onChange={(e) =>
                    handleInputChangeExperiencia(e, index, "tecnologias")
                  }
                  placeholder="Ingrese las tecnologias"
                ></input>
              </div>
              <div className="col-lg-12 mb-3">
                {index > 0 && ( // Muestra el botón de eliminar solo cuando hay más de un elemento
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleEliminarExperiencia(field.id)}
                  >
                    Eliminar
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="btn btn-primary"
        style={styles.buttonExperiencia}
        onClick={handleAgregarExperiencia}
      >
        Agregar más campos de Experiencia Laboral
      </button>

      <hr />
      <br />
      <h2 style={styles.certificacionColor}>Certificaciones</h2>
      <div id="certificacion-container">
        {certificacionFields.map((field, index) => (
          <div className="certificacion-item" key={index}>
            <hr />
            <div className="row mt-3">
              <div className="col-lg-6 mb-3">
                <label htmlFor={`certificacionName${index}`}>
                  Nombre de Certificación:
                </label>
                <input
                  key={`certificacionName-${activeStep}`} // Usar activeStep en la key
                  type="text"
                  className="form-control"
                  name={`certificacionName${index}`}
                  placeholder="Ingrese el nombre de la certificación"
                  value={field.certificacionName}
                  onChange={(e) =>
                    handleInputChangeCertificacion(
                      e,
                      index,
                      "certificacionName"
                    )
                  }
                ></input>
              </div>
              <div className="col-lg-3 mb-3">
                <label htmlFor={`mesFinCertificacion${index}`}>
                  Mes de finalización:
                </label>
                <select
                  className="form-control"
                  name={`mesFinCertificacion${index}`}
                  value={field.mesFinCertificacion}
                  onChange={(e) =>
                    handleInputChangeCertificacion(
                      e,
                      index,
                      "mesFinCertificacion"
                    )
                  }
                >
                  <option value="">Seleccione el mes</option>
                  <option value="Ene">Enero</option>
                  <option value="Feb">Febrero</option>
                  <option value="Mar">Marzo</option>
                  <option value="Abr">Abril</option>
                  <option value="May">Mayo</option>
                  <option value="Jun">Junio</option>
                  <option value="Jul">Julio</option>
                  <option value="Ago">Agosto</option>
                  <option value="Sep">Septiembre</option>
                  <option value="Oct">Octubre</option>
                  <option value="Nov">Noviembre</option>
                  <option value="Dic">Diciembre</option>
                </select>
              </div>

              <div className="col-lg-3 mb-3">
                <label htmlFor={`anioFinCertificacion${index}`}>
                  Año de finalización:
                </label>
                <select
                  type="num"
                  className="form-control"
                  name={`anioFinCertificacion${index}`}
                  placeholder="Año de Finalización"
                  value={field.anioFinCertificacion}
                  onChange={(e) =>
                    handleInputChangeCertificacion(
                      e,
                      index,
                      "anioFinCertificacion"
                    )
                  }
                >
                  {" "}
                  <option value="">Año de finalización</option>
                  {generateYearsRange().map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 mb-3">
                <label htmlFor={`institucionCertificacion${index}`}>
                  Institución que entregó la certificación:
                </label>
                <input
                  key={`institucionCertificacion-${activeStep}`} // Usar activeStep en la key
                  type="text"
                  className="form-control"
                  name={`institucionCertificacion${index}`}
                  placeholder="Ingrese el nombre de la institución"
                  value={field.institucionCertificacion}
                  onChange={(e) =>
                    handleInputChangeCertificacion(
                      e,
                      index,
                      "institucionCertificacion"
                    )
                  }
                />
              </div>
              <div className="col-lg-12 mb-3">
                {index > 0 && ( // Muestra el botón de eliminar solo cuando hay más de un elemento
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleEliminarCertificacion(field.id)}
                  >
                    Eliminar
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        style={styles.buttonCertificacion}
        type="button"
        className="btn btn-primary"
        onClick={handleAgregarCertificacion}
      >
        Agregar más campos de Certificación
      </button>
    </div>
  );
};
export default StepTwo;
