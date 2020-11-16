import { CLEAR_CART, CLEAR_ORDER, CREATE_ORDER } from "../types"

// createOrder action
export const createOrder = (order) => (dispatch) => {
    // send ajax request to server to create an order
    fetch("/api/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(order)
    }).then((res) => res.json()) // convert result to json data
        .then((data) => {
            // dispatch action to reducer
            dispatch({
                type: CREATE_ORDER,
                payload: data
            })
            // clean shopping cart localStorage
            localStorage.clear("cartItems")
            // dispatch clear cart action to clear cart item
            dispatch({
                type: CLEAR_CART
            })
        })
}

// clearOrder action
export const clearOrder = () => (dispatch) => {
    dispatch({ type: CLEAR_ORDER })
}