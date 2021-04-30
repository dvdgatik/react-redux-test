import {createStore, combineReducers} from 'redux';
import currentItem from 'reducers/currentItem';
import results from 'reducers/results';
import suggestions from 'reducers/suggestions';
//Reducer Principal (Combinate all reducers)
// Object with each of the  propeties, each of the properties is a reducer
const reducer = combineReducers({
	currentItem,
	results,
	suggestions
});

const store = createStore(reducer); 


export default store;