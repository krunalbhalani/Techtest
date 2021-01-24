import * as actions from '.'
import { fieldTypes } from "../util/api"

describe('actions', () => {
  it('should create an action fetchshoppingcartlist', () => {
    const expectedAction = {
      type: fieldTypes.FETCH_SHOPPINGCART,
    }
    expect(actions.fetchshoppingcartlist()).toEqual(expectedAction)
  })

  it('should create an action fetchshoppingcartlistSuccess', () => {
    const data = []
    const expectedAction = {
      type: fieldTypes.FETCH_SHOPPINGCART_SUCCESS,
      payload: data
    }
    expect(actions.fetchshoppingcartlistSuccess(data)).toEqual(expectedAction)
  })

  it('should create an action updateBasket', () => {
    const data = []
    const expectedAction = {
      type: fieldTypes.UPDATE_BASKET,
      payload: data
    }
    expect(actions.updateBasket(data)).toEqual(expectedAction)
  })

})