import React from "react";
import { Link } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header";

const SupportPage = () => {
  return (
    <>
      <Header />
      <div className="appie-page-title-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-page-title-item">
                <h3 className="title">
                  Te damos la bienvenida al Servicio ayuda de Magudali
                </h3>
                <h4>¿Como podemos darte ayuda el dia de hoy?</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact--info-area">
                <h3>Ponerse en contacto</h3>
                <p>
                  ¿En busca de ayuda? Rellena el formulario y te daremos
                  solución en breve.
                </p>
                <div className="single-info">
                  <h5>Dirección</h5>
                  <p>
                    <i className="fal fa-home"></i>
                    Nicaragua
                    <br /> Costado sur del Cabildo Sutiaba.
                  </p>
                </div>
                <div className="single-info">
                  <h5>Telefono</h5>
                  <p>
                    <i className="fal fa-phone"></i>
                    (+505) 23135152
                    <br />
                  </p>
                </div>
                <div className="single-info">
                  <h5>Soporte</h5>
                  <p>
                    <i className="fal fa-envelope"></i>
                    magudali@outlook.com
                    <br />
                  </p>
                </div>
                <div className="ab-social">
                  <h5>Buscanos en:</h5>
                  <a
                    className="fac"
                    href="https://www.facebook.com/profile.php?id=100063550454291"
                    target={"_blank"}
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="twi" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="you"
                    href="https://www.youtube.com/@magudali6519"
                    target={"_blank"}
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a
                    className="lin"
                    href="https://ni.linkedin.com/company/magudali"
                    target={"_blank"}
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="contact-form">
                <h4>Contactanos</h4>
                <p>
                  Ingresa los datos solicitados a continuacion para brindarte
                  una excelente experiencia.
                </p>
                <form action="#" method="post" className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="f-name"
                      placeholder="Primer Nombre"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="l-name"
                      placeholder="Primer Apellido"
                    />
                  </div>
                  <div className="col-md-6">
                    <input type="email" name="email" placeholder="Correo" />
                  </div>
                  <div className="col-md-6">
                    <input type="number" name="phone" placeholder="Teléfono" />
                  </div>
                  <div className="col-md-12">
                    <input type="text" name="suject" placeholder="Subject" />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      name="message"
                      placeholder="¿Como podemos ayudarte?"
                    ></textarea>
                  </div>
                  <div className="col-md-8">
                    <div className="condition-check">
                      <input id="terms-conditions" type="checkbox" />
                      <label for="terms-conditions">
                        Estoy de acuerdo con los{" "}
                        <Link to="/terms">Terminos y Condiciones</Link>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4 text-right">
                    <input type="submit" name="submit" value="Enviar mensaje" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default SupportPage;
