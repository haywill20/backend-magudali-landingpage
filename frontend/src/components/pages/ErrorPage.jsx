import React, { useEffect } from "react";
import error from "../../assets/images/error.gif";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";
function Error() {
  useEffect(() => {
    document.title = "Error 404"; // Título predeterminado de tu sitio web
    return () => {
      document.title = "Error 404";
    };
  }, []);
  return (
    <>
      <Header />
      <div className="appie-error-area mb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="appie-error-content text-center">
                <img src={error} alt="" />
                <span>Ups!</span>
                <h3 className="title">Pagina no encontrada.</h3>
                <p>
                  Esta pagina se encuentra en contrucción,
                  <br />
                  ¡pronto estará disponible para usted!
                </p>
                <Link to="/">
                  Ir al inicio <i className="fal fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Error;
