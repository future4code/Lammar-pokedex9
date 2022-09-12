import React from "react";
import {Rotas} from "./Rotas/Rotas";
import "./App.css"
import {State} from "./Context/State"

function App() {
	return (
    	<State>
      		<Rotas/>
    	</State>
  	)
}

export default App
