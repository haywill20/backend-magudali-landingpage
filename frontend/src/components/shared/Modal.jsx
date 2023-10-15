import React from "react";

const Modal = ({ mostrarModal, cerrarModal }) => {
  return (
    mostrarModal && (
      <div className="modal d-block" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Título de la Modal</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={cerrarModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">Contenido de la Modal</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={cerrarModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
