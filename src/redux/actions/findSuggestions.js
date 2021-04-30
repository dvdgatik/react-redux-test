//Autocomplete

// La logica de la accion no se especifica aqui sino en el reduucer
export const type = 'findSuggestions';

// es un action creator
// Un action creator  te permite definir una funcion que regresa un objeto y ese objeto es una accion
const findSuggestions = (text) => {

	//action
	return {
		type, //type:type
		payload: text,
	}

} 


export default findSuggestions;