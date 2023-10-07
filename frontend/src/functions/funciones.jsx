// Función para generar la lista de codigo de paises
function generarlistaCodPaises() {
  const codigoPaisSelect = document.getElementById("codigoPais");
  codigosPais.forEach((pais) => {
    const opcion = document.createElement("option");
    opcion.value = pais.codigo;
    opcion.textContent = pais.nombre;
    codigoPaisSelect.appendChild(opcion);
  });
}

// Llama a la función para generar las opciones al cargar la página
generarlistaCodPaises();

// Función para generar la lista desplegable paises
function generarListaDesplegablePaises() {
  const dropdownMenu = document.getElementById("paisDropdown");
  dropdownMenu.innerHTML = ""; // Limpiamos la lista antes de generarla nuevamente

  paises.forEach((pais) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.classList.add("dropdown-item");
    link.textContent = pais;

    // Agregar un evento click a cada elemento de la lista para que al elegirlo, se agregue al campo de texto
    link.addEventListener("click", function () {
      document.getElementById("pais").value = pais;
    });

    listItem.appendChild(link);
    dropdownMenu.appendChild(listItem);
  });
}
//generar la lista inical Paises
generarListaDesplegablePaises();

// Función para generar la lista desplegable disponibilidad
function generarListaDesplegableDisponibilidad() {
  const dropdownMenu = document.getElementById("disponibilidadDropdown");
  dropdownMenu.innerHTML = ""; // Limpiamos la lista antes de generarla nuevamente

  disponibilidad.forEach((disponible) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.classList.add("dropdown-item");
    link.textContent = disponible;

    // Agregar un evento click a cada elemento de la lista para que al elegirlo, se agregue al campo de texto
    link.addEventListener("click", function () {
      document.getElementById("disponibilidad").value = disponible;
    });

    listItem.appendChild(link);
    dropdownMenu.appendChild(listItem);
  });
}
//generar la lista incial disponibilidad
generarListaDesplegableDisponibilidad();

// Función para generar la lista desplegable empleos
function generarListaDesplegableEmpleos() {
  const dropdownMenu = document.getElementById("empleoDropdown");
  dropdownMenu.innerHTML = ""; // Limpiamos la lista antes de generarla nuevamente

  empleos.forEach((empleo) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.classList.add("dropdown-item");
    link.textContent = empleo;

    // Agregar un evento click a cada elemento de la lista para que al elegirlo, se agregue al campo de texto
    link.addEventListener("click", function () {
      document.getElementById("empleo").value = empleo;
    });

    listItem.appendChild(link);
    dropdownMenu.appendChild(listItem);
  });
}

// Generar la lista desplegable inicial Empleos
generarListaDesplegableEmpleos();

//funciones para que se agregue una coma al escribir mas de 3 numeros
const expectativaInput = document.getElementById("expectativaInput");

expectativaInput.addEventListener("input", function () {
  formatNumberWithCommas(expectativaInput);
});

function formatNumberWithCommas(input) {
  let value = input.value.replace(/\D/g, "");

  // Add commas for thousands, millions, billions, etc.
  value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  input.value = value;
}

function agregarElemento(elemento, inputId) {
  elemento.classList.toggle("seleccionado");
  var input = document.getElementById(inputId);
  var seleccionados = document.querySelectorAll(
    "#" + inputId + " + ul li.seleccionado"
  );

  var valoresSeleccionados = [];
  for (var i = 0; i < seleccionados.length; i++) {
    valoresSeleccionados.push(seleccionados[i].textContent);
  }

  input.value = valoresSeleccionados.join(", ");
}

function generarMenu(elementId, lista) {
  var dropdownMenu = document.getElementById(elementId);

  for (var i = 0; i < lista.length; i++) {
    var item = document.createElement("li");
    item.classList.add("dropdown-item");
    item.textContent = lista[i];
    item.onclick = function () {
      agregarElemento(this, "campoTexto" + elementId.replace("dropdown", ""));
    };
    dropdownMenu.appendChild(item);
  }
}

window.onload = function () {
  generarMenu("dropdownSistemas", sistemasOperativos);
  generarMenu("dropdownLenguaje", lenguajesProgramacion);
  generarMenu("dropdownTools", tools);
  generarMenu("dropdownLibrerias", librerias);
  generarMenu("dropdownDataBases", DataBases);
  generarMenu("dropdownCloud", Cloud);
};

function removeItem(element) {
  var item = element.parentNode;
  item.parentNode.removeChild(item);
}

