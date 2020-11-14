// get rest data which contains the list of products
import { FETCH_PRODUCTS } from "../types"

export const fetchProducts = () => async (dispatch) => {
    const res = await fetch("/api/products")
    // fetch data convert to json
    const data = await res.json()

    console.log(data)

    dispatch({
        type: FETCH_PRODUCTS,
        payload: data,
    })
}

