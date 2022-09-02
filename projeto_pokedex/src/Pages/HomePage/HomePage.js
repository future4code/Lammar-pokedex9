import React from "react";
import * as MyRoute from "..//../Coodinator/Coodinator";
import { useNavigate } from "react-router-dom";
import { CardPokemon } from "../../Components/CardPokemon";

export const HomePage = () => {

  const navigate = useNavigate()

  return (
    <div>
			<header>
				<h1>Lista de Pokemons</h1>
				<button onClick={()=>{MyRoute.goToPokedexPage(navigate)}}>Ir Para Pokedex</button>
			</header>
      <main>
        <CardPokemon/>
      </main>
    </div>
  )
}
