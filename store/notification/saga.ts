import { all, call, put, takeLatest } from "redux-saga/effects";
// import { useNotificationForUser } from "../../hooks/notification";


import * as actions from './type'

const getN = async(userId:any)=>{

  const data:any=await fetch(`/api/notifications/user/${userId}}`).then(res=>res.json()).then(data=>{
    (data:any)=>{return data}
  }).catch((error)=>{
    console.log("error",error)
  })
  return data
}
export interface ResponseGenerator{
  config?:any,
  data?:any,
  headers?:any,
  request?:any,
  status?:number,
  statusText?:string
}

function* feedD(action:any) {
  try {

    const data:ResponseGenerator= yield call(getN,action.userId)

    console.log('notifications', data)

    const {data:  notifications}=data

  yield put({ type: "GET_NOTIFICATIONS_SUCCESS",  notifications})

  } catch (error) {
    console.log(error,"..")
    yield put({ type: "GET_NOTIFICATIONS_FAILURE",  error });

  }
}
function* getNotifications() {
  yield takeLatest(actions.GET_NOTIFICATIONS, feedD);
}



export function* notificationsSaga() {
  yield all([call(getNotifications)])

}