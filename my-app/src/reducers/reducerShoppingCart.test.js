import reducerShoppingCart from './reducerShoppingCart'
import { fieldTypes } from "../util/api"

describe('reducerShoppingCart', () => {
  it('reducer handle actiontype UPDATE_BASKET', () => {
    const testaction = {
        type: fieldTypes.UPDATE_BASKET,
        payload: []
      }
    const expected = []

    expect(reducerShoppingCart([],testaction)).toEqual(expected)
  })

  it('reducer handle actiontype FETCH_SHOPPINGCART_SUCCESS', () => {
    const testaction = {
        type: fieldTypes.FETCH_SHOPPINGCART_SUCCESS,
        payload: []
      }
    const expected = []

    expect(reducerShoppingCart([],testaction)).toEqual(expected)
  })

})