import { all, call, put, takeLatest } from "redux-saga/effects";
import * as actions from './type'


function* feedWallet(action:any) {
  console.log("first reached in wallet")
  try {
const {wallet}=action
  yield put({ type: "GET_WALLET_SUCCESS",  wallet})
  } catch (error) {
    console.log(error,"..")
    yield put({ type: "GET_WALLET_FAILURE",  error });
  }
}
function* getWallet() {
  yield takeLatest(actions.GET_WALLET, feedWallet);
}



function* feedRefillWallet(action:any) {
  try {
const {wallet}=action
  yield put({ type: "REFILL_WALLET_SUCCESS",  wallet})
  } catch (error) {
    console.log(error,"..")
    yield put({ type: "REFILL_WALLET_FAILURE",  error });
  }
}
function* refillWallet() {
  yield takeLatest(actions.REFILL_WALLET, feedRefillWallet);
}





function* feedFirstInit(action:any) {
  try {
const {wallet}=action
  yield put({ type: "FIRST_INIT_WALLET_SUCCESS",  wallet})
  } catch (error) {
    console.log(error,"..")
    yield put({ type: "FIRST_INIT_WALLET_FAILURE",  error });
  }
}
function* getFirstInit() {
  yield takeLatest(actions.FIRST_INIT_WALLET, feedFirstInit);
}



export function* _walletSaga() {
  yield all([call(getFirstInit),
  call(getWallet),
  call(refillWallet)

  ])
}