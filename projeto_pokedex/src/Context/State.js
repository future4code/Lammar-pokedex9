import { GlobalContext } from "./GlobalContext";
import { useState } from "react";

export const State = (props) => {
    const [pokedex, setPokedex] = useState([])

    const addToPokedex = (pokemon) => {
        const newPokedex = [...pokedex]

        newPokedex.push({...pokemon})   
        setPokedex(newPokedex)
    }

    const onClickRemove = (pokemon) => {
        const newPokedex = [...pokedex]
        
        const index = newPokedex.indexOf(pokemon)
        newPokedex.splice(index, 1)
        setPokedex(newPokedex)
    }

    return (
        <GlobalContext.Provider value={{ addToPokedex, onClickRemove, pokedex, setPokedex}}>
            {props.children}
        </GlobalContext.Provider>
    )

}