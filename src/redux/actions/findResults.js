export const type = 'findResults';

// es un action creator
// Un action creator  te permite definir una funcion que regresa un objeto y ese objeto es una accion
const findResults = (text) => {

	//action
	return {
		type, //type:type
		payload: text,
	}

} 


export default findResults;