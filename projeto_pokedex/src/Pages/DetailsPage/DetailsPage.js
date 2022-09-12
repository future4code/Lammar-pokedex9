import React from "react";
import { useNavigate } from "react-router-dom";
import { Cabecalho } from "./style";

export const DetailsPage= () => {

	const navigate = useNavigate()
	const voltar = () => {
		navigate(-1)
	}

	return (
    	<div>
			<Cabecalho>
				<button onClick={voltar}>Voltar</button>
				<h1>Nome do Pokemon</h1>
        		<button >Adicionar/Remover</button>
			</Cabecalho>
    	</div>
  	)
}  