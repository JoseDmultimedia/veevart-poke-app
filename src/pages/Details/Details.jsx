import React from 'react'
import './Details.css'
import { useLocation } from 'react-router-dom';
import dataPokemon from "../../resources/poke-json.json";
import { useNavigate } from "react-router-dom";


function Details() {

  const location = useLocation();
  const navigate = useNavigate();

  const indexPokemon = location.state.idPokemon;

  const goToHome = () => {
    navigate('/')
  }

  const renderImages = () => {
    let images = [];
    images.push(
      <div className='o-card-images-pokemon'>
        <h4>Imagenes de referencia</h4>
        <img className='o-image-pokemon-details' src={dataPokemon[indexPokemon].sprites.front_default} alt='imagen frente'></img>
        <img className='o-image-pokemon-details' src={dataPokemon[indexPokemon].sprites.back_default} alt='imagen atras'></img>
        <img className='o-image-pokemon-details' src={dataPokemon[indexPokemon].sprites.front_shiny} alt='imagen lateral'></img>
      </div>
    )
    return images;
  };

  const renderMoves = () => {
    let moves = [];
    for (let index = 0; index < dataPokemon[indexPokemon].moves.length; index++) {
     moves.push(
      <p className='o-move'>{dataPokemon[indexPokemon].moves[index].move.name}</p>
     )
    }
    return moves;
  };

  const renderAbilities = () => {
    let moves = [];
    for (let index = 0; index < dataPokemon[indexPokemon].abilities.length; index++) {
     moves.push(
      <p className='o-move'>{dataPokemon[indexPokemon].abilities[index].ability.name}</p>
     )
    }
    return moves;
  };

  return (
    <div className='o-details'>
      <h1>Caracteristicas de {(dataPokemon[indexPokemon].name)} </h1>
      <div className='o-container-details'>
        {renderImages()}
        <div className='o-card-specs-details'>
          <div>
            <h4>MOVIMIENTOS</h4>
            {renderMoves()}
          </div>
          <div>
            <h4>HABILIDADES</h4>
            {renderAbilities()}
          </div>

        </div>
      </div>
      <button className='o-button-details' onClick={goToHome}>Volver</button>
    </div>
  )
}

export {Details}