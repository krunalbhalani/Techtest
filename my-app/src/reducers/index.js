import {combineReducers} from 'redux';
import reducerShoppingCart from './reducerShoppingCart.js'

const allReducers = combineReducers({
    shoppingcart: reducerShoppingCart,
});

export default allReducers
