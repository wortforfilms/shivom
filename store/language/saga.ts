import { all, call, put, takeLatest } from "redux-saga/effects";
import * as actions from "./type";


function* feedPr(action: any) {
  try {
    const { language } = action;
   
    yield put({ type: "CREATE_LANGUAGE_SUCCESS", language });
  } catch (error) {
    console.log(error, "..");
    yield put({ type: "CREATE_LANGUAGE_FAILURE", error });
  }
}

function* createLanguage() {
  yield takeLatest(actions.CREATE_LANGUAGE, feedPr);
}


function* feedUpdatePr(action: any) {
  try {
    const { language } = action;
   
    yield put({ type: "UPDATE_LANGUAGE_SUCCESS", language });
  } catch (error) {
    console.log(error, "..");
    yield put({ type: "UPDATE_LANGUAGE_FAILURE", error });
  }
}


function* updateLanguage() {
  yield takeLatest(actions.UPDATE_LANGUAGE, feedUpdatePr);
}

export function* languageSaga() {
  yield all([call(createLanguage),call(updateLanguage)]);
}
