import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { fetchshoppingcartlistSuccess } from "../actions";
import { getShoppingCart } from "../services/api";
import { fieldTypes } from "../util/api";

  function* handleFetchShoppingCartList() {
    try {
      const res = yield call(getShoppingCart)
      res.forEach((element) => {
        element.quantity = 0;
        element.total = element.quantity * element.price
      });
      const payload = res ? res : {}
      yield put(fetchshoppingcartlistSuccess(payload));
    } catch (err) {
      console.error(err);
    }
  }

  function* watchListShoppingCart() {
    yield takeLatest(fieldTypes.FETCH_SHOPPINGCART, handleFetchShoppingCartList);
  }

  function* Saga() {
    yield all([fork(watchListShoppingCart)]);
  }
  
  export default Saga;