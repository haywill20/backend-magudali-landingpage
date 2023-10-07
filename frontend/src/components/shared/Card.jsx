// Card.jsx
import React from "react";
import { Link } from "react-router-dom";
const Card = ({ estilo, icon, title, description, ruta, link }) => {
  return (
    <div className={estilo}>
      <Link to={ruta}>
        <div className="icon">
          <i className={icon}></i>
        </div>
        <h4 className="title">{title}</h4>
        <p>{description}</p>
      </Link>
      <Link to={link} target="_blank" rel="noopener noreferrer">
        Saber más <i className="fal fa-arrow-right"></i>
      </Link>
    </div>
  );
};

export default Card;
