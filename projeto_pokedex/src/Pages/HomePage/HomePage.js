import React, {useContext} from "react";
import * as MyRoute from "..//../Rotas/Coodinator";
import { useNavigate } from "react-router-dom";
import { CardPokemon } from "..//..//Components/CardPokemon/CardPokemon";
import { useRequestData } from "../../Hooks/useRequestData";
import {BASE_URL} from "../../Constants/BASE_URL";
import pokemonLogo from "../../images/pokemonLogo.png"
import { Cabecalho, ContainerPokemon} from "./style";
import { GlobalContext } from "../../Context/GlobalContext";

export const HomePage = () => {

	const navigate = useNavigate()

	const pokemon = useRequestData(BASE_URL)

	const context = useContext(GlobalContext)

	const componentPokemon = pokemon.map((item) => {
    	return (
			<div key={item.data.name}>
				<CardPokemon 
				item ={item}
				addToPokedex ={context.addToPokedex}
				onClickDetails={context.onClickDetails}
				/>
    		</div>
		)
  	})

	return (
		<div>
			<Cabecalho>
				<img src = {pokemonLogo} alt ="Logo-Pokemon"/>
				<h1>Lista de Pokemons</h1>	
				<button onClick={()=>{MyRoute.goToPokedexPage(navigate)}}>Ir Para Pokedex</button>
			</Cabecalho>
    		<ContainerPokemon>
				{componentPokemon}
    		</ContainerPokemon>
		</div>
	)
}
