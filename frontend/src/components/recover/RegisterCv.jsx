import React, { useState, useEffect, useRef } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import {
  countryCodes,
  countries,
  disponibilidad,
  empleos,
  sistemasOperativos,
  lenguajesProgramacion,
  tools,
  librerias,
  dataBases,
  cloud,
  niveles,
} from "../data/DataListas";

const styles = {
  ul: {
    display: "block",
    position: "absolute",
    zIndex: 2,
    top: "100%",
    left: 0,
    width: "100%",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    maxHeight: "300px",
    overflowY: "auto",
    padding: 10,
  },
  li: {
    cursor: "pointer",
  },
  datosGeneralesColor: {
    color: "#232627",
  },
  educacionColor: {
    color: "#0095F4",
  },
  experienciasColor: {
    color: "#37C18D",
  },
  certificacionColor: {
    color: "#AB7942",
  },
  habilidadesColor: {
    color: "#F5AA38",
  },
  buttonEducacion: {
    backgroundColor: "#232627",
    borderColor: "#232627",
  },
  buttonExperiencia: {
    backgroundColor: "#37C18D",
    borderColor: "#37C18D",
  },
  buttonCertificacion: {
    backgroundColor: "#AB7942",
    borderColor: "#AB7942",
  },
};

function RegisterCv() {
  const [isOpenCountry, setIsOpenCountry] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  const [isOpenDisponibilidad, setIsOpenDisponibilidad] = useState(false);
  const [selectedDisponibilidad, setSelectedDisponibilidad] = useState("");

  const [isOpenEmpleo, setIsOpenEmpleo] = useState(false);
  const [selectedEmpleo, setSelectedEmpleo] = useState("");

  const [expectativaSalario, setExpectativaSalario] = useState("");

  const [educacionFields, setEducacionFields] = useState([
    { institucion: "", mesFinEducacion: "", anioFinEducacion: "", carrera: "" },
  ]);

  const [isOpenSistemasOperativos, setIsOpenSistemasOperativos] =
    useState(false);
  const [selectedSistemasOperativos, setSelectedSistemasOperativos] = useState(
    []
  );

  const [isOpenLenguajesProgramacion, setIsOpenLenguajesProgramacion] =
    useState(false);
  const [selectedLenguajesProgramacion, setSelectedLenguajesProgramacion] =
    useState([]);

  const [isOpenTools, setIsOpenTools] = useState(false);

  const [selectedTools, setSelectetTools] = useState([]);

  const [isOpenLibrerias, setIsOpenLibrerias] = useState(false);
  const [selectedLibrerias, setSelectedLibrerias] = useState([]);

  const [isOpenDataBases, setIsOpenDataBases] = useState(false);
  const [selectedDataBases, setSelectedDataBases] = useState([]);

  const [isOpenCloud, setIsOpenCloud] = useState(false);
  const [selectedCloud, setSelectedCloud] = useState([]);

  const [isOpenEspanol, setIsOpenEspanol] = useState(false);
  const [selectedEspanol, setSelectedEspanol] = useState("");

  const [isOpenIngles, setIsOpenIngles] = useState(false);
  const [selectedIngles, setSelectedIngles] = useState("");

  const [experienciaFields, setExperienciaFields] = useState([
    {
      empresaName: "",
      mesInicioExperiencia: "",
      anioInicioExperiencia: "",
      mesFinExperiencia: "",
      anioFinExperiencia: "",
      cargo: "",
      actividades: "",
      tecnologias: "",
    },
  ]);

  const [certificacionFields, setCertificacionFields] = useState([
    {
      certificacionName: "",
      mesFinCertificacion: "",
      anioFinCertificacion: "",
      institucionCertificacion: "",
    },
  ]);
  // Controlador de eventos para el campo de texto de expectativa salarial
  const handleExpectativaSalarioChange = (event) => {
    const inputValue = event.target.value.replace(/\D/g, ""); // Elimina todos los caracteres no numéricos
    const formattedValue = formatNumberWithCommas(inputValue);
    setExpectativaSalario(formattedValue);
  };

  // Función para formatear números con comas como separadores de miles
  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Ref para el contenedor de la lista desplegable
  const dropdownRef = useRef(null);

  const toggleDropdown = (dropdownName) => {
    if (dropdownName === "country") {
      setIsOpenCountry(!isOpenCountry);
    } else if (dropdownName === "disponibilidad") {
      setIsOpenDisponibilidad(!isOpenDisponibilidad);
    } else if (dropdownName === "empleo") {
      setIsOpenEmpleo(!isOpenEmpleo);
    } else if (dropdownName === "sistemasOperativos") {
      setIsOpenSistemasOperativos(!isOpenSistemasOperativos);
    } else if (dropdownName === "lenguajesProgramacion") {
      setIsOpenLenguajesProgramacion(!isOpenLenguajesProgramacion);
    } else if (dropdownName === "tools") {
      setIsOpenTools(!isOpenTools);
    } else if (dropdownName === "librerias") {
      setIsOpenLibrerias(!isOpenLibrerias);
    } else if (dropdownName === "dataBases") {
      setIsOpenDataBases(!isOpenDataBases);
    } else if (dropdownName === "cloud") {
      setIsOpenCloud(!isOpenCloud);
    } else if (dropdownName === "espanol") {
      setIsOpenEspanol(!isOpenEspanol);
    } else if (dropdownName === "ingles") {
      setIsOpenIngles(!isOpenIngles);
    }
  };

  const handleSelect = (value, dropdownName) => {
    if (dropdownName === "country") {
      setSelectedCountry(value);
      setIsOpenCountry(false);
    } else if (dropdownName === "disponibilidad") {
      setSelectedDisponibilidad(value);
      setIsOpenDisponibilidad(false);
    } else if (dropdownName === "empleo") {
      setSelectedEmpleo(value);
      setIsOpenEmpleo(false);
    } else if (dropdownName === "sistemasOperativos") {
      if (selectedSistemasOperativos.includes(value)) {
        // Si el elemento ya está seleccionado, quitarlo
        const updatedSelected = selectedSistemasOperativos.filter(
          (item) => item !== value
        );
        setSelectedSistemasOperativos(updatedSelected);
      } else {
        // Si el elemento no está seleccionado, agregarlo
        setSelectedSistemasOperativos([...selectedSistemasOperativos, value]);
      }
    } else if (dropdownName === "lenguajesProgramacion") {
      if (selectedLenguajesProgramacion.includes(value)) {
        const updatedSelected = selectedLenguajesProgramacion.filter(
          (item) => item !== value
        );
        setSelectedLenguajesProgramacion(updatedSelected);
      } else {
        setSelectedLenguajesProgramacion([
          ...selectedLenguajesProgramacion,
          value,
        ]);
      }
    } else if (dropdownName === "tools") {
      if (selectedTools.includes(value)) {
        const updatedSelected = selectedTools.filter((item) => item !== value);
        setSelectetTools(updatedSelected);
      } else {
        setSelectetTools([...selectedTools, value]);
      }
    } else if (dropdownName === "librerias") {
      if (selectedLibrerias.includes(value)) {
        const updatedSelected = selectedLibrerias.filter(
          (item) => item !== value
        );
        setSelectedLibrerias(updatedSelected);
      } else {
        setSelectedLibrerias([...selectedLibrerias, value]);
      }
    } else if (dropdownName === "dataBases") {
      if (selectedDataBases.includes(value)) {
        const updatedSelected = selectedDataBases.filter(
          (item) => item !== value
        );
        setSelectedDataBases(updatedSelected);
      } else {
        setSelectedDataBases([...selectedDataBases, value]);
      }
    } else if (dropdownName === "cloud") {
      if (selectedCloud.includes(value)) {
        const updatedSelected = selectedCloud.filter((item) => item !== value);
        setSelectedCloud(updatedSelected);
      } else {
        setSelectedCloud([...selectedCloud, value]);
      }
    } else if (dropdownName === "espanol") {
      setSelectedEspanol(value);
      setIsOpenEspanol(false);
    } else if (dropdownName === "ingles") {
      setSelectedIngles(value);
      setIsOpenIngles(false);
    }
  };

  // Manejador de clic global para cerrar la lista al hacer clic en cualquier lugar fuera de ella
  const handleGlobalClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpenCountry(false);
      setIsOpenDisponibilidad(false);
      setIsOpenEmpleo(false);
      setIsOpenSistemasOperativos(false);
      setIsOpenLenguajesProgramacion(false);
      setIsOpenTools(false);
      setIsOpenLibrerias(false);
      setIsOpenDataBases(false);
      setIsOpenCloud(false);
      setIsOpenEspanol(false);
      setIsOpenIngles(false);
    }
  };

  // Agregar el manejador de clic global cuando el componente se monta
  useEffect(() => {
    document.addEventListener("mousedown", handleGlobalClick);
    // Remover el manejador de clic global cuando el componente se desmonta
    return () => {
      document.removeEventListener("mousedown", handleGlobalClick);
    };
  }, []);

  // Controlador de eventos para agregar un nuevo campo de educación
  const handleAgregarEducacion = () => {
    const newId = educacionFields.length + 1;
    setEducacionFields([
      ...educacionFields,
      {
        id: newId,
        institucion: "",
        mesFinEducacion: "",
        anioFinEducacion: "",
        carrera: "",
      },
    ]);
  };
  // Controlador de eventos para eliminar un campo de educación
  const handleEliminarEducacion = (id) => {
    const updatedEducacionFields = educacionFields.filter(
      (field) => field.id !== id
    );
    setEducacionFields(updatedEducacionFields);
  };

  // Controlador de eventos para agregar un nuevo campo de experiencia laborales
  const handleAgregarExperiencia = () => {
    const newId = experienciaFields.length + 1;
    setExperienciaFields([
      ...experienciaFields,
      {
        id: newId,
        empresaName: "",
        mesInicioExperiencia: "",
        anioInicioExperiencia: "",
        mesFinExperiencia: "",
        anioFinExperiencia: "",
        cargo: "",
        actividades: "",
        tecnologias: "",
      },
    ]);
  };
  // Controlador de eventos para eliminar un campo de experiencia laboral
  const handleEliminarExperiencia = (id) => {
    const updatedExperienciaFields = experienciaFields.filter(
      (field) => field.id !== id
    );
    setExperienciaFields(updatedExperienciaFields);
  };

  // Controlador de eventos para agregar un nuevo campo de Certificación
  const handleAgregarCertificacion = () => {
    const newId = certificacionFields.length + 1;
    setCertificacionFields([
      ...certificacionFields,
      {
        id: newId,
        certificacionName: "",
        mesFinCertificacion: "",
        anioFinCertificacion: "",
        institucionCertificacion: "",
      },
    ]);
  };
  // Controlador de eventos para eliminar un campo de certificación

  const handleEliminarCertificacion = (id) => {
    const updatedCertificacionFields = certificacionFields.filter(
      (field) => field.id !== id
    );
    setCertificacionFields(updatedCertificacionFields);
  };

  // Agregar el manejador de clic global cuando el componente se monta
  useEffect(() => {
    document.addEventListener("mousedown", handleGlobalClick);
    // Remover el manejador de clic global cuando el componente se desmonta
    return () => {
      document.removeEventListener("mousedown", handleGlobalClick);
    };
  }, []);

  const generateYearsRange = () => {
    const currentYear = new Date().getFullYear();
    const startYear = 1950;
    const years = [];
    for (let year = currentYear; year >= startYear; year--) {
      years.push(year.toString());
    }
    return years;
  };

  return (
    <>
      <Header />

      <section className="appie-services-2-area pt-150 mb-50" id="service">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6 col-md-8">
              <div className="appie-section-title">
                <h3 className="appie-title">Formulario de datos</h3>
                <p>
                  Llena el siguiente formulario con los datos correspondientes a
                  tu perfil.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mt-5">
        <form id="formulario">
          <h2 style={styles.datosGeneralesColor}>Datos Generales</h2>
          <br />
          <div className="row">
            <div className="col-lg-3 mb-3">
              <label htmlFor="nombre" className="form-label">
                Primer Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                placeholder="Ingrese su primer nombre"
                required
              />
            </div>

            <div className="col-lg-3 mb-3">
              <label htmlFor="apellido" className="form-label">
                Primer Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="apellido"
                name="apellido"
                placeholder="Ingrese su primer apellido"
              />
            </div>

            <div className="col-lg-3 mb-3">
              <label htmlFor="correo" className="form-label">
                Correo
              </label>
              <input
                type="email"
                className="form-control"
                id="correo"
                name="correo"
                placeholder="Ingrese su correo"
              />
            </div>
            <div className="col-lg-3 mb-3">
              <label htmlFor="telefono" className="form-label">
                Teléfono
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <select
                    className="form-control"
                    id="codigoPais"
                    name="codigoPais"
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {`${country.name}`}
                      </option>
                    ))}{" "}
                  </select>
                </div>
                <input
                  type="number"
                  className="form-control"
                  id="telefono"
                  name="telefono"
                  placeholder="Número de teléfono"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 mb-3">
              <label htmlFor="pais" className="form-label">
                País
              </label>
              <div className="dropdown">
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  name="country"
                  placeholder="Seleccione un país"
                  onClick={() => toggleDropdown("country")} // Mostrar/ocultar la lista al hacer clic en el campo de texto
                  value={selectedCountry} // Mostrar el país seleccionado en el campo de texto
                  readOnly
                />{" "}
                {isOpenCountry && (
                  <ul
                    style={styles.ul}
                    className="country-list"
                    ref={dropdownRef}
                  >
                    {countries.map((option, index) => (
                      <li
                        style={styles.li}
                        key={index}
                        className="list-item"
                        onClick={() => handleSelect(option, "country")}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="col-lg-3 mb-3">
              <label htmlFor="disponibilidad" className="form-label">
                Disponibilidad
              </label>
              <div className="dropdown">
                <input
                  type="text"
                  className="form-control"
                  id="disponibilidad"
                  name="disponibilidad"
                  readOnly
                  placeholder="Seleccione su disponibilidad"
                  onClick={() => toggleDropdown("disponibilidad")}
                  value={selectedDisponibilidad}
                />
                {isOpenDisponibilidad && (
                  <ul
                    style={styles.ul}
                    className="country-list"
                    ref={dropdownRef}
                  >
                    {disponibilidad.map((option, index) => (
                      <li
                        style={styles.li}
                        key={index}
                        className="list-item"
                        onClick={() => handleSelect(option, "disponibilidad")}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="col-lg-3 mb-3">
              <label htmlFor="empleo" className="form-label">
                Vacante de Empleo
              </label>
              <div className="dropdown">
                <input
                  type="text"
                  className="form-control"
                  id="empleo"
                  name="empleo"
                  readOnly
                  placeholder="Seleccione la vacante de empleo"
                  onClick={() => toggleDropdown("empleo")}
                  value={selectedEmpleo}
                />
                {isOpenEmpleo && (
                  <ul
                    style={styles.ul}
                    className="country-list"
                    ref={dropdownRef}
                  >
                    {empleos.map((option, index) => (
                      <li
                        style={styles.li}
                        key={index}
                        className="list-item"
                        onClick={() => handleSelect(option, "empleo")}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="col-lg-3 mb-3">
              <label htmlFor="aniosExperiencia" className="form-label">
                Años de experiencia
              </label>
              <input
                type="number"
                className="form-control"
                id="aniosExperiencia"
                name="aniosExperiencia"
                placeholder="Años de experiencia"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 mb-3">
              <label htmlFor="expectativa" className="form-label">
                Expectativa salarial (Dolares)
              </label>
              <input
                type="text"
                className="form-control"
                id="expectativaInput"
                name="expectativaSalario"
                placeholder="$"
                value={expectativaSalario}
                onChange={handleExpectativaSalarioChange}
              />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col mb-3">
              <label htmlFor="resumen">Resumen:</label>
              <textarea
                className="form-control"
                id="resumen"
                name="resumen"
                rows="3"
                placeholder="Resumen"
                autoComplete="off"
              ></textarea>
            </div>
          </div>
          <hr />
          <h2 style={styles.educacionColor}>Educación</h2>
          <div id="educacion-container">
            {educacionFields.map((field, index) => (
              <div className="educacion-item" key={index}>
                <hr />
                <div className="row g-3 mt-3">
                  <div className="col-lg-6 mb-3">
                    <label htmlFor={`institucion${index}`}>
                      Nombre de Institución:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name={`institucion${index}`}
                      placeholder="Ingrese el nombre de la institución"
                    />
                  </div>
                  <div className="col-lg-3 mb-3">
                    <label htmlFor={`mesInicioEducacion${index}`}>
                      Mes de finalización:
                    </label>
                    <select
                      className="form-control"
                      id={`mesInicioEducacion${index}`}
                      name={`mesFinEducacion${index}`}
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
                      <option value="Sept">Septiembre</option>
                      <option value="Oct">Octubre</option>
                      <option value="Nov">Noviembre</option>
                      <option value="Dic">Diciembre</option>

                      {/* Agrega opciones para otros meses aquí */}
                    </select>
                  </div>
                  <div className="col-lg-3 mb-3">
                    <label htmlFor={`anioFinEducacion${index}`}>
                      Año de finalización:
                    </label>
                    <select
                      className="form-control"
                      id={`anioFinEducacion${index}`}
                      name={`anioFinEducacion${index}`}
                    >
                      <option value="">Seleccione el año</option>
                      {generateYearsRange().map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-lg-12 mb-3">
                    <label htmlFor={`carrera${index}`}>Carrera Cursada:</label>
                    <input
                      type="text"
                      className="form-control"
                      name={`carrera${index}`}
                      placeholder="Ingrese la carrera cursada"
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    {index > 0 && ( // Muestra el botón de eliminar solo cuando hay más de un elemento
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleEliminarEducacion(field.id)}
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
            onClick={handleAgregarEducacion}
          >
            Agregar más campos de Educación
          </button>

          <hr />
          <br />
          <h2 style={styles.experienciasColor}>Experiencias Laborales</h2>
          <div id="experiencia-container">
            {experienciaFields.map((field, index) => (
              <div className="experiencia-item" key={index}>
                <hr />
                <div className="row mt-3">
                  <div className="col-lg-4 mb-3">
                    <label htmlFor={`empresa${index}`}>
                      Nombre de empresa:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name={`empresaName${index}`}
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
                </div>

                <div className="row">
                  <div className="col-lg-12 mb-3">
                    <label htmlFor={`cargo${index}`}>Cargo desempeñado:</label>
                    <input
                      type="text"
                      className="form-control"
                      name={`cargo${index}`}
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
                      type="text"
                      className="form-control"
                      name={`tecnologias${index}`}
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
                      Nombre de Cerificación:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name={`certificacionName${index}`}
                      placeholder="Ingrese el nombre de la certificación"
                    ></input>
                  </div>
                  <div className="col-lg-3 mb-3">
                    <label htmlFor={`mesFinCertificacion${index}`}>
                      Mes de finalización:
                    </label>
                    <select
                      className="form-control"
                      name={`mesFinCertificacion${index}`}
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
                    >
                      {" "}
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
                      type="text"
                      className="form-control"
                      name={`institucionCertificacion${index}`}
                      placeholder="Ingrese el nombre de la institución"
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

          <hr />
          <br />

          <h2 style={styles.habilidadesColor}>Habilidades</h2>
          <div id="habilidades-container">
            <div className="habilidades-item">
              <div className="row">
                <div className="col-lg-6 mb-3">
                  <label htmlFor="sistemasOperativos">
                    Sistemas Operativos
                  </label>
                  <div className="dropdown">
                    <input
                      type="text"
                      className="form-control"
                      id="sistemasOperativos"
                      name="sistemasOperativos"
                      placeholder="Seleccione los sistemas operativos que domina"
                      onClick={() => toggleDropdown("sistemasOperativos")} // Mostrar/ocultar la lista al hacer clic en el campo de texto
                      value={selectedSistemasOperativos.join(", ")} // Mostrar los elementos separados por comas
                      readOnly
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
                      type="text"
                      className="form-control"
                      id="lenguajesProgramacion"
                      name="lenguajesProgramacion"
                      placeholder="Seleccione los lenguajes de programación que domina"
                      onClick={() => toggleDropdown("lenguajesProgramacion")} // Mostrar/ocultar la lista al hacer clic en el campo de texto
                      value={selectedLenguajesProgramacion.join(", ")} // Mostrar los elementos separados por comas
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
                      type="text"
                      className="form-control"
                      id="tools"
                      name="tools"
                      placeholder="Seleccione las herramientas de programación que domina"
                      onClick={() => toggleDropdown("tools")} // Mostrar/ocultar la lista al hacer clic en el campo de texto
                      value={selectedTools.join(", ")} // Mostrar los elementos separados por comas
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
                      type="text"
                      className="form-control"
                      id="librerias"
                      name="librerias"
                      placeholder="Seleccione las librerias que domina"
                      onClick={() => toggleDropdown("librerias")} // Mostrar/ocultar la lista al hacer clic en el campo de texto
                      value={selectedLibrerias.join(", ")} // Mostrar los elementos separados por comas
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
                              selectedLibrerias.includes(option)
                                ? "selected"
                                : " "
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
                      type="text"
                      className="form-control"
                      id="dataBases"
                      name="dataBases"
                      placeholder="Seleccione las bases de datos que domina"
                      onClick={() => toggleDropdown("dataBases")} // Mostrar/ocultar la lista al hacer clic en el campo de texto
                      value={selectedDataBases.join(", ")} // Mostrar los elementos separados por comas
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
                              selectedDataBases.includes(option)
                                ? "selected"
                                : " "
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
                      type="text"
                      className="form-control"
                      id="cloud"
                      name="cloud"
                      placeholder="Seleccione las nubes que domina"
                      onClick={() => toggleDropdown("cloud")} // Mostrar/ocultar la lista al hacer clic en el campo de texto
                      value={selectedCloud.join(", ")} // Mostrar los elementos separados por comas
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
                        type="text"
                        className="form-control"
                        id="espanol"
                        name="espanol"
                        placeholder="Nivel de español"
                        onClick={() => toggleDropdown("espanol")}
                        value={selectedEspanol}
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
                        type="text"
                        className="form-control"
                        id="ingles"
                        name="ingles"
                        placeholder="Nivel de ingles"
                        onClick={() => toggleDropdown("ingles")}
                        value={selectedIngles}
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

          <div className="col d-flex justify-content-center align-items-center mb-5 mt-5">
            <button type="submit" class="btn btn-primary">
              Enviar Datos
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default RegisterCv;
