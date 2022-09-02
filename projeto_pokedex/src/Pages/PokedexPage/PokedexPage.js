import React from "react";
import * as MyRoute from "..//../Coodinator/Coodinator";
import { useNavigate } from "react-router-dom";

export const Pokedex = () => {

  const navigate = useNavigate()

  return (
    <div>
			<header>
				<h1>Pokedéx</h1>
				<button onClick={()=>{MyRoute.goToHomePage(navigate)}}>Voltar para Lista de Pokemons</button>
			</header>
    </div>
  )
}