function addItem(containerId) {
  var container = document.getElementById(containerId);

  var newItem = document.createElement("div");
  newItem.classList.add(
    containerId === "educacion-container"
      ? "educacion-item"
      : "experiencia-item"
  );

  var html = "";
  if (containerId === "educacion-container") {
    html = `

    <div class="educacion-item">
    <div class="form-group">
        <hr>
        <div class="row">
            <div class="col-lg-6 mb-3">
                <label for="institucion">Nombre de Institución:</label>
                <input type="text" class="form-control" name="institucion[]"
                    placeholder="Ingrese el nombre de la institución">
            </div>
            <div class="col-lg-3 mb-3">
                <label for="mes">Mes de finalización:</label>
                <select class="form-control" id="mesInicioEducacion" name="mesFinEducacion[]">
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
            <div class="col-lg-3 mb-3">
                <label for="anio">Año de finalización:</label>
                <input type="number" class="form-control" id="anioFinEducacion"
                    name="anioFinEducacion[]" placeholder="Ingrese el año de finalización">
                </input>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 mb-3">
                <label for="carrera">Carrera Cursada:</label>
                <input type="text" class="form-control" name="carrera[]"
                    placeholder="Ingrese la carrera cursada">
            </div>
        </div>
    </div>
    <span class="remove-btn" onclick="removeItem(this)"><i class="fa-solid fa-square-xmark"></i></span>

</div>

<script>
    // Get the select element for the year
    var anioSelect = document.getElementById("anioFinEducacion");

    // Function to generate the range of years
    function generateYears(startYear, endYear) {
        var years = [];
        for (var year = startYear; year <= endYear; year++) {
            years.push(year);
        }
        return years;
    }

    // Generate the range of years (adjust the range as needed)
    var startYear = 1950;
    var endYear = new Date().getFullYear();
    var years = generateYears(startYear, endYear);

    // Populate the select element with the years
    years.forEach(function (year) {
        var option = document.createElement("option");
        option.value = year;
        option.text = year;
        anioSelect.appendChild(option);
    });
</script>



  `;
  } else if (containerId === "experiencia-container") {
    html = `
  <div class="experiencia-item">
      <div class="form-group">
      <hr>
        <div class="row">
          <div class="col-lg-4 mb-3">
            <label for="empresa">Nombre de empresa:</label>
            <input type="text" class="form-control" name="empresa[]" placeholder="Ingrese el nombre de la empresa">
          </div>
          <div class="col-lg-2 mb-3">
            <label for="mesInicioExperiencia">Mes de inicio:</label>
            <select class="form-control" name="mesInicioExperiencia[]">
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

          <div class="col-lg-2 mb-3">
            <div class="form-group">
              <label for="anioInicioExperiencia">Año de inicio:</label>
              <input type="number" class="form-control" id="anioInicioExperiencia"
                  name="anioInicioExperiencia[]" placeholder="Año Inicio">
              </input>
            </div>
          </div>
          <div class="col-lg-2 mb-3">
                <label for="mesFinExperiencia">Mes de finalización:</label>
                <select class="form-control" name="mesFinExperiencia[]">
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
          <div class="col-lg-2 mb-3">
            <div class="form-group">
            <label for="anioFinExperiencia">Año de finalización:</label>
              <input type="number" class="form-control" id="anioFinExperiencia"
                  name="anioFinExperiencia[]" placeholder="Año Finalización">
            </input>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 mb-3">
            <label for="cargo">Cargo desempeñado:</label>
            <input type="text" class="form-control" name="cargo[]" placeholder="Ingrese el cargo que desempeñó">
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 mb-3">
            <label for="actividades">Actividades realizadas en la empresa:</label>
            <textarea class="form-control" name="actividades[]" rows="3" placeholder="Ingrese las actividades realizadas"></textarea>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 mb-3">
            <label for="tecnologias">Tecnologias utilizadas:</label>
            <input type="text" class="form-control" name="tecnologias[]" placeholder="Ingrese las tecnologias">
          </div>  
        </div>
        <span class="remove-btn" onclick="removeItem(this)"><i class="fa-solid fa-square-xmark"></i></span>
      </div>
    </div>
  `;
  } else if (containerId === "certificacion-container") {
    html = `
  <div class="certificacion-item">
    <div class="form-group">
    <hr>
      <div class="row">
        <div class="col-lg-6 mb-3">
          <label for="certificacion">Nombre de Cerificación:</label>
          <input type="text" class="form-control" name="certificacion[]" placeholder="Ingrese el nombre de la certificación">
        </div>
        <div class="col-lg-3 mb-3">
          <label for="mes">Mes de finalización:</label>
          <select class="form-control" name="mesFinCertificacion[]">
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

        <div class="col-lg-3 mb-3">
          <label for="anioFinCertificacion">Año de finalización:</label>
          <input type="num" class="form-control" name="anioFinCertificacion[]" placeholder="Año de Finalización">
          </input>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 mb-3">
          <label for="institucionCertificacion">Intitucion que entregó la certificación:</label>
          <input type="text" class="form-control" name="institucionCertificacion[]" placeholder="Ingrese el nombre de la institución">
        </div>
      </div>
      <span class="remove-btn" onclick="removeItem(this)"><i class="fa-solid fa-square-xmark"></i></span>
    </div>
  </div>
  
  `;
  }

  newItem.innerHTML = html;
  container.appendChild(newItem);
}

// Función para generar la lista desplegable nivel español
function generarListaNivelEspanol() {
  const dropdownMenu = document.getElementById("espanolDropdown");
  dropdownMenu.innerHTML = ""; // Limpiamos la lista antes de generarla nuevamente

  niveles.forEach((nivel) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.classList.add("dropdown-item");
    link.textContent = nivel;

    // Agregar un evento click a cada elemento de la lista para que al elegirlo, se agregue al campo de texto
    link.addEventListener("click", function () {
      document.getElementById("espanol").value = nivel;
    });

    listItem.appendChild(link);
    dropdownMenu.appendChild(listItem);
  });
}
//generar la lista nivel espanol
generarListaNivelEspanol();

// Función para generar la lista desplegable nivel ingles
function generarListaNivelIngles() {
  const dropdownMenu = document.getElementById("inglesDropdown");
  dropdownMenu.innerHTML = ""; // Limpiamos la lista antes de generarla nuevamente

  niveles.forEach((nivel) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.classList.add("dropdown-item");
    link.textContent = nivel;

    // Agregar un evento click a cada elemento de la lista para que al elegirlo, se agregue al campo de texto
    link.addEventListener("click", function () {
      document.getElementById("ingles").value = nivel;
    });

    listItem.appendChild(link);
    dropdownMenu.appendChild(listItem);
  });
}
//generar la lista nivel ingles
generarListaNivelIngles();
