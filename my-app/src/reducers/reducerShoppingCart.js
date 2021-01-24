import { fieldTypes } from "../util/api";
export const initialState = [];
  
const reducerShoppingCart = (state = initialState, action) => {
    console.log('action==', action)
    switch(action.type)
    {
        case fieldTypes.FETCH_SHOPPINGCART_SUCCESS:
            return action.payload;
        case fieldTypes.UPDATE_BASKET:
            return action.payload;
        default:
            return state;
    }
}

export default reducerShoppingCart;