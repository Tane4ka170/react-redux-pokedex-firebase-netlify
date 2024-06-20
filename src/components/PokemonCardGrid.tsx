import React from "react";
import { userPokemonsType } from "../utils/types";

const PokemonCardGrid = ({ pokemons }: userPokemonsType[]) => {
  return (
    <div className="pokemon-card-grid-container">
      <div className="pokemon-card-grid">
        {pokemons &&
          pokemons.length > 0 &&
          pokemons?.map((data: userPokemonsType) => {
            return (
              <div className="pokemon-card">
                <div className="pokemon-card-list"></div>
                <div className="pokemon-card-compare"></div>
                <h3 className="pokemon-card-title">d{data.name}</h3>
                <img
                  src={data.image}
                  alt="pokemon-image"
                  className="pokemon-card-types-type-image"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PokemonCardGrid;
