import React, {useContext} from "react";
import * as MyRoute from "..//../Rotas/Coodinator";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";
import {CardPokedex} from "../../Components/CardPokedex/CardPokedex"
import { Cabecalho, ContainerPokemon, ColorDiv } from "./style";
import pokemonLogo from "../../images/pokemonLogo.png"

export const Pokedex = () => {

	const navigate = useNavigate()

	const {onClickRemove, pokedex} =useContext(GlobalContext)

	const componentPokedex = pokedex.map((item) => {
    	return (
			<div key={item.data.name}>
				<CardPokedex
				item ={item}
				onClickRemove={onClickRemove}
				/>
    		</div>
		)
  	})

	return (
		<div >
			<Cabecalho>
				<img src = {pokemonLogo} alt ="Logo-Pokemon"/>
				<h1>Pokedex</h1>
				<button onClick={()=>{MyRoute.goToHomePage(navigate)}}>Voltar</button>
			</Cabecalho>
			<ContainerPokemon>
				{componentPokedex}
			</ContainerPokemon>
		</div>
	)
} 