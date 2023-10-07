// Card.jsx
import React from "react";
import { Link } from "react-router-dom";
import { empleos } from "../data/DataListas";
const CardJobs = ({ estilo, icon, nombre, resumen, id }) => {
  return (
    <div className={estilo}>
      <div className="icon">
        <i className={icon}></i>
      </div>
      <h4 className="title">{nombre}</h4>
      <p>{resumen}</p>
      <Link to="/register" target="_blank" rel="noopener noreferrer">
        Aplicar <i className="fa-solid fa-check"></i>
      </Link>
      <br />
      <Link to={`/jobdetails/${id}`}>
        Saber más <i className="fal fa-arrow-right"></i>
      </Link>
    </div>
  );
};

export default CardJobs;
