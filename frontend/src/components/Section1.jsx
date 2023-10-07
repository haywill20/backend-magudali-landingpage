import React from "react";
import Movil1 from "../assets/images/hero-thumb-1.png";
import Movil2 from "../assets/images/hero-thumb-2.png";
import Shape2 from "../assets/images/shape/shape-2.png";
import Shape3 from "../assets/images/shape/shape-3.png";
import Shape4 from "../assets/images/shape/shape-4.png";

function Section1() {
  return (
    <>
      <section className="appie-hero-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="appie-hero-content">
                <span>Bienvenido a Magudali</span>
                <h1 className="appie-title">Compra Desde Cualquier Lugar.</h1>
                <p>
                  Descubre la comodidad y variedad de compras en línea con
                  nuestra aplicación, brindándote acceso a una amplia selección
                  de productos desde la comodidad de tu hogar, en cualquier
                  momento y en cualquier lugar.
                </p>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-apple"></i> Descargar para iOS
                    </a>
                  </li>
                  <li>
                    <a
                      className="item-2"
                      href="https://play.google.com/store/apps/details?id=com.magudali.customer"
                      target="_blank"
                    >
                      <i className="fab fa-google-play"></i> Descargar para
                      Android
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="appie-hero-thumb">
                <div className="thumb">
                  <img src={Movil1} alt="" />
                </div>
                <div className="thumb-2">
                  <img src={Movil2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shape-1">
          <img src={Shape2} alt="" />
        </div>
        <div className="hero-shape-2">
          <img src={Shape3} alt="" />
        </div>
        <div className="hero-shape-3">
          <img src={Shape4} alt="" />
        </div>
      </section>
    </>
  );
}

export default Section1;
