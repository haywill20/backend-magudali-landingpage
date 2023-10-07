import React, { useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import thumb from "../../assets/images/privacy-policies.png";

function PrivacyPoliciesPage() {
  useEffect(() => {
    document.title = "Políticas de privacidad"; // Establecer el título del documento
  }, []);
  return (
    <>
      <Header />
      <div className="appie-page-title-area appie-page-service-title-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-page-title-item">
                <span>Magudali S.A</span>
                <h3 className="title">
                  Políticas de Privacidad <br /> y seguridad.
                </h3>
                <div className="thumb">
                  <img src={thumb} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="col-lg-12">
          <div className="service-details-content">
            <div className="content">
              <span>Fecha de última actualización: 19/08/2023</span>
              <p>
                En Magudali S.A., entendemos la importancia fundamental de la
                privacidad y la confidencialidad de la información personal de
                nuestros usuarios. Esta Política de Privacidad tiene como
                objetivo proporcionar una comprensión completa y detallada de
                cómo recopilamos, utilizamos, compartimos y protegemos la
                información que obtenemos a través de nuestras aplicaciones
                móviles para clientes, vendedores y repartidores. Al acceder y
                utilizar nuestras Aplicaciones, estás aceptando las prácticas
                descritas en esta Política de Privacidad.
              </p>
              <span>1. Información que Recopilamos</span>
              <p>
                En nuestras Aplicaciones, recopilamos distintos tipos de
                información para brindar una experiencia completa y
                personalizada a nuestros usuarios.
              </p>
              <span>Información del Cliente:</span>
              <p>
                Nombre completo: Utilizamos esta información para personalizar
                la experiencia del cliente y para dirigirnos a ellos de manera
                adecuada. Dirección de correo electrónico: Utilizamos esta
                dirección para enviar confirmaciones de pedidos, actualizaciones
                sobre su cuenta y promociones especiales, siempre con su
                consentimiento. Número de teléfono: Este dato se utiliza para la
                verificación de la cuenta, comunicación y para enviar alertas
                sobre el estado de los pedidos. Información de pago: Los datos
                de pago se cifran y se utilizan únicamente para procesar
                transacciones seguras y eficientes. Ubicación geográfica: Solo
                accedemos a la ubicación si se otorga el permiso. Esto se hace
                para facilitar la entrega de pedidos y ofrecer una experiencia
                de usuario mejorada.
              </p>
              <span>Información del Vendedor:</span>
              <p>
                Nombre y apellido: Utilizamos esta información para identificar
                a los vendedores y personalizar su perfil en la plataforma.
                Correo electrónico: Similar al caso de los clientes, el correo
                electrónico se usa para la comunicación y notificaciones
                importantes. Número de teléfono: Se utiliza para autenticación,
                verificación y comunicación directa con los vendedores.
                Información bancaria y fiscal: La información financiera y
                fiscal se utiliza para procesar los pagos y cumplir con las
                regulaciones tributarias.
              </p>
              <span>Información del Repartidor:</span>
              <p>
                Nombre completo: Necesario para identificar al repartidor y
                asegurar una comunicación adecuada. Correo electrónico:
                Utilizado para fines de autenticación y notificaciones
                relacionadas con el trabajo de entrega. Número de teléfono:
                Requerido para la coordinación de entregas y comunicación con el
                repartidor. Información de la licencia de conducir: Para cumplir
                con los requisitos legales y asegurarnos de que los repartidores
                estén autorizados para operar vehículos.
              </p>
              <span>2. Cómo Utilizamos la Información</span>
              <p>
                La información recopilada se utiliza para una variedad de
                propósitos esenciales para brindar nuestros servicios de manera
                efectiva y eficiente.
              </p>
              <span>Clientes:</span>
              <p>
                Procesar pedidos y transacciones: Utilizamos la información del
                cliente para garantizar que los pedidos se procesen
                correctamente y se entreguen a la dirección correcta.
                Personalizar la experiencia del usuario: Utilizamos datos como
                el historial de pedidos para ofrecer recomendaciones y
                promociones específicas. Enviar notificaciones: Mantenemos a los
                clientes informados sobre el estado de sus pedidos, cambios en
                la cuenta y ofertas especiales.
              </p>
              <span>Vendedores:</span>
              <p>
                Gestión de productos y pedidos: La información de los vendedores
                se utiliza para administrar catálogos de productos y realizar un
                seguimiento de los pedidos. Procesar pagos y transacciones: Los
                datos bancarios se utilizan para transferir los pagos de los
                clientes a los vendedores de manera segura. Análisis de ventas:
                Utilizamos información sobre ventas y rendimiento para
                proporcionar análisis que ayuden a los vendedores a tomar
                decisiones informadas.
              </p>
              <span>Repartidores:</span>
              <p>
                Asignación de entregas: Utilizamos la información del repartidor
                para asignar pedidos de manera eficiente y optimizar las rutas
                de entrega. Rastreo de ubicación: Durante las entregas,
                accedemos a la ubicación en tiempo real para que los clientes
                puedan rastrear sus pedidos y recibir actualizaciones precisas.
                Comunicación: La información de contacto de los repartidores se
                utiliza para mantener una comunicación fluida entre ellos, los
                clientes y la empresa.
              </p>
              <span>3. Compartir Información</span>
              <p>
                Entendemos la importancia de proteger la privacidad de los datos
                y solo compartimos información personal en situaciones
                específicas y limitadas: Con proveedores de servicios:
                Compartimos información con terceros que nos ayudan a mantener y
                operar nuestras Aplicaciones, como procesadores de pagos,
                servicios de análisis y servicios de alojamiento. Con vendedores
                y repartidores: Facilitamos la comunicación y la logística al
                compartir información de contacto entre los clientes y los
                repartidores, así como entre los vendedores y los repartidores
                para coordinar las entregas. Cumplimiento legal: Compartiremos
                información cuando sea necesario cumplir con obligaciones
                legales, responder a solicitudes gubernamentales válidas, hacer
                cumplir nuestros acuerdos y proteger nuestros derechos legales.
              </p>
              <span>4. Seguridad de la Información</span>
              <p>
                La seguridad de la información personal es de suma importancia
                para nosotros. Hemos implementado medidas de seguridad técnicas,
                administrativas y físicas para proteger los datos de acceso no
                autorizado, divulgación o alteración. Utilizamos cifrado para
                proteger la información confidencial durante la transmisión.
              </p>
              <span>5. Tus Derechos y Opciones</span>
              <p>
                Respetamos tus derechos en relación con tus datos personales:
                Acceso y corrección: Puedes acceder y corregir tus datos
                personales en cualquier momento a través de las opciones
                proporcionadas en las Aplicaciones. Retirada de consentimiento:
                Si has otorgado tu consentimiento para el procesamiento de
                datos, puedes retirarlo en cualquier momento. Objeción al
                procesamiento: En ciertas circunstancias, puedes objetar el
                procesamiento de tus datos personales.
              </p>
              <span>6. Cambios en la Política de Privacidad</span>
              <p>
                Nos reservamos el derecho de modificar esta Política de
                Privacidad en cualquier momento para reflejar cambios en
                nuestras prácticas de información. Si realizamos cambios
                significativos, te notificaremos a través de las Aplicaciones o
                por otros medios apropiados. Al utilizar nuestras Aplicaciones,
                estás aceptando los términos y condiciones de esta Política de
                Privacidad. Si no estás de acuerdo con estos términos, te
                recomendamos que no utilices nuestras Aplicaciones.
              </p>
              <br />
              <p>
                Si tienes preguntas o inquietudes sobre nuestra Política de
                Privacidad, no dudes en ponerte en contacto con nosotros a
                través de magudali@outlook.com.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PrivacyPoliciesPage;
