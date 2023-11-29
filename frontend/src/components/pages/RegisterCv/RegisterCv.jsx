import React, { useState, useEffect, useRef } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import apiUrl from "../../config/Config";
import validateFieldStepOne from "../../helper/ValidateFieldStepOne";
import validateFieldStepTwo  from "../../helper/ValidateFieldStepTwo";
import validateFieldStepThree  from "../../helper/ValidateFieldStepThree";

import axios from "axios";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";


const URIempleos = `${apiUrl}/empleos/`;
const URIdatosgenerales = `${apiUrl}/datosgenerales/`;
const URIeducaciones = `${apiUrl}/educaciones/`;
const URIcertificaciones = `${apiUrl}/certificaciones/`;
const URIexperienciaslaborales = `${apiUrl}/experienciaslaborales/`;

import Stepper from 'react-stepper-horizontal';

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
} from "../../data/DataListas";
import { redirect } from "react-router-dom";

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
  const [cod, setCod] = useState("+505");
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

  const [isOpenSistemasOperativos, setIsOpenSistemasOperativos] =
    useState(false);
  const [selectedSistemasOperativos, setSelectedSistemasOperativos] = useState(
    []
  );

  const [isOpenLenguajesProgramacion, setIsOpenLenguajesProgramacion] =
    useState(false);
  const [selectedLenguajesProgramacion, setSelectedLenguajesProgramacion] =
    useState([]);

  const [educacionFields, setEducacionFields] = useState([
    { institucion: "", mesFinEducacion: "", anioFinEducacion: "", carrera: "" },
  ]);

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

  const [activeStep, setActiveStep] = useState(0);

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
    setEducacionFields([]);
    setExperienciaFields([]);
    setCertificacionFields([]);
    setSelectedSistemasOperativos([]);
    setSelectedLenguajesProgramacion([]);
    setSelectetTools([]);
    setSelectedLibrerias([]);
    setSelectedDataBases([]);
    setSelectedCloud([]);
    setSelectedEspanol("");
    setSelectedIngles("");
  };

  //procedimiento para guardar los datos
  const guardar = async (e) => {
    //e.preventDefault();

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
        console.log("Datos generales enviados con éxito", resDatosGenerales);
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


  const handleNext = () => {    
    if (activeStep === 0 ) {
      const validateStepOne = validateFieldStepOne(
        nombre,
        apellido,
        correo,
        cod,
        telefono,
        selectedCountry,
        selectedDisponibilidad,
        selectedEmpleo,
        aniosExperiencia,
        expectativaSalario,
        resumen,
        educacionFields
      );

      if (validateStepOne){
        setActiveStep((prevStep) => prevStep + 1); 
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Necesita llenar todos los campos, para continuar.',
          icon: 'error',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#007bff',
        })
      }
    } 

    if (activeStep === 1 ) {
      const validateStepTwo = validateFieldStepTwo(
        experienciaFields,
        certificacionFields
      );
  
      if (validateStepTwo){
          setActiveStep((prevStep) => prevStep + 1); 
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Necesita llenar todos los campos, para continuar.',
          icon: 'error',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#007bff',
        })
      }
    }

    if (activeStep === 2 ) {
      const validateStepThree = validateFieldStepThree(
        selectedSistemasOperativos,
        selectedLenguajesProgramacion,
        selectedTools,
        selectedLibrerias,
        selectedDataBases,
        selectedCloud,
        selectedEspanol,
        selectedIngles        
      );

      if (validateStepThree){
        guardar();
        Swal.fire({
          title: 'Éxito',
          text: 'Datos guardados correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#007bff',
          allowOutsideClick: false, 
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = '/register';
          }
        })
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Necesita llenar todos los campos, para guardar.',
          icon: 'error',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#007bff',
        })
      }
    }
  };

  const handlePrev = () => {
    setActiveStep((prevStep) => prevStep - 1);
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

  const steps = [
    { title: 'Datos generales' },
    { title: 'Experciencias laborales' },
    { title: 'Habilidades' },
  ];

  // function getSectionComponent() {
  //   switch(activeStep) {
  //     case 0: return <GeneralData key="DatosGenerales"/>;
  //     case 1: return <WorkExperiences key="ExperienciasLaborales"/>;
  //     case 2: return <Skills key="Habilidades"/>;
  //     default: return null;
  //   }
  // }

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

      <div>
        <Stepper
          steps={steps}
          activeStep={activeStep} />
        <div className="container mt-5" style={{ padding: '5 px' }}>
          {activeStep === 0 && (
            <StepOne
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              nombre={nombre}
              setNombre={setNombre}
              apellido={apellido}
              setApellido={setApellido}
              correo={correo}
              setCorreo={setCorreo}
              telefono={telefono}
              cod={cod}
              setCod={setCod}
              countryCodes={countryCodes}
              setTelefono={setTelefono}
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
              isOpenCountry={isOpenCountry}
              toggleDropdown={toggleDropdown}
              handleSelect={handleSelect}
              dropdownRef={dropdownRef}
              countries={countries}
              selectedDisponibilidad={selectedDisponibilidad}
              setSelectedDisponibilidad={setSelectedDisponibilidad}
              isOpenDisponibilidad={isOpenDisponibilidad}
              disponibilidades={disponibilidades}
              empleos={empleos}
              isOpenEmpleo={isOpenEmpleo}
              selectedEmpleo={selectedEmpleo}
              aniosExperiencia={aniosExperiencia}
              setAniosExperiencia={setAniosExperiencia}
              expectativaSalario={expectativaSalario}
              setExpectativaSalario={setExpectativaSalario}
              handleExpectativaSalarioChange={handleExpectativaSalarioChange}
              resumen={resumen}
              setResumen={setResumen}
              educacionFields = {educacionFields}
              handleInputChangeEducacion = {handleInputChangeEducacion}
              generateYearsRange = {generateYearsRange}
              handleEliminarEducacion = {handleEliminarEducacion}
              handleAgregarEducacion = {handleAgregarEducacion}
            />
          )}
          {activeStep === 1 && (
          
            <StepTwo
            activeStep = {activeStep}
            experienciaFields = {experienciaFields}
            setExperienciaFields = {setExperienciaFields}
            handleInputChangeExperiencia = {handleInputChangeExperiencia}
            generateYearsRange = {generateYearsRange}
            handleAgregarExperiencia = {handleAgregarExperiencia}
            handleEliminarExperiencia = {handleEliminarExperiencia}
            certificacionFields = {certificacionFields}
            handleInputChangeCertificacion = {handleInputChangeCertificacion}
            handleEliminarCertificacion = {handleEliminarCertificacion}
            handleAgregarCertificacion = {handleAgregarCertificacion}
            />


          )}
          {activeStep === 2 && (
            <StepThree
            activeStep = {activeStep}
            toggleDropdown = {toggleDropdown}
            isOpenSistemasOperativos = {isOpenSistemasOperativos}
            dropdownRef = {dropdownRef}
            selectedSistemasOperativos = {selectedSistemasOperativos}
            setSelectedSistemasOperativos = {setSelectedSistemasOperativos}
            sistemasOperativos = {sistemasOperativos}
            handleSelect = {handleSelect}
            selectedLenguajesProgramacion = {selectedLenguajesProgramacion}
            setSelectedLenguajesProgramacion = {setSelectedLenguajesProgramacion}
            isOpenLenguajesProgramacion = {isOpenLenguajesProgramacion}
            lenguajesProgramacion = {lenguajesProgramacion}
            setSelectetTools = {setSelectetTools}
            isOpenTools = {isOpenTools}
            tools = {tools}
            selectedTools = {selectedTools}
            setSelectedLibrerias = {setSelectedLibrerias}
            selectedLibrerias = {selectedLibrerias}
            isOpenLibrerias = {isOpenLibrerias}
            librerias = {librerias}
            setSelectedDataBases = {setSelectedDataBases}
            isOpenDataBases = {isOpenDataBases}
            dataBases = {dataBases}
            selectedDataBases = {selectedDataBases}
            setSelectedCloud = {setSelectedCloud}
            selectedCloud = {selectedCloud}
            isOpenCloud = {isOpenCloud}
            cloud = {cloud}
            setSelectedEspanol = {setSelectedEspanol}
            selectedEspanol = {selectedEspanol}
            isOpenEspanol = {isOpenEspanol}
            niveles = {niveles}
            selectedIngles = {selectedIngles}
            setSelectedIngles = {setSelectedIngles}
            isOpenIngles = {isOpenIngles}
            />
          )}
          <hr />
          <div className="d-flex">
            {activeStep !== 0 && (
              <button className="btn btn-link p-2" onClick={handlePrev}>
                <i className="fas fa-chevron-left"></i>
              </button>
            )}

            {activeStep !== steps.length - 1 ? (
              <button className="btn btn-primary ml-auto p-2" onClick={handleNext}>
                Siguiente <i className="fas fa-chevron-right"></i>
              </button>
            ) : (
              <button className="btn btn-primary ml-auto p-2"  onClick={handleNext} >
                Terminar <i className="fas fa-check"></i>
              </button>
            )}
          </div>
          <br />
        </div>
      </div>

      <Footer />
    </>
  );
};
export default RegisterCv;
