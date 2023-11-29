import React from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="appie-about-top-title-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="appie-about-top-title">
                <h2 className="title">
                  La plataforma líder en Comercio Electrónico
                </h2>
                <p>Somos tu mejor opción para comprar o vender en linea.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====== APPIE HEADER PART ENDS ======*/}
      <section className="appie-about-page-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="appie-about-page-content">
                <h3 className="title">
                  Bienvenido a Magudali: Revolucionando el Comercio Electrónico.
                </h3>
                <p>
                  Magudali, el destino definitivo para comerciantes y
                  compradores en el mundo del comercio electrónico! Somos la
                  plataforma que une a emprendedores y consumidores, ofreciendo
                  una experiencia única en la que la innovación y la facilidad
                  van de la mano. Comerciantes, aquí encontrarán un espacio para
                  destacar y expandir sus negocios con herramientas avanzadas y
                  una audiencia global ávida de descubrir nuevos productos.
                  Compradores, los invitamos a explorar un catálogo diverso y
                  emocionante, respaldado por tecnología de vanguardia que
                  garantiza una experiencia de compra segura y sin
                  complicaciones. Únanse a nosotros para formar parte de la
                  revolución del comercio electrónico y descubrir un mundo de
                  posibilidades en Magudali.
                </p>
                <a href="#">
                  {" "}
                  Comercios <i className="fal fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== APPIE HEADER PART ENDS ======*/}
      {/*====== APPIE SERRVICE 2 PART START ======*/}
      <section className="appie-services-2-area pt-90 pb-55" id="service">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6 col-md-8">
              <div className="appie-section-title">
                <h3 className="appie-title">Nos guían nuestros valores</h3>
                <p>
                  Nos guiamos por principios fundamentales que abarcan la
                  transparencia, la integridad y el compromiso con nuestros
                  usuarios.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="appie-single-service-2 appie-single-service-about mt-30 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                <div className="icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <h4 className="title">Transparencia:</h4>
                <p>
                  Fomentamos la transparencia en todas nuestras operaciones,
                  desde las transacciones hasta las políticas de uso.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="appie-single-service-2 appie-single-service-about item-2 mt-30 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
              >
                <div className="icon">
                  <i className="fa-regular fa-lightbulb"></i>
                </div>
                <h4 className="title">Innovación</h4>
                <p>
                  Buscamos constantemente nuevas formas de mejorar y ofrecer
                  soluciones innovadoras para el comercio electrónico.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="appie-single-service-2 appie-single-service-about item-3 mt-30 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="600ms"
              >
                <div className="icon">
                  <i className="fa-regular fa-handshake"></i>
                </div>
                <h4 className="title">Confianza</h4>
                <p>
                  Construimos relaciones sólidas basadas en la confianza mutua.
                  Nos esforzamos por mantener la confianza de nuestros usuarios
                  y comerciantes.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="appie-single-service-2 appie-single-service-about item-4 mt-30 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                <div className="icon">
                  <i className="fa-solid fa-hand-holding-heart"></i>
                </div>
                <h4 className="title">Compromiso con el cliente</h4>
                <p>
                  Nuestro compromiso principal es satisfacer las necesidades de
                  nuestros usuarios y comerciantes.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="appie-single-service-2 appie-single-service-about item-5 mt-30 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
              >
                <div className="icon">
                  <i className="fa-solid fa-tree"></i>
                </div>
                <h4 className="title">Responsabilidad social</h4>
                <p>
                  Nos preocupamos por nuestro impacto en la sociedad y el medio
                  ambiente, buscamos promover prácticas comerciales sostenibles
                  y éticas.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="appie-single-service-2 appie-single-service-about item-6 mt-30 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="600ms"
              >
                <div className="icon">
                  <i className="fa-solid fa-puzzle-piece"></i>
                </div>
                <h4 className="title">Adaptabilidad</h4>
                <p>
                  Estamos dispuestos a adaptarnos y evolucionar en un entorno
                  siempre cambiante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== APPIE SERRVICE 2 PART ENDS ======*/}
      {/*====== APPIE TEAM PART START ======*/}
      <section className="appie-team-area appie-team-about-area pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-section-title text-center">
                <h3 className="appie-title">
                  Conozca a los miembros de nuestro equipo
                </h3>
                <p>
                  Permítanos presentarle al increíble equipo detrás de Magudali.
                  Cada miembro de nuestro equipo aporta una combinación única de
                  habilidades, pasión y experiencia en el mundo del comercio
                  electrónico.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="appie-team-item appie-team-item-about mt-30 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="200ms"
              >
                <div className="thumb">
                  <img src="assets/images/team-1.jpg" alt="" />
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content text-left">
                  <h5 className="title">Haywill Miranda</h5>
                  <span>CEO-Fundador</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="appie-team-item appie-team-item-about mt-30 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="400ms"
              >
                <div className="thumb">
                  <img src="assets/images/team-2.jpg" alt="" />
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content text-left">
                  <h5 className="title">Hilario Montenegro</h5>
                  <span>Diseñador Gráfico</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="appie-team-item appie-team-item-about mt-30 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="600ms"
              >
                <div className="thumb">
                  <img src="assets/images/team-3.jpg" alt="" />
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content text-left">
                  <h5 className="title">Lennox Monge</h5>
                  <span>Desarrollador Android</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="appie-team-item appie-team-item-about mt-30 wow animated fadeInUp"
                data-wow-duration="2000ms"
                data-wow-delay="800ms"
              >
                <div className="thumb">
                  <img src="assets/images/team-4.jpg" alt="" />
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content text-left">
                  <h5 className="title">Denis West</h5>
                  <span>Desarrollador FullStack</span>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="team-btn text-center mt-50">
                <a className="main-btn" href="#">
                  {" "}
                  Ver todos los Miembros <i className="fal fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== APPIE TEAM PART ENDS ======*/}
      {/*====== APPIE SPONSER PART START ======*/}
      <section className="appie-sponser-area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-section-title text-center">
                <h3 className="appie-title">
                  Magudali tiene <br /> tus negocios favoritos
                </h3>
                <p>Únase al mejor Marketplace en toda Nicaragua.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-sponser-box d-flex justify-content-center">
                <div className="sponser-item">
                  <img src="assets/images/sponser-1.png" alt="" />
                </div>
                <div className="sponser-item">
                  <img src="assets/images/sponser-2.png" alt="" />
                </div>
                <div className="sponser-item">
                  <img src="assets/images/sponser-3.png" alt="" />
                </div>
                <div className="sponser-item">
                  <img src="assets/images/sponser-4.png" alt="" />
                </div>
                <div className="sponser-item">
                  <img src="assets/images/sponser-5.png" alt="" />
                </div>
                <div className="sponser-item">
                  <img src="assets/images/sponser-6.png" alt="" />
                </div>
              </div>
              <div className="appie-sponser-box item-2 d-flex justify-content-center">
                <div className="sponser-item">
                  <img src="assets/images/sponser-7.png" alt="" />
                </div>
                <div className="sponser-item">
                  <img src="assets/images/sponser-8.png" alt="" />
                </div>
                <div className="sponser-item">
                  <img src="assets/images/sponser-9.png" alt="" />
                </div>
                <div className="sponser-item">
                  <img src="assets/images/sponser-10.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sponser-shape">
          <img src="assets/images/sponser-shape.png" alt="" />
        </div>
        <div className="col-lg-12">
          <div className="team-btn text-center mt-50">
            <a className="main-btn" href="#">
              {" "}
              Unirse Ahora <i className="fal fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
      {/*====== APPIE SPONSER PART ENDS ======*/}
      {/*====== APPIE SPONSER PART ENDS ======*/}
      <div className="appie-signup-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-signup-box">
                <span>Suscribete ahora</span>
                <h3 className="title">Es Gratis.</h3>
                <form action="#">
                  <div className="input-box">
                    <input type="text" placeholder="Ingrese su nombre" />
                  </div>
                  <div className="input-box">
                    <input type="email" placeholder="Ingrese su correo" />
                  </div>
                  <div className="input-box">
                    <button type="submit">Suscribirse</button>
                  </div>
                  <div className="appie_checkbox_common checkbox_style2">
                    <div>
                      <input type="checkbox" name="checkbox2" id="checkbox4" />
                      <label for="checkbox4">
                        <span></span>Al registrarte aceptas nuestros{" "}
                        <a href="/terms">Términos y condiciones.</a>
                      </label>
                    </div>
                  </div>
                </form>
                <div className="thumb">
                  <img src="assets/images/signup-thumb.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====== APPIE SPONSER PART ENDS ======*/}
      <Footer isAboutPage={true} />{" "}
    </>
  );
};

export default AboutUs;
