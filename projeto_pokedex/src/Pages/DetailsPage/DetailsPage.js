import React from "react";
import { useNavigate } from "react-router-dom";

export const DetailsPage= () => {

  const navigate = useNavigate()
  const voltar = () => {
		navigate(-1)
	}

  return (
    <div>
			<header>
        <h1>Nome do Pokemon</h1>
				<button onClick={voltar}>Voltar</button>
        <button >Adicionar/Remover</button>
			</header>
    </div>
  )
}