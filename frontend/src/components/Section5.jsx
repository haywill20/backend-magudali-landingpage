import React from "react";

function Section5() {
  return (
    <>
      <section className="appie-faq-area pb-95">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-section-title text-center">
                <h3 className="appie-title">Preguntas frecuentes</h3>
                <p>Algunas preguntas frecuentes que podrian ayudarte.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="faq-accordion wow fadeInRight mt-30"
                data-wow-duration="1500ms"
              >
                <div
                  className="accrodion-grp wow fadeIn"
                  data-wow-duration="1500ms"
                  data-grp-name="faq-accrodion"
                >
                  <div className="accrodion active ">
                    <div className="accrodion-inner">
                      <div className="accrodion-title">
                        <h4>¿Cómo puedo vender en Magudali?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            Para comenzar a vender en nuestro Marketplace, debes
                            registrarte como vendedor y crear una cuenta desde
                            la <a href="#">app</a> o desde la{" "}
                            <a href="#">Web</a> Luego, podrás cargar tus
                            productos, descripciones, imágenes y precios a
                            través de nuestro panel de control de vendedores.
                            Una vez que tus productos sean aprobados, estarán
                            disponibles para que los compradores puedan
                            encontrarlos y adquirirlos.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accrodion  ">
                    <div className="accrodion-inner">
                      <div className="accrodion-title">
                        <h4>
                          ¿Ofrecen servicio al cliente en caso de tener
                          problemas con mi compra?
                        </h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            Sí, tenemos un equipo de servicio al cliente
                            dedicado para ayudarte en caso de cualquier problema
                            con tu compra. Puedes comunicarte con nosotros a
                            través de nuestro formulario de contacto, correo
                            electrónico o número de teléfono. Estaremos
                            encantados de ayudarte a resolver cualquier
                            inconveniente.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="faq-accordion wow fadeInRight mt-30"
                data-wow-duration="1500ms"
              >
                <div
                  className="accrodion-grp wow fadeIn"
                  data-wow-duration="1500ms"
                  data-grp-name="faq-accrodion"
                >
                  <div className="accrodion ">
                    <div className="accrodion-inner">
                      <div className="accrodion-title">
                        <h4>¿Cuánto tiempo tarda en procesarse mi pedido?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            Nuestro objetivo es procesar los pedidos lo más
                            rápido posible. La mayoría de los pedidos se
                            procesan dentro de las 24-48 horas posteriores a la
                            compra. Sin embargo, el tiempo exacto puede variar
                            según la disponibilidad del producto, la ubicacion y
                            distancia del producto.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accrodion  ">
                    <div className="accrodion-inner">
                      <div className="accrodion-title">
                        <h4>¿Cuál es la política de reembolso?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            {" "}
                            Nuestra política de reembolso está diseñada para
                            garantizar la satisfacción del cliente. Si por
                            alguna razón no estás satisfecho con tu compra,
                            tienes un plazo determinado de días desde la
                            recepción del producto para solicitar un reembolso.
                            Revisaremos tu solicitud y, si cumple con nuestras
                            políticas, procesaremos el reembolso en un plazo
                            determinado.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="faq-text text-center pt-40">
                <p>
                  ¿No encuentras una respuesta?{" "}
                  <a href="magudali@outlook.com">
                    Envíanos un correo electrónico
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section5;
