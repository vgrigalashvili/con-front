import { combineReducers } from 'redux';

import contacts from './contacts';

// import loggedReducer from './isLogged'

// const reducers = combineReducers({
//     isLogged: loggedReducer
// })

export default combineReducers({ contacts });