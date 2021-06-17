import React, { useState, useLayoutEffect } from "react";
import axios from "axios";

export default function PokemonDetails(pokemon) {
  //pokemon details link
  const pkmDetails = `https://pokeapi.co/api/v2/pokemon/${pokemon.pokemon.name}`;

  const [pokemonSpecies, setPokemonSpecies] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [pokemonEvolutions, setPokemonEvolutions] = useState([]);

  useLayoutEffect(() => {
    const getDetails = (url) => {
      axios
        .get(url)
        .then((res) => {
          let data = res.data;
          setPokemonDetails(data);
          getSpecies(data.species.url)
        })
        .catch((error) => console.error(error));
    };

    const getSpecies = (url) => {
      axios
        .get(url)
        .then((res) => {
          let data = res.data;
          setPokemonSpecies(data);
          getEvolutions(data.evolution_chain.url);
        })
        .catch((error) => console.error(error));
    };

    const getEvolutions = (url) => {
      axios
      .get(url)
      .then((res) => {
        let data = res.data;
        setPokemonEvolutions(data);
      })
      .catch((error) => console.error(error));
    }

    getDetails(pkmDetails)
  }, [pkmDetails]);


  if (Object.values(pokemonEvolutions).length <= 0) { //Just to check if the object has data
      return (<h1>Loading...</h1>)
  }
  return (
    <>
      <section>
        <div className="container">
          <div className="relative inline-flex">
            <select className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
              <option>Select Game Version</option>
              {Object.keys(pokemonDetails.game_indices).map(key => (
                <option key={key}> {pokemonDetails.game_indices[key].version.name}</option>
              ))}
            </select>
          </div>
          <div className="mx-auto flex flex-wrap">
            <img src="" alt="" />
            <div className="">
              {/* Relevant Data to process later */}
              {pokemonEvolutions.chain.species.name}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ? Considering using displaying modal for specific data like move learnable by clicking on a button like moves learned via levelup
// ? Dropdown version selector to pull certain flavor texts and location information based on games
