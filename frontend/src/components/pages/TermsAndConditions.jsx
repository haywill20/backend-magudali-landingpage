import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Card from "../shared/Card";
import data from "../data/DataTerms";

function TermsAndConditions() {
  useEffect(() => {
    document.title = "Términos y condiciones"; // Título predeterminado de tu sitio web
    return () => {
      document.title = "Términos y condiciones";
    };
  }, []);
  return (
    <>
      <Header />
      <section className="appie-services-2-area pt-150 mb-50" id="service">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6 col-md-8">
              <div className="appie-section-title">
                <h3 className="appie-title">Términos y condiciones</h3>
                <p>
                  Te invitamos a leer nuestros términos y condiciones los cuales
                  aceptas al ser un vendedor, cliente o delivery de Magudali.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div>
              <div className="row">
                {data.map((item, index) => (
                  <div key={index} className="col-lg-4 col-md-6">
                    <Card
                      estilo={item.estilo}
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                      ruta={item.ruta}
                      link={item.link}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default TermsAndConditions;
