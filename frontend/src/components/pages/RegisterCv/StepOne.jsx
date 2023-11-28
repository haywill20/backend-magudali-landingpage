import React from "react";
import styles from "./StylesRegisterCv";

const StepOne = ({
  activeStep,
  setActiveStep,
  nombre,
  setNombre,
  apellido,
  setApellido,
  correo,
  setCorreo,
  telefono,
  cod,
  setCod,
  countryCodes,
  setTelefono,
  selectedCountry,
  setSelectedCountry,
  isOpenCountry,
  toggleDropdown,
  handleSelect,
  dropdownRef,
  countries,
  selectedDisponibilidad,
  setSelectedDisponibilidad,
  isOpenDisponibilidad,
  disponibilidades,
  empleos,
  isOpenEmpleo,
  selectedEmpleo,
  aniosExperiencia,
  setAniosExperiencia,
  expectativaSalario,
  setExpectativaSalario,
  handleExpectativaSalarioChange,
  resumen,
  setResumen,
  educacionFields,
  handleInputChangeEducacion,
  generateYearsRange,
  handleEliminarEducacion,
  handleAgregarEducacion,

}) => {


  return (<div className="container mt-5">
    <h2 style={styles.datosGeneralesColor}>Datos Generales</h2>
    <br />
    <div className="row">
      <div className="col-lg-3 mb-3">
        <label htmlFor="nombre" className="form-label">
          Primer Nombre
        </label>
        <input
          key={`nombre-${activeStep}`} // Usar activeStep en la key
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
          key={`apellido-${activeStep}`} // Usar activeStep en la key
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
          key={`correo-${activeStep}`} // Usar activeStep en la key
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
            key={`telefono-${activeStep}`} // Usar activeStep en la key
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
            key={`pais-${activeStep}`} // Usar activeStep en la key
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
            key={`disponibilidad-${activeStep}`} // Usar activeStep en la key
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
            key={`empleo-${activeStep}`} // Usar activeStep en la key
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
          key={`aniosExperiencia-${activeStep}`} // Usar activeStep en la key
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
          key={`expectativaSalario-${activeStep}`} // Usar activeStep en la key
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
                key={`institucion-${activeStep}`} // Usar activeStep en la key
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
                  handleInputChangeEducacion(
                    e,
                    index,
                    "mesFinEducacion"
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
                  handleInputChangeEducacion(
                    e,
                    index,
                    "anioFinEducacion"
                  )
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
              <label htmlFor={`carrera${index}`}>
                Carrera Cursada:
              </label>
              <input
                key={`carrera-${activeStep}`} // Usar activeStep en la key
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
  </div>
  )
}

export default StepOne;
