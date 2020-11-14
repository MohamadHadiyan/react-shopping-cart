import { FETCH_PRODUCTS } from '../types'

// create the reducer function
export const productsReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { items: action.payload }
        default:
            return state
    }
}

