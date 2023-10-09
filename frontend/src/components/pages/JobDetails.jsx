import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import thumb from "../../assets/images/image-job-details.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import { empleos } from "../data/DataListas";
import { Link } from "react-router-dom";

const URI = "http://localhost:8000/empleos/";

const JobDetails = () => {
  const [empleo, setEmpleo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getEmpleo();
  }, []);

  // Procedimiento para mostrar un empleo
  const getEmpleo = async () => {
    try {
      const res = await axios.get(URI + id);
      console.log("Datos del empleo:", res.data); // Agrega este log para verificar la respuesta
      setEmpleo(res.data);
    } catch (error) {
      console.error("Error al cargar el empleo:", error);
    }
  };

  return (
    <>
      <Header />

      <div className="appie-page-title-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-page-title-item">
                <h3 className="title">Detalles de la vacante</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="appie-features-area-2 pt-90 pb-100" id="features">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="appie-section-title appie-section-title-2 text-center">
                <h3 className="appie-title">{empleo.nombre}</h3>
                <p>{empleo.resumen}</p>
              </div>
            </div>
          </div>
          <div className="row mt-30 align-items-center">
            <div className="col-lg-12">
              <div className="appie-features-boxes">
                <div className="appie-features-box-item">
                  <h4 className="title">Perfil</h4>
                  <p>{empleo.perfil}</p>
                </div>
                <div className="appie-features-box-item item-2">
                  <h4 className="title">Descripción</h4>
                  <p>{empleo.descripcion}</p>
                </div>
                <div className="appie-features-box-item item-3">
                  <h4 className="title">Responsabilidades</h4>
                  <p>{empleo.responsabilidades}</p>
                </div>
                <div className="appie-features-box-item item-4">
                  <h4 className="title">Tecnologías</h4>
                  <p>{empleo.tecnologias}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-30 align-items-center">
            <div className="col-lg-6">
              {" "}
              <div className="appie-features-box-item item-2">
                <h4 className="title">Tiempo</h4>
                <p>{empleo.tiempo}</p>
              </div>
            </div>
            <div className="col-lg-6">
              {" "}
              <div className="appie-features-box-item item-2">
                <h4 className="title">Idioma</h4>
                <p>{empleo.idioma}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-30 align-items-center">
          <div className="col-lg-12 text-center">
            {" "}
            <Link to="/register">
              <div className="btn btn-success mx-auto">
                Aplicar a esta vacante
              </div>
            </Link>
          </div>
        </div>

        <div className="features-shape-1">
          <img src="assets/images/shape/shape-15.png" alt="" />
        </div>
        <div className="features-shape-2">
          <img src="assets/images/shape/shape-14.png" alt="" />
        </div>
        <div className="features-shape-3">
          <img src="assets/images/shape/shape-13.png" alt="" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JobDetails;
