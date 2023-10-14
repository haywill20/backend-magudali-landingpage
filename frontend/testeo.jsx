const registerCv = () => {
  const [isOpenSistemasOperativos, setIsOpenSistemasOperativos] =
    useState(false);
  const [selectedSistemasOperativos, setSelectedSistemasOperativos] = useState(
    []
  );

  const guardar = async (e) => {
    e.preventDefault();
    await axios.post(URIdatosgenerales, {
      sistemasOperativos: selectedSistemasOperativos,
    });
  };

  const toggleDropdown = (dropdownName) => {
    if (dropdownName === "sistemasOperativos") {
      setIsOpenSistemasOperativos(!isOpenSistemasOperativos);
    }
  };

  const handleSelect = (value, dropdownName) => {
    if (dropdownName === "sistemasOperativos") {
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
    }
  };

  return (
    <>
      <form onSubmit={guardar} id="formulario">
        <div className="col-lg-6 mb-3">
          <label htmlFor="sistemasOperativos">Sistemas Operativos</label>
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
              onChange={(e) => setSelectedSistemasOperativos(e.target.value)}
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
                    onClick={() => handleSelect(option, "sistemasOperativos")}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="col d-flex justify-content-center align-items-center mb-5 mt-5">
          <button type="submit" className="btn btn-primary">
            Enviar Datos
          </button>
        </div>
      </form>
    </>
  );
};
