import { all, call, put, takeLatest } from "@redux-saga/core/effects";


import * as actions from './type'
import axios from 'axios'



const register_user=async(variable:any)=>{
  console.log('in function')
  const data= await axios.post('api/auth/register',  variable).then(d=>{return d}).catch(error=>console.log(error))
  return {...data}
}
function* register(action:any) {
  try {
    // console.log('in saga',action.data)
    // const data= yield register_user(action.data)

    const {user, accessToken}=action.data

  yield put({ type: "REGISTER_SUCCESS", user, accessToken })

  } catch (_error:any) {
     const {response: {errors}} = _error
    const error_ = errors[0]
    console.log( error_ )
    const{message}=error_
    const error = "wrong user credentials"

    console.log(message,'check failed regiser',error)
    yield put({ type: "REGISTER_FAILURE", error: message });

  }
}
function* registerUserSaga() {
  yield takeLatest(actions.REGISTER, register);
}


function* login(action:any) {

  try {

    const {data:{user,sessionToken}}=action

  yield put({ type: "LOGIN_SUCCESS", user, sessionToken })


  } catch (error) {
    console.log(error,"..")
    yield put({ type: "LOGIN_FAILURE",  error });

  }
}
function* loginUserSaga() {
  yield takeLatest(actions.LOGIN, login);
}


function* signout(action:any) {
  console.log("==============================>so pipes",action)
  try {
    // console.log('data from signout----------->',action)
    // const data= yield call(login_user,action.data)

    const {data:{user}}=action
// console.log('----------------------->so',user)
  yield put({ type: "SIGNOUT_SUCCESS" })

  } catch (error) {
    console.log(error,"..")
    yield put({ type: "SIGNOUT_FAILURE",  error });

  }
}
function* logoutUserSaga() {
  yield takeLatest(actions.SIGNOUT, signout);
}



export function* authSaga() {
  yield all([call(registerUserSaga), call(loginUserSaga), call(logoutUserSaga)])

}


// or ac le 
// d at a or ac le
// canvas structure symbol
// 