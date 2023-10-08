// Card.jsx
import React from "react";
import { Link } from "react-router-dom";
const CardJobs = ({ estilo, icon, title, description, ruta, detalles }) => {
  return (
    <div className={estilo}>
      <div className="icon">
        <i className={icon}></i>
      </div>
      <h4 className="title">{title}</h4>
      <p>{description}</p>
      <Link to={ruta} target="_blank" rel="noopener noreferrer">
        Aplicar <i className="fa-solid fa-check"></i>
      </Link>
      <br />
      <Link to={detalles} target="_blank" rel="noopener noreferrer">
        Saber más <i className="fal fa-arrow-right"></i>
      </Link>
    </div>
  );
};

export default CardJobs;
