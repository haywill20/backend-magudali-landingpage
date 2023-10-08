import React, { useState, useEffect } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Card from "../shared/CardJobs";
import data from "../data/DataJobs";

function JobsPage() {
  const [selectedDetails, setSelectedDetails] = useState(null); // Estado para almacenar detalles seleccionados

  const handleCardClick = (details) => {
    setSelectedDetails(details);
  };

  useEffect(() => {
    document.title = "Empleos"; // Establecer el título del documento
  }, []);

  return (
    <>
      <Header />
      <section className="appie-services-2-area pt-150 mb-50" id="service">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6 col-md-8">
              <div className="appie-section-title">
                <h3 className="appie-title">Vacantes disponibles</h3>
                <p>
                  Te invitamos a aplicar a cualquiera de nuestras vacantes que
                  se ajuste a tu perfil tecnológico.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {data.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <Card
                  estilo={item.estilo}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  ruta={item.ruta}
                  detalles={item.detalles}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default JobsPage;
