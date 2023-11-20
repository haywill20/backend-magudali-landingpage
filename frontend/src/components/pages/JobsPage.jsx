import React, { useState, useEffect } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Card from "../shared/CardJobs";
import apiUrl from "../config/Config";
import axios from "axios";
const URI = `${apiUrl}/empleos/`;

const JobsPage = () => {
  const [empleos, setEmpleos] = useState([]);

  useEffect(() => {
    getEmpleos();
  }, []);

  //procedimiento para mostrar todos los empleos
  const getEmpleos = async () => {
    const res = await axios.get(URI);
    setEmpleos(res.data);
  };

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
            {empleos.map((empleo) => (
              <div key={empleo.id} className="col-lg-4 col-md-6">
                <Card
                  id={empleo.id}
                  nombre={empleo.nombre}
                  resumen={empleo.resumen}
                  icon={empleo.icon}
                  estilo={empleo.estilo}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default JobsPage;
