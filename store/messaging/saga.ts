import { all, call, put, takeLatest } from "redux-saga/effects";
import * as actions from "./type";


function* feedMessages(action: any) {
  // console.log('reached saga for setting currency rates')
try {
  const { messages } = action;
  yield put({ type: "SET_MESSAGES_SUCCESS", messages });
} catch (error) {
  console.log(error, "..error");
  yield put({ type: "SET_MESSAGES_FAILURE", error });
}
}

function* setMessages() {
yield takeLatest(actions.SET_MESSAGES, feedMessages);
}

function* feedRoom(action: any) {
  // console.log('reached saga for setting currency rates')
try {
  const { room } = action;
  yield put({ type: "SET_ROOM_SUCCESS", room });
} catch (error) {
  console.log(error, "..error");
  yield put({ type: "SET_ROOM_FAILURE", error });
}
}

function* setRoom() {
yield takeLatest(actions.SET_ROOM, feedRoom);
}

function* feedInvites(action: any) {
  // console.log('reached saga for setting currency rates')
try {
  
  const {  invites_for_user, invites_by_user, } = action;
  yield put({ type: "SET_INVITES_SUCCESS",  invites_for_user, invites_by_user });
} catch (error) {
  console.log(error, "..error");
  yield put({ type: "SET_INVITES_FAILURE", error });
}
}

function* setInvites() {
yield takeLatest(actions.SET_INVITES, feedInvites);
}

function* feedContactList(action: any) {
  // console.log('reached saga for setting currency rates')
try {
  const { contact_list } = action;
  yield put({ type: "SET_CONTACT_LIST_SUCCESS", contact_list });
} catch (error) {
  console.log(error, "..error");
  yield put({ type: "SET_CONTACT_LIST_FAILURE", error });
}
}

function* setContactList() {
yield takeLatest(actions.SET_CONTACT_LIST, feedContactList);
}

function* feedSuggested(action: any) {
  // console.log('reached saga for setting currency rates')
try {
  const { suggested } = action;
  yield put({ type: "SET_SUGGESTED_SUCCESS", suggested });
} catch (error) {
  console.log(error, "..error");
  yield put({ type: "SET_SUGGESTED_FAILURE", error });
}
}

function* setSuggested() {
yield takeLatest(actions.SET_SUGGESTED, feedSuggested);
}

function* feedCircle(action: any) {
  // console.log('reached saga for setting currency rates')
try {
  const { circle } = action;
  yield put({ type: "SET_CIRCLE_SUCCESS", circle });
} catch (error) {
  console.log(error, "..error");
  yield put({ type: "SET_CIRCLE_FAILURE", error });
}
}

function* setCircle() {
yield takeLatest(actions.SET_CIRCLE, feedCircle);
}


export function* messagingSaga() {
  yield all([call(setMessages),
    call(setRoom),
    call(setInvites),
    call(setContactList),
    call(setSuggested),
    call(setCircle)
  ]);
}