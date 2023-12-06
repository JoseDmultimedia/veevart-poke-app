import React from "react";
import "./CardPokemon.css";
import { useNavigate } from "react-router-dom";

function CardPokemon(props) {
  const { title, image, idPokemon } = props;

  const navigate = useNavigate();

  const goToDetailsFn = () => {
    navigate("details", { state: { idPokemon: idPokemon } });
  };

  return (
    <div className="o-container-card">
      <h3 className="o-title-pokemon">{title}</h3>
      <img
        src={image}
        alt="imagen del pokemon"
        className="o-image-pokemon"
      ></img>
      <button className="o-button-details" onClick={goToDetailsFn}>
        Detalles
      </button>
    </div>
  );
}

export { CardPokemon };
