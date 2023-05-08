import { all, call, put, takeLatest } from "redux-saga/effects";
import * as actions from './type'


function* feedOpening(action:any) {
  try {
const {openings}=action
  yield put({ type: "SET_OPENINGS_SUCCESS",  openings})
  } catch (error) {
    console.log(error,"..")
    yield put({ type: "SET_OPENINGS_FAILURE",  error });
  }
}
function* getOpenings() {
  yield takeLatest(actions.SET_OPENINGS, feedOpening);
}

function* feedUserApplications(action:any) {
  try {
const {applications}=action
  yield put({ type: "GET_USER_APPLICATIONS_SUCCESS",  applications})
  } catch (error) {
    console.log(error,"..")
    yield put({ type: "GET_USER_APPLICATIONS_FAILURE",  error });
  }
}
function* getUserApplications() {
  yield takeLatest(actions.GET_USER_APPLICATIONS, feedUserApplications);
}

function* feedUUpdatedserApplications(action:any) {
  try {
const {applications}=action
  yield put({ type: "UPDATE_USER_APPLICATIONS_SUCCESS",  applications})
  } catch (error) {
    console.log(error,"..")
    yield put({ type: "UPDATE_USER_APPLICATIONS_FAILURE",  error });
  }
}
function* getUpdatedUserApplications() {
  yield takeLatest(actions.UPDATE_USER_APPLICATIONS, feedUUpdatedserApplications);
}


export function* openingsSaga() {
  yield all([call(getOpenings),
  call(getUserApplications),
  call(getUpdatedUserApplications)
])

}