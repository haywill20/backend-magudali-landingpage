import React, { useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import iOS from "../../assets/images/ios.png";
import Android from "../../assets/images/android.png";

function Download() {
  useEffect(() => {
    document.title = "Descargar"; // Título predeterminado de tu sitio web
    return () => {
      document.title = "Descargar";
    };
  }, []);
  return (
    <>
      <Header />
      <section className="appie-download-3-area pt-100 mb-20" id="download">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-section-title text-center">
                <h3 className="appie-title">Descargar ahora!</h3>
                <p>Descarga nuestras apps para clientes - son gratis.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="appie-download-3-box mt-30 mr-20 wow animated fadeInLeft"
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                <div className="content">
                  <h4 className="title">Android</h4>
                  <p>Ya disponible en PlayStore.</p>
                  <a
                    className="main-btn"
                    href="https://play.google.com/store/apps/details?id=com.magudali.customer"
                    target="_blank"
                  >
                    <i className="fab fa-google-play"></i>Descargar para Android
                  </a>
                </div>
                <div className="thumb text-center">
                  <img src={Android} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="appie-download-3-box mt-30 ml-20 wow animated fadeInRight"
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
              >
                <div className="content">
                  <h4 className="title">iOS & iPadOS</h4>
                  <p>Ya disponible en AppStore.</p>
                  <a className="main-btn main-btn-2" href="#">
                    <i className="fab fa-apple"></i>Descargar para iOS
                  </a>
                </div>
                <div className="thumb text-right">
                  <img src={iOS} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Download;
