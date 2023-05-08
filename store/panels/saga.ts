import { all, call, put, takeLatest } from "redux-saga/effects";
import * as actions from './type'



function* feedOpenCouponPanel(action:any) {
  try {

  yield put({ type: "OPEN_COUPON_PANEL_SUCCESS"})
  } catch (error) {
    console.log(error,"..")
    yield put({ type: "OPEN_COUPON_PANEL_FAILURE",  error });
  }
}
function* openCouponPanel() {
  yield takeLatest(actions.OPEN_COUPON_PANEL, feedOpenCouponPanel);
}


export function* panelSaga() {
  yield all([call(openCouponPanel),

])

}