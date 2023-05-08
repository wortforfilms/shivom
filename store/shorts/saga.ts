import { all, call, put, takeLatest } from "redux-saga/effects";
import * as actions from "./type";


function* feedPr(action: any) {
  try {
    const { short } = action;
   
    yield put({ type: "CREATE_SHORT_SUCCESS", short });
  } catch (error) {
    console.log(error, "..");
    yield put({ type: "CREATE_SHORT_FAILURE", error });
  }
}

function* createShort() {
  yield takeLatest(actions.CREATE_SHORT, feedPr);
}


function* feedUpdatePr(action: any) {
  try {
    const { short } = action;
   
    yield put({ type: "UPDATE_SHORT_SUCCESS", short });
  } catch (error) {
    console.log(error, "..");
    yield put({ type: "UPDATE_SHORT_FAILURE", error });
  }
}


function* updateShort() {
  yield takeLatest(actions.UPDATE_SHORT, feedUpdatePr);
}

export function* shortSaga() {
  yield all([call(createShort),call(updateShort)]);
}
