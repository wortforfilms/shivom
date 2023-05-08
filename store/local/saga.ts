import { all, call, put, takeLatest } from "redux-saga/effects";

import * as actions from "./type";
import { supabase } from "@/lib/Store";
// import { supabase } from "@/util/supabase";



function* feedCurrencyRate(action: any) {
  // console.log('reached saga for setting currency rates')
try {
  const { rates } = action;
  yield put({ type: "SET_CURRENCY_RATES_SUCCESS", rates });
} catch (error) {
  console.log(error, "..error");
  yield put({ type: "SET_CURRENCY_RATES_FAILURE", error });
}
}
function* setCurrencyRate() {
yield takeLatest(actions.SET_CURRENCY_RATES, feedCurrencyRate);
}


function* feedCurrency(action: any) {
    // console.log('reached saga')
  try {
    const { currency } = action;
    yield put({ type: "SET_CURRENCY_SUCCESS", currency });
  } catch (error) {
    console.log(error, "..error");
    yield put({ type: "SET_CURRENCY_FAILURE", error });
  }
}
function* setCurrency() {
  yield takeLatest(actions.SET_CURRENCY, feedCurrency);
}


export const set_user_contacts=async(userId:any)=>{
  const {data,error}=await supabase.from('sochen').eq('searchQuery',`contacts by ${userId}`)
  return {data,error}
}
function* feedContacts(action: any) {
  // console.log('reached saga')
try {
  const { contacts } = action;
  const cn=set_user_contacts("18").then(res=>{
    console.log(res)
  }).catch(error=>console.log(error))
  yield put({ type: "SET_LOCAL_CONTACTS_SUCCESS", contacts });
} catch (error) {
  console.log(error, "..error");
  yield put({ type: "SET_LOCAL_CONTACTS_FAILURE", error });
}
}
function* setContacts() {
yield takeLatest(actions.SET_LOCAL_CONTACTS, feedContacts);
}

export function* localSaga() {
  yield all([call(setCurrency),
    call(setCurrencyRate),
    call(setContacts),
  
  ]);
}