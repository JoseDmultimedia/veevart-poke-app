import React from "react";
import { CardPokemon } from "../../components/CardPokemon/CardPokemon";
import "./Home.css";
import dataPokemon from "../../resources/poke-json.json";

function Home() {
  const renderPokemon = () => {
    let renderCard = [];
    for (let index = 0; index < dataPokemon.length; index++) {
      renderCard.push(
        <CardPokemon
          title={dataPokemon[index].name}
          image={dataPokemon[index].sprites.front_default}
          idPokemon={index}
        />
      );
    }
    return renderCard;
  };

  return (
    <div className="o-container-home">
      <h2 className="">
        Bienvenido a App Pokemon Veevart Frontend Test!
      </h2>
      <div className="o-container-card-home">{renderPokemon()}</div>
    </div>
  );
}

export { Home };
