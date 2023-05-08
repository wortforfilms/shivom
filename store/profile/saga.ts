import { all, call, put, takeLatest } from "redux-saga/effects";
import * as actions from "./type";


function* feedPr(action:any) {
  try {
    const { profile } = action;
   
    yield put({ type: "CREATE_PROFILE_SUCCESS", profile });
  } catch (error) {
    console.log(error, "..");
    yield put({ type: "CREATE_PROFILE_FAILURE", error });
  }
}

function* createProfile() {
  yield takeLatest(actions.CREATE_PROFILE, feedPr);
}


function* feedUpdatePr(action:any) {
  try {
    const { profile } = action;
   
    yield put({ type: "UPDATE_PROFILE_SUCCESS", profile });
  } catch (error) {
    console.log(error, "..");
    yield put({ type: "UPDATE_PROFILE_FAILURE", error });
  }
}


function* updateProfile() {
  yield takeLatest(actions.UPDATE_PROFILE, feedUpdatePr);
}

export function* profileSaga() {
  yield all([call(createProfile),call(updateProfile)]);
}
