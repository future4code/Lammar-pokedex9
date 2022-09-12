import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../Constants/BASE_URL'

export const useRequestData = (url) => {
	const [data, setData] = useState([])

	useEffect(() => {

		const detalhes = [];
		for (let i=1; i<21; i++) {
		  detalhes.push(`${BASE_URL}${i}/`);
		}

		axios.all(detalhes.map((deta) => 
			axios.get(deta)))
		.then((response) => 
			{setData(response)})
      	.catch((error) => 
			{alert('Ocorreu um erro, tente novamente')})
			
  	}, [url])

	return data
}
