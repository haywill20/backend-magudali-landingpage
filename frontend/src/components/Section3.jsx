import React, { useState } from "react";
import { Link } from "react-router-dom";
import Feature1 from "../assets/images/features-thumb-1.png";
import Feature2 from "../assets/images/features-thumb-2.png";
import Feature3 from "../assets/images/features-thumb-3.png";
import Feature4 from "../assets/images/features-thumb-4.png";
import Shape6 from "../assets/images/shape/shape-6.png";
import Shape7 from "../assets/images/shape/shape-7.png";
import Shape8 from "../assets/images/shape/shape-8.png";

function Section3() {
  const [activeImage, setActiveImage] = useState(Feature1);

  const handleImageClick = (image) => {
    setActiveImage(image);
  };

  return (
    <>
      <section className="appie-features-area pt-100" id="features">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="appie-features-tabs-btn">
                <div
                  className="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    className={`nav-link ${
                      activeImage === Feature1 ? "active" : ""
                    }`}
                    onClick={() => handleImageClick(Feature1)}
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fas fa-mobile-alt"></i>
                    App Clientes
                  </a>
                  <a
                    className={`nav-link ${
                      activeImage === Feature2 ? "active" : ""
                    }`}
                    onClick={() => handleImageClick(Feature2)}
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fas fa-store"></i> App Comercios
                  </a>
                  <a
                    className={`nav-link ${
                      activeImage === Feature3 ? "active" : ""
                    }`}
                    onClick={() => handleImageClick(Feature3)}
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fas fa-cogs"></i> Admin Comercios
                  </a>
                  <a
                    className={`nav-link ${
                      activeImage === Feature4 ? "active" : ""
                    }`}
                    onClick={() => handleImageClick(Feature4)}
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fas fa-box"></i> App Delivery
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className={`tab-pane fade ${
                    activeImage === Feature2 ? "show active" : ""
                  }`}
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div
                        className="appie-features-thumb text-center wow animated fadeInUp"
                        data-wow-duration="2000ms"
                        data-wow-delay="200ms"
                      >
                        <img src={Feature2} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div
                        className="appie-features-content wow animated fadeInRight"
                        data-wow-duration="2000ms"
                        data-wow-delay="600ms"
                      >
                        <span>Magudali Clientes</span>
                        <h3 className="title">
                          La App que trae <br /> las compras a tu hogar
                        </h3>
                        <p>
                          Busca lo que quieras donde quieras, los productos
                          siempre al alcance de tu mano.
                        </p>
                        <Link className="main-btn" to="/404">
                          Saber Más
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeImage === Feature1 ? "show active" : ""
                  }`}
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div
                        className="appie-features-thumb text-center animated fadeInUp"
                        data-wow-duration="2000ms"
                        data-wow-delay="200ms"
                      >
                        <img src={Feature1} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div
                        className="appie-features-content animated fadeInRight"
                        data-wow-duration="2000ms"
                        data-wow-delay="600ms"
                      >
                        <span>Magudali Comercios</span>
                        <h3 className="title">
                          Publica tus productos
                          <br />y muéstralos a tus clientes
                        </h3>
                        <p>
                          La aplicación que te permite tener tu negocio online
                          las 24 horas del día.
                        </p>
                        <a className="main-btn" href="#">
                          Saber Más
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeImage === Feature3 ? "show active" : ""
                  }`}
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div
                        className="appie-features-thumb text-center animated fadeInUp"
                        data-wow-duration="2000ms"
                        data-wow-delay="200ms"
                      >
                        <img src={Feature3} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div
                        className="appie-features-content animated fadeInRight"
                        data-wow-duration="2000ms"
                        data-wow-delay="600ms"
                      >
                        <span>Admin Comercios</span>
                        <h3 className="title">
                          Administra tu
                          <br /> comercio desde la web.
                        </h3>
                        <p>
                          Gestiona tus productos desde la web con facilidad y
                          sin problemas.
                        </p>
                        <a className="main-btn" href="#">
                          Saber Más
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeImage === Feature4 ? "show active" : ""
                  }`}
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div
                        className="appie-features-thumb text-center animated fadeInUp"
                        data-wow-duration="2000ms"
                        data-wow-delay="200ms"
                      >
                        <img src={Feature4} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div
                        className="appie-features-content animated fadeInRight"
                        data-wow-duration="2000ms"
                        data-wow-delay="600ms"
                      >
                        <span>Magudali Delivery</span>
                        <h3 className="title">
                          Forma parte de <br /> el equipo Magudali
                        </h3>
                        <p>
                          Realiza entregas y genera ingresos extras con
                          nosotros.
                        </p>
                        <a className="main-btn" href="#">
                          Saber Más
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="features-shape-1">
          <img src={Shape6} alt="" />
        </div>
        <div className="features-shape-2">
          <img src={Shape7} alt="" />
        </div>
        <div className="features-shape-3">
          <img src={Shape8} alt="" />
        </div>
      </section>
    </>
  );
}

export default Section3;
