export const type = 'findCurrentItem';

// es un action creator
// Un action creator  te permite definir una funcion que regresa un objeto y ese objeto es una accion
const findCurrentItem = (id) => {

	//action
	return {
		type, //type:type
		payload: id,
	}

} 


export default findCurrentItem;