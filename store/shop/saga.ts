import { all, call, put, takeLatest } from "redux-saga/effects";
import * as actions from "./type";


function* feedPr(action: any) {
  try {
    const { shop } = action;
   
    yield put({ type: "CREATE_SHOP_SUCCESS", shop });
  } catch (error) {
    console.log(error, "..");
    yield put({ type: "CREATE_SHOP_FAILURE", error });
  }
}

function* createShop() {
  yield takeLatest(actions.CREATE_SHOP, feedPr);
}


function* feedUpdatePr(action: any) {
  try {
    const { shop } = action;
   
    yield put({ type: "UPDATE_SHOP_SUCCESS", shop });
  } catch (error) {
    console.log(error, "..");
    yield put({ type: "UPDATE_SHOP_FAILURE", error });
  }
}


function* updateShop() {
  yield takeLatest(actions.UPDATE_SHOP, feedUpdatePr);
}

export function* shopSaga() {
  yield all([call(createShop),call(updateShop)]);
}
