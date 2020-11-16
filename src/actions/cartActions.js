import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

// create addToCart action
export const addToCart = (product) => (dispatch, getState) => {
    //make a clone of items
    const cartItems = getState().cart.cartItems.slice()
    let alreadyExists = false
    // if exists increment
    cartItems.forEach((x) => {
        if (x._id === product._id) {
            alreadyExists = true
            x.count++
        }
    });
    // add to cart
    if (!alreadyExists) {
        cartItems.push({ ...product, count: 1 })
    }

    dispatch({
        type: ADD_TO_CART,
        payload: { cartItems }
    })
    // update localstorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
}

// Create removeFromCart action
export const removeFromCart = (product) => (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice().filter((x) => x._id !== product._id)

    dispatch({
        type: REMOVE_FROM_CART,
        payload: { cartItems }
    })
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
}