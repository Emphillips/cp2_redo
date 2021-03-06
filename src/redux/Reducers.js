// Import Reducers from Redux
import { combineReducers } from 'redux';

const place = (state = [], action) => {
	switch (action.type) {
		case 'ADD_PLACE':
			return [...state, action.value ]
		case 'REMOVE_PLACE':
			const place = [...state]
			place.splice(action.value, 1)
			return place
		default:
			return state
	}
};

const user = (state = null, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				username: action.value
			}
		default:
			return state
	}
};

const detailview = (state = null, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				detailview: action.value
			}
		default:
			return state
	}
};

export default combineReducers({ place, user, detailview });