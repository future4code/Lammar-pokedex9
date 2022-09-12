import React from "react";
import * as MyRoute from "../../Rotas/Coodinator";
import { useNavigate } from "react-router-dom";
import { Botoes, Pokemon } from "./style";

export const CardPokedex = ({onClickRemove, item}) => {

	const navigate = useNavigate()

	return (
		<Pokemon>
			<h3>{item.data.name}</h3>
			<img src={item.data.sprites.front_default} alt={item.data.name}></img>
			<Botoes>
				<button  onClick={() => onClickRemove(item)}>Remover</button>
				<button onClick={()=>{MyRoute.goToDetailsPage(navigate)}}>Detalhes do Pokemon</button>
			</Botoes>
			<hr/>
		</Pokemon>	
	)
} 