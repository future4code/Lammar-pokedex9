import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetailsPage } from "../Pages/DetailsPage/DetailsPage";
import { HomePage } from "../Pages/HomePage/HomePage";
import { Pokedex } from "../Pages/PokedexPage/PokedexPage";

export const Rotas = () => {

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage/>}/>
					<Route path="/PokedexPage" element={<Pokedex/>}/>	
					<Route path="/DetailsPage" element={<DetailsPage/>}/>	
				</Routes>
			</BrowserRouter>
		</div>
	)
}
