import { all, call, put, takeLatest } from "redux-saga/effects";
import * as actions from "./type";

function* feedPr(action: any) {
  try {
    const { projects } = action;
   
    yield put({ type: "CREATE_PROJECT_SUCCESS", projects });
  } catch (error) {
    console.log(error, "..");
    yield put({ type: "CREATE_PROJECT_FAILURE", error });
  }
}

function* createProject() {
  yield takeLatest(actions.CREATE_PROJECT, feedPr);
}



function* feedUserProjects(action:any){
try {
  const {projects}=action
  yield put({ type: "SET_USER_PROJECTS_SUCCESS", projects });
  
} catch (error) {
  yield put({ type: "SET_USER_PROJECTS_FAILURE", error });
  
}

}
function* setUserProjects(){
  yield takeLatest(actions.SET_USER_PROJECTS, feedUserProjects)
}


function* feedUpdatePr(action: any) {
  try {
    const { project } = action;
   
    yield put({ type: "UPDATE_PROJECT_SUCCESS", project });
  } catch (error) {
    console.log(error, "..");
    yield put({ type: "UPDATE_PROJECT_FAILURE", error });
  }
}


function* updateProject() {
  yield takeLatest(actions.UPDATE_PROJECT, feedUpdatePr);
}

export function* projectSaga() {
  yield all([call(createProject),call(updateProject), call(setUserProjects)]);
}
