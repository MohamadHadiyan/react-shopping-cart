// REDUX STORE

import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { productsReducer } from './reducers/productReducers'

// initial state with empty object
const initialState = {}
// send all information redux store to chrome redux dev tool
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// create store
const store = createStore(
    combineReducers({
        products: productsReducer,
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))

)
export default store
