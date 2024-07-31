import IconModel from "../../models/admin/IconModel.js";

// Obtener todos los iconos
export const getAllIcons = async (req, res) => {
  try {
    const icons = await IconModel.findAll();
    res.status(200).json(icons); // 200 - OK
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener los iconos", error: error.message }); // 500 - Error Interno del Servidor
  }
};

// Obtener un icono por ID
export const getIcon = async (req, res) => {
  try {
    const icon = await IconModel.findByPk(req.params.id);
    if (!icon) return res.status(404).json({ message: 'Icon not found' }); // 404 - No Encontrado
    res.status(200).json(icon); // 200 - OK
  } catch (error) {
    res.status(500).json({ message: error.message }); // 500 - Error Interno del Servidor
  }
};

// Crear un nuevo icono
export const createIcon = async (req, res) => {
  try {
    const { nombre, valor } = req.body;
    const newIcon = await IconModel.create({ nombre, valor });
    res.status(201).json(newIcon); // 201 - Creado
  } catch (error) {
    res.status(500).json({ message: error.message }); // 500 - Error Interno del Servidor
  }
};


// Procedimiento para actualizar un icono por ID
export const updateIcon = async (req, res) => {
  const iconId = req.params.id;

  // Verificar que el ID del ícono sea válido
  if (!iconId || isNaN(parseInt(iconId))) {
    return res.status(400).json({ message: "ID de ícono no válido" });
  }

  try {
    // Verificar que el ícono exista en la base de datos
    const icon = await IconModel.findByPk(iconId);

    if (!icon) {
      return res.status(404).json({ message: "Ícono no encontrado" });
    }

    // Validaciones adicionales para los campos del ícono
    const { nombre, valor } = req.body;
    if (!nombre || !valor) {
      return res.status(400).json({ message: "Nombre y valor son requeridos" });
    }

    // Actualizar el ícono
    await IconModel.update(req.body, {
      where: {
        id: iconId,
      },
    });

    res.status(200).json({ message: "Ícono actualizado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el ícono", error: error.message });
  }
};


// Eliminar un icono por ID
export const deleteIcon = async (req, res) => {
  try {
    const icon = await IconModel.findByPk(req.params.id);
    if (!icon) return res.status(404).json({ message: 'Icon not found' }); // 404 - No Encontrado
    await icon.destroy();
    res.status(204).send(); // 204 - Sin Contenido
  } catch (error) {
    res.status(500).json({ message: error.message }); // 500 - Error Interno del Servidor
  }
};
