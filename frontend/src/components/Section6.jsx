import React from "react";
import Suscribe from "../assets/images/suscribe.png";
function Section6() {
  return (
    <>
      <section className="appie-project-area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="appie-project-box wow animated slideInUp"
                data-wow-duration="1000ms"
                data-wow-delay="0ms"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="appie-project-content">
                      <h3 className="title">¡Suscríbete a Magudali!</h3>
                      <p>
                        Recibe nuestras últimas noticias y actualizaciones
                        directamente en tu correo electrónico.
                      </p>
                      <form action="#">
                        <div className="input-box mt-30">
                          <input type="text" placeholder="Tu correo" />
                          <button>Subscribe</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="appie-project-thumb">
                  <img src={Suscribe} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section6;
