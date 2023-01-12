import React from "react";
import "../stylesheets/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../img/testimonio-${props.imagen}.png`)}
        alt="Foto de Emma"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">"<strong>{props.spanSarah}</strong>{props.testimonio}<strong>{props.spanEmma}</strong>{props.testimonioContinue}<strong>{props.spanShawn}</strong></p>
      </div>
    </div>
  );
}

export default Testimonio;
