import React from "react";
import Customer from "../assets/images/customer.png";
import Seller from "../assets/images/seller.png";
import Admin from "../assets/images/admin.png";
import Delivery from "../assets/images/Delivery.png";
function Section2() {
  return (
    <>
      <section className="appie-service-area pt-90 pb-100" id="service">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="appie-section-title text-center">
                <h3 className="appie-title">
                  Administra <br /> Busca, Compra, Vende.
                </h3>
                <p>
                  Únete a nosotros y lleva tu comercio electrónico al siguiente
                  nivel con nuestras aplicaciones.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="appie-single-service text-center mt-30 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.magudali.customer"
                  target="_blank"
                >
                  <img src={Customer} alt="" />
                </a>

                <h4 className="appie-title">Magudali Clientes</h4>
                <p>Busca lo que deseas comprar desde cualquier lugar.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="appie-single-service text-center mt-30 item-2 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.magudali.seller&hl=en_US"
                  target="_blank"
                >
                  <img src={Seller} alt="" />
                </a>
                <h4 className="appie-title">App Comercios</h4>
                <p>
                  Registra tu negocio y ponlo al alcance de tus clientes todo el
                  tiempo.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="appie-single-service text-center mt-30 item-3 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="600ms"
              >
                <a href="https://panel.magudali.com/seller/login">
                  <img src={Admin} alt="" />
                </a>
                <h4 className="appie-title">Admin Web</h4>
                <p>Administra tu negocio también en nuestra plataforma web.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="appie-single-service text-center mt-30 item-4 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="800ms"
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.magudali.delivery"
                  target="_blank"
                >
                  <img src={Delivery} alt="" />
                </a>
                <h4 className="appie-title">App Delivery</h4>
                <p>
                  Puedes formar parte del equipo Magudali realizando entregas..
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section2;
