import React from "react";
import { Link } from "react-router-dom";
import Traffic from "../assets/images/traffic-thumb.png";

function Section4() {
  return (
    <>
      <section className="appie-traffic-area pt-140 pb-180">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="appie-traffic-title">
                <span>Magudali</span>
                <h3 className="title">Unete a nuestro equipo.</h3>
                <p>
                  Se parte de los nuestros, crea tu comercio electrónico y has
                  crecer tu economía .
                </p>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="appie-traffic-service mb-30">
                    <div className="icon">
                      <i className="fal fa-check"></i>
                    </div>
                    <h5 className="title">Aministra tu negocio</h5>
                    <p>
                      Ya puedes administrar tu negocio y tus productos de forma
                      fácil y rápida.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="appie-traffic-service item-2 mb-30">
                    <div className="icon">
                      <i className="fal fa-check"></i>
                    </div>
                    <h5 className="title">Publicidad</h5>
                    <p>
                      Mante a tus clientes informados sobre lo nuevo que
                      ofreces.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="appie-traffic-service item-3">
                    <div className="icon">
                      <i className="fal fa-check"></i>
                    </div>
                    <h5 className="title">Gestiona tu inventario</h5>
                    <p>Organiza de forma eficiente tus productos.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="appie-traffic-service item-4">
                    <div className="icon">
                      <i className="fal fa-check"></i>
                    </div>
                    <h5 className="title">Crea tu catálogo</h5>
                    <p>
                      Crea tu catalogo de productos y centra la atención de tus
                      clientes.
                    </p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="traffic-btn mt-50">
                    <Link className="main-btn" href="/404">
                      Saber Más <i className="fal fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="traffic-thumb ">
          <img
            className="wow animated fadeInRight"
            data-wow-duration="2000ms"
            data-wow-delay="200ms"
            src={Traffic}
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default Section4;
