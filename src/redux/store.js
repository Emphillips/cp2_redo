// Import Reducer File
import reducers from './Reducers';
// Import Redux 
import { createStore, applyMiddleware } from 'redux';
import state from './State';
import thunk from 'redux-thunk';



export default createStore(reducers, state, applyMiddleware(thunk))