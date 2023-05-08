import { all, call, put, take, takeLatest } from "redux-saga/effects";
import * as actions from "./type";


function* feedGetSubscriptions(action: any) {
  try {
    const {subscriptions} = action;
   
    yield put({ type: "GET_SUBSCRIPTIONS_SUCCESS", subscriptions });
  } catch (error) {
    console.log(error, ".. error getting subscriptions");
    yield put({ type: "GET_SUBSCRIPTIONS_FAILURE", error });
  }
}


function* getSubscriptions() {
  yield takeLatest(actions.GET_SUBSCRIPTIONS, feedGetSubscriptions);
}



function* feedSetSubscriptions(action: any) {
  try {
    const { subscriptions } = action;
   
    yield put({ type: "SET_SUBSCRIPTIONS_SUCCESS", subscriptions });
  } catch (error) {
    console.log(error, ".. error setting subscriptions");
    yield put({ type: "SET_SUBSCRIPTIONS_FAILURE", error });
  }
}

function* setSubscriptions() {
  yield takeLatest(actions.SET_SUBSCRIPTIONS, feedSetSubscriptions);
}

function* feedUpdateFilmboxSubscriptions(action: any) {
  try {
    const { filmbox } = action;
   
    yield put({ type: "UPDATE_FILMBOX_SUBSCRIPTIONS_SUCCESS", filmbox });
  } catch (error) {
    console.log(error, ".. error setting subscriptions");
    yield put({ type: "SET_SUBSCRIPTIONS_FAILURE", error });
  }
}

function* updateFilmboxSubscriptions() {
  yield takeLatest(actions.UPDATE_FILMBOX_SUBSCRIPTIONS, feedUpdateFilmboxSubscriptions);
}


function* feedUpdateCrewboxSubscriptions(action: any) {
  try {
    const { crewbox } = action;
   
    yield put({ type: "UPDATE_CREWBOX_SUBSCRIPTIONS_SUCCESS", crewbox });
  } catch (error) {
    console.log(error, ".. error setting subscriptions");
    yield put({ type: "UPDATE_CREWBOX_SUBSCRIPTIONS_FAILURE", error });
  }
}

function* updateCrewboxSubscriptions() {
  yield takeLatest(actions.UPDATE_CREWBOX_SUBSCRIPTIONS, feedUpdateCrewboxSubscriptions);
}


function* feedUpdateCastboxSubscriptions(action: any) {
  try {
    const { castbox } = action;
   
    yield put({ type: "UPDATE_CASTBOX_SUBSCRIPTIONS_SUCCESS", castbox });
  } catch (error) {
    console.log(error, ".. error setting subscriptions");
    yield put({ type: "UPDATE_CASTBOX_SUBSCRIPTIONS_FAILURE", error });
  }
}

function* updateCastboxSubscriptions() {
  yield takeLatest(actions.UPDATE_CASTBOX_SUBSCRIPTIONS, feedUpdateCastboxSubscriptions);
}


function* feedUpdateHodboxSubscriptions(action: any) {
  try {
    const { hodbox } = action;
   
    yield put({ type: "UPDATE_HODBOX_SUBSCRIPTIONS_SUCCESS", hodbox });
  } catch (error) {
    console.log(error, ".. error setting subscriptions");
    yield put({ type: "UPDATE_HODBOX_SUBSCRIPTIONS_FAILURE", error });
  }
}

function* updateHodboxSubscriptions() {
  yield takeLatest(actions.UPDATE_HODBOX_SUBSCRIPTIONS, feedUpdateHodboxSubscriptions);
}


function* feedUpdateLpboxSubscriptions(action: any) {
  try {
    const { lpbox } = action;
   
    yield put({ type: "UPDATE_LPBOX_SUBSCRIPTIONS_SUCCESS", lpbox });
  } catch (error) {
    console.log(error, ".. error setting subscriptions");
    yield put({ type: "UPDATE_LPBOX_SUBSCRIPTIONS_FAILURE", error });
  }
}

function* updateLpboxSubscriptions() {
  yield takeLatest(actions.UPDATE_LPBOX_SUBSCRIPTIONS, feedUpdateLpboxSubscriptions);
}


function* feedUpdateCoinboxSubscriptions(action: any) {
  try {
    const { coinbox } = action;
   
    yield put({ type: "UPDATE_COINBOX_SUBSCRIPTIONS_SUCCESS", coinbox });
  } catch (error) {
    console.log(error, ".. error setting subscriptions");
    yield put({ type: "UPDATE_COINBOX_SUBSCRIPTIONS_FAILURE", error });
  }
}

function* updateCoinboxSubscriptions() {
  yield takeLatest(actions.UPDATE_COINBOX_SUBSCRIPTIONS, feedUpdateCoinboxSubscriptions);
}



function* feedNewCompany(action:any){
  try {
    const{company}=action
    yield put({ type: "CREATE_COMPANY_SUCCESS", company });
  } catch (error) {
    yield put({ type: "CREATE_COMPANY_FAILURE", error });
  }

}

function* createCompany(){
  yield takeLatest(actions.CREATE_COMPANY, feedNewCompany)
}

function* feedUpdatedCompany(action:any){
  console.log('reached saga for company')
  try {
    const{company}=action
    yield put({ type: "UPDATE_COMPANY_SUCCESS", company });
    
  } catch (error) {
    yield put({ type: "UPDATE_COMPANY_FAILURE", error });
  }

}

function* updateCompany(){
  yield takeLatest(actions.UPDATE_COMPANY, feedUpdatedCompany)
}


export function* subscriptionSaga() {
  yield all([
    call(getSubscriptions),
    call(setSubscriptions),
    call(updateFilmboxSubscriptions),
    call(updateCrewboxSubscriptions),
    call(updateCastboxSubscriptions),
    call(updateHodboxSubscriptions),
    call(updateLpboxSubscriptions),
    call(updateCoinboxSubscriptions),
    call(createCompany),
    call(updateCompany),
  ]);
}
  