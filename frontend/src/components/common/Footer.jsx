import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
function Footer() {
  return (
    <>
      <section className="appie-footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-about-widget">
                <div className="logo">
                  <Link to="/">
                    <img src={Logo} />
                  </Link>
                </div>
                <p>
                  Magudali es la herramienta que facilitará tus compras y
                  ventas.
                </p>
                <a href="/404">
                  Saber Más <i className="fal fa-arrow-right"></i>
                </a>
                <div className="social mt-30">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=100063550454291"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" target="_blank"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" target="_blank"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://ni.linkedin.com/company/magudali"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-navigation">
                <h4 className="title">Compañía</h4>
                <ul>
                  <li>
                    <a href="/404">Sobre nosotros</a>
                  </li>
                  <li>
                    <Link to="/jobsPage">Empleos</Link>
                  </li>
                  <li>
                    <a href="/404">Servicios</a>
                  </li>
                  <li>
                    <a href="/404">Contacto</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-navigation">
                <h4 className="title">Soporte</h4>
                <ul>
                  <li>
                    <Link to="/support">Soporte</Link>
                  </li>
                  <li>
                    <a href="/404">Comunidad</a>
                  </li>
                  <li>
                    <a href="/404">Faqs</a>
                  </li>
                  <li>
                    <Link to="/terms" replace>
                      Términos y condiciones
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacyPolicies">
                      Politicas de privacidad y seguridad
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget-info">
                <h4 className="title">Ponerse en contacto</h4>
                <ul>
                  <li>
                    <a href="mailto:magudali@outlook.com">
                      <i className="fal fa-envelope"></i> magudali@outlook.com
                    </a>
                  </li>
                  <li>
                    <a href="/404">
                      <i className="fal fa-phone"></i> +(505) 23135152
                    </a>
                  </li>
                  <li>
                    <a href="/404">
                      <i className="fal fa-map-marker-alt"></i> Nicaragua
                      Costado sur del Cabildo Sutiaba.
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-copyright d-flex align-items-center justify-content-between pt-35">
                <div className="apps-download-btn">
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
                <div className="copyright-text">
                  <p>Copyright © 2023 Magudali. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
