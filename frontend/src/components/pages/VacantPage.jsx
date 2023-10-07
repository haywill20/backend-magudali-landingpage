import React from "react";

function VacantPage({ selectedDetails }) {
  return (
    <div className="vacant-details">
      <h2>Detalles de la Vacante</h2>
      {selectedDetails}
      {/* Aquí puedes personalizar la presentación de los detalles */}
    </div>
  );
}

export default VacantPage;
