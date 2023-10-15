import React, { useState, useEffect, useRef } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import axios from "axios";
const URIempleos = "http://localhost:8000/empleos/";
const URIdatosgenerales = "http://localhost:8000/datosgenerales/";
const URIeducaciones = "http://localhost:8000/educaciones/";
const URIcertificaciones = "http://localhost:8000/certificaciones/";
const URIexperienciaslaborales = "http://localhost:8000/experienciaslaborales/";

import {
  countryCodes,
  countries,
  disponibilidades,
  sistemasOperativos,
  lenguajesProgramacion,
  tools,
  librerias,
  dataBases,
  cloud,
  niveles,
} from "../data/DataListas";
import { Link } from "react-router-dom";

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

const RegisterCv = () => {
  const [empleos, setEmpleos] = useState([]);
  useEffect(() => {
    getEmpleos();
  }, []);

  const getEmpleos = async () => {
    const res = await axios.get(URIempleos);
    setEmpleos(res.data);
  };
  const [mostrarModal, setMostrarModal] = useState(false);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [cod, setCod] = useState("");
  const [telefono, setTelefono] = useState("");
  const [isOpenCountry, setIsOpenCountry] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isOpenDisponibilidad, setIsOpenDisponibilidad] = useState(false);
  const [selectedDisponibilidad, setSelectedDisponibilidad] = useState("");
  const [isOpenEmpleo, setIsOpenEmpleo] = useState(false);
  const [selectedEmpleo, setSelectedEmpleo] = useState("");
  const [aniosExperiencia, setAniosExperiencia] = useState("");
  const [expectativaSalario, setExpectativaSalario] = useState("");
  const [resumen, setResumen] = useState("");

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

  const limpiarFormulario = () => {
    setNombre("");
    setApellido("");
    setCorreo("");
    setTelefono("");
    setSelectedCountry("");
    setSelectedDisponibilidad("");
    setSelectedEmpleo("");
    setAniosExperiencia("");
    setExpectativaSalario("");
    setResumen("");
    setEducacionFields("");
    setExperienciaFields("");
    setCertificacionFields("");
    setSelectedSistemasOperativos("");
    setSelectedLenguajesProgramacion("");
    setSelectetTools("");
    setSelectedLibrerias("");
    setSelectedDataBases("");
    setSelectedCloud("");
    setSelectedEspanol("");
    setSelectedIngles("");
  };

  //procedimiento para guardar los datos
  const guardar = async (e) => {
    e.preventDefault();

    // Unir los elementos del array en una cadena
    const sistemasOperativosString = selectedSistemasOperativos.join(", ");

    const lenguajesProgramacionString =
      selectedLenguajesProgramacion.join(", ");

    const herramientasProgramacionString = selectedTools.join(", ");

    const libreriasString = selectedLibrerias.join(", ");

    const dataBaseString = selectedDataBases.join(", ");

    const cloudString = selectedCloud.join(", ");

    // Capturar los datos de educación en un array
    const educacionData = educacionFields.map((field) => ({
      institucion: field.institucion,
      mesFinEducacion: field.mesFinEducacion,
      anioFinEducacion: field.anioFinEducacion,
      carrera: field.carrera,
    }));

    // Capturar los datos de experiencia laboral en un array
    const experienciaData = experienciaFields.map((field) => ({
      empresaName: field.empresaName,
      mesInicioExperiencia: field.mesInicioExperiencia,
      anioInicioExperiencia: field.anioFinExperiencia,
      mesFinExperiencia: field.mesFinExperiencia,
      anioFinExperiencia: field.anioFinExperiencia,
      cargo: field.cargo,
      actividades: field.actividades,
      tecnologias: field.tecnologias,
    }));

    //capturar los datos de certificaciones
    const certificacionData = certificacionFields.map((field) => ({
      certificacionName: field.certificacionName,
      mesFinCertificacion: field.mesFinCertificacion,
      anioFinCertificacion: field.anioFinCertificacion,
      institucion: field.institucionCertificacion,
    }));

    try {
      const resDatosGenerales = await axios.post(URIdatosgenerales, {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        cod: cod,
        telefono: telefono,
        pais: selectedCountry,
        disponibilidad: selectedDisponibilidad,
        vacante: selectedEmpleo,
        aniosExperiencia: aniosExperiencia,
        expectativaSalario: expectativaSalario,
        resumen: resumen,
        sistemasOperativos: sistemasOperativosString,
        lenguajesProg: lenguajesProgramacionString,
        herramientasProg: herramientasProgramacionString,
        librerias: libreriasString,
        basesDatos: dataBaseString,
        clouds: cloudString,
        español: selectedEspanol,
        ingles: selectedIngles,
      });

      if (resDatosGenerales.status === 200) {
        // Datos enviados con éxito
        console.log("Datos generales enviados con éxito");
        // Muestra un mensaje al usuario
        /*         alert("Datos generales enviados con éxito"); */

        // Capturar el id de los datos generales
        const idDatosGenerales = resDatosGenerales.data.id;

        // Ahora, envía los datos de educación junto con el id de datos generales
        const educacionDataConId = educacionData.map((ed) => ({
          ...ed,
          datosGenerales_id: idDatosGenerales, // Agregar el id de datos generales
        }));

        const resEducacion = await axios.post(
          URIeducaciones,
          educacionDataConId
        );
        console.log("resEducacion:", educacionDataConId);

        if (resEducacion.status === 200) {
          console.log("Datos de educación enviados con éxito");
          /*           alert("Datos de educación enviados con éxito");
           */
          const experienciaDataConId = experienciaData.map((ed) => ({
            ...ed,
            datosGenerales_id: idDatosGenerales, // Agregar el id de datos generales
          }));

          const resExperiencia = await axios.post(
            URIexperienciaslaborales,
            experienciaDataConId
          );
          console.log("resExperiencias:", experienciaDataConId);

          if (resExperiencia.status === 200) {
            console.log("Datos de experiencias laborales enviados con éxito");
            /*             alert("Datos de experiencias laborales enviados con éxito");
             */
            const certificacionDataConId = certificacionData.map((ed) => ({
              ...ed,
              datosGenerales_id: idDatosGenerales,
            }));

            const resCertificacion = await axios.post(
              URIcertificaciones,
              certificacionDataConId
            );

            console.log("resCertificaciones:", certificacionDataConId);

            if (resCertificacion.status === 200) {
              console.log("Datos de certificaciones enviados con éxito");
              /*               alert("Datos de certificaciones enviados con éxito");
               */

              //hacemos scrool al encabezado de la pagina
              window.scrollTo(0, 0);

              //funcion para limpiar el formulario
              limpiarFormulario();

              // Mostrar la ventana modal
              setMostrarModal(true);
            } else {
              console.error("Error al enviar datos de certificaciones");
              alert("Error al enviar datos de certificciones");
            }
          } else {
            console.error("Error al enviar datos de experiencias laborales");
            alert("Error al enviar datos de experiencias laborales");
          }
        } else {
          console.error("Error al enviar datos de educación");
          alert("Error al enviar datos de educación");
        }
      } else if (resDatosGenerales.status === 500) {
        // Error interno del servidor (error 500)
        console.error(
          "Error interno del servidor al enviar los datos:",
          res.data
        );
        // Muestra un mensaje de error al usuario
        alert("Error interno del servidor al enviar los datos");
      } else {
        // Otros códigos de estado
        console.error(
          "Error inesperado al enviar los datos. Código de estado:",
          resDatosGenerales.status
        );
        // Muestra un mensaje de error al usuario
        alert("Error inesperado al enviar los datos.");
      }
    } catch (error) {
      // Error de red u otros errores
      console.error("Error al enviar los datos:", error);
      // Muestra un mensaje de error al usuario
      alert("Error al enviar los datossss");
    }
  };

  function cerrarModal() {
    setMostrarModal(false);
  }

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

  const handleInputChangeEducacion = (e, index, fieldName) => {
    const value = e.target.value;
    const newEducacionFields = [...educacionFields];
    newEducacionFields[index][fieldName] = value;
    setEducacionFields(newEducacionFields);
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

  const handleInputChangeExperiencia = (e, index, fieldName) => {
    const value = e.target.value;
    const newExperienciaFields = [...experienciaFields];
    newExperienciaFields[index][fieldName] = value;
    setExperienciaFields(newExperienciaFields);
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

  const handleInputChangeCertificacion = (e, index, fieldName) => {
    const value = e.target.value;
    const newCertificacionFields = [...certificacionFields];
    newCertificacionFields[index][fieldName] = value;
    setCertificacionFields(newCertificacionFields);
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
        {mostrarModal && (
          <div className="modal d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Envió exitoso</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={cerrarModal}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  Los datos fueron enviados correctamente
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={cerrarModal}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={guardar} id="formulario">
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
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
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
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
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
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
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
                    value={cod}
                    onChange={(e) => setCod(e.target.value)}
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
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
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
                  onChange={(e) => setSelectedCountry(e.target.value)}
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
                  onChange={(e) => selectedDisponibilidad(e.target.value)}
                />
                {isOpenDisponibilidad && (
                  <ul
                    style={styles.ul}
                    className="country-list"
                    ref={dropdownRef}
                  >
                    {disponibilidades.map((option, index) => (
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
                  onChange={(e) => selectedEmpleo(e.target.value)}
                />
                {isOpenEmpleo && (
                  <ul
                    style={styles.ul}
                    className="country-list"
                    ref={dropdownRef}
                  >
                    {empleos.map((empleo) => (
                      <li
                        style={styles.li}
                        key={empleo.id}
                        className="list-item"
                        onClick={() => handleSelect(empleo.nombre, "empleo")}
                      >
                        {empleo.nombre}
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
                value={aniosExperiencia}
                onChange={(e) => setAniosExperiencia(e.target.value)}
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
                onChange={
                  ((e) => setExpectativaSalario(e.target.value),
                  handleExpectativaSalarioChange)
                }
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
                value={resumen}
                onChange={(e) => setResumen(e.target.value)}
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
                      value={field.institucion}
                      onChange={(e) =>
                        handleInputChangeEducacion(e, index, "institucion")
                      }
                    />
                  </div>
                  <div className="col-lg-3 mb-3">
                    <label htmlFor={`mesInicioEducacion${index}`}>
                      Mes de finalización:
                    </label>
                    <select
                      className="form-control"
                      id={`mesFinEducacion${index}`}
                      name={`mesFinEducacion${index}`}
                      value={field.mesFinEducacion}
                      onChange={(e) =>
                        handleInputChangeEducacion(e, index, "mesFinEducacion")
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
                      value={field.anioFinEducacion}
                      onChange={(e) =>
                        handleInputChangeEducacion(e, index, "anioFinEducacion")
                      }
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
                      value={field.carrera}
                      onChange={(e) =>
                        handleInputChangeEducacion(e, index, "carrera")
                      }
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
                        handleInputChangeExperiencia(
                          e,
                          index,
                          "mesFinExperiencia"
                        )
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
                        handleInputChangeExperiencia(
                          e,
                          index,
                          "anioFinExperiencia"
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
                </div>

                <div className="row">
                  <div className="col-lg-12 mb-3">
                    <label htmlFor={`cargo${index}`}>Cargo desempeñado:</label>
                    <input
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

          <div className="col d-flex justify-content-center align-items-center mb-5 mt-5">
            <button type="submit" className="btn btn-primary">
              Enviar Datos
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};
export default RegisterCv;
