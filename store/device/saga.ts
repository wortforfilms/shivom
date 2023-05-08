import { all, call, put, takeLatest } from "redux-saga/effects";

import * as actions from "./type";

function* feedD(action: any) {
  try {
    // console.log(action)
    const { device } = action;
   
    yield put({ type: "FEED_DEVICE_SUCCESS", device });
  } catch (error) {
    console.log(error, "..");
    yield put({ type: "FEED_DEVICE_FAILURE", error });
  }
}
function* getDevice() {
  yield takeLatest(actions.FEED_DEVICE, feedD);
}

function* feedLD(action: any) {
  try {
    // console.log(action)
    const { local_device } = action;
   
    yield put({ type: "FEED_LOCAL_DEVICE_SUCCESS", local_device });
  } catch (error) {
    console.log(error, "..");
    yield put({ type: "FEED_LOCAL_DEVICE_FAILURE", error });
  }
}
function* getLDevice() {
  yield takeLatest(actions.FEED_LOCAL_DEVICE, feedLD);
}


function* feedDeviceSize(action: any) {


  try {
    const { size } = action;
    

    yield put({ type: "UPDATE_DEVICE_SIZE_SUCCESS", size });
  } catch (error) {
    console.log(error, "..");
    yield put({ type: "UPDATE_DEVICE_SIZE_FAILURE", error });
  }
}
function* updateDeviceSize() {
  yield takeLatest(actions.UPDATE_DEVICE_SIZE, feedDeviceSize);
}

function* _updateDevice(action: any) {


  try {
    const { device } = action;
    

    yield put({ type: "UPDATE_DEVICE_SUCCESS", device });
  } catch (error) {
    console.log(error, "..");
    yield put({ type: "UPDATE_DEVICE_FAILURE", error });
  }
}
function* updateDevice() {
  yield takeLatest(actions.UPDATE_DEVICE, _updateDevice);
}

export function* deviceSaga() {
  yield all([
    call(getDevice), 
    call(getLDevice), 
    call(updateDevice), 
    call(updateDeviceSize)
  ]);
}
