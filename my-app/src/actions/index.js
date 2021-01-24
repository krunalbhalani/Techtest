import { fieldTypes } from "../util/api"

export const fetchshoppingcartlist = () => {
    return {
        type: fieldTypes.FETCH_SHOPPINGCART,
    }
}
export const fetchshoppingcartlistSuccess = (data) => {
    return {
        type: fieldTypes.FETCH_SHOPPINGCART_SUCCESS,
        payload: data,
    }
}
export const updateBasket = (data) => {
    return {
        type: fieldTypes.UPDATE_BASKET,
        payload: data,
    }
}