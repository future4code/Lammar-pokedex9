import React from "react";
import * as MyRoute from "..//Coodinator/Coodinator";
import { useNavigate } from "react-router-dom";

export const CardPokemon = () => {

	const navigate = useNavigate()

	return (
		<div>
			<p>Imagem do Pokemon</p>
			<button>Adicionar</button>
			<button onClick={()=>{MyRoute.goToDetailsPage(navigate)}}>Detalhes</button>
		</div>
	)
}