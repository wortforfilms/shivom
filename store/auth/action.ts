
import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, REGISTER, REGISTER_FAILURE, REGISTER_SUCCESS, SIGNOUT, SIGNOUT_FAILURE, SIGNOUT_SUCCESS, UPDATE_USER_PROFILED_STATUS, UPDATE_USER_PROFILED_STATUS_FAILURE, UPDATE_USER_PROFILED_STATUS_SUCCESS } from "./type"

export const register = (data:any)=>{
  return {
    type: REGISTER,
    data
  }
}


export const authenticate = (user:any,sessionToken:any)=>{
  return {
    user,
    sessionToken
  }
}
export const register_success = (user:any,access_token:any)=>{
  return {
    type: REGISTER_SUCCESS,
    user,
    access_token
  }
}

export const register_failure = (error:any)=>{
  return {
    type: REGISTER_FAILURE,
    error
  }
}



export const login = (data:any)=>{
  return {
    type: LOGIN,
    data,
    
  }
}

export const login_success = (user:any, sessionToken:any)=>{
  return {
    type: LOGIN_SUCCESS,
    sessionToken,
    user
  }
}

export const login_failure = (error:any)=>{
  return {
    type: LOGIN_FAILURE,
    error
  }
}

export const signout = (data:any)=>{
  return {
    type: SIGNOUT,
    data
  }
}

export const signout_success = ()=>{
  return {
    type: SIGNOUT_SUCCESS,
    
  }
}

export const signout_failure = (error:any)=>{
  return {
    type: SIGNOUT_FAILURE,
    error
  }
}


export const update_user_profile_status = (data:any)=>{
  return {
    type: UPDATE_USER_PROFILED_STATUS,
    data,
    
  }
}

export const update_user_profile_status_success = ()=>{
  return {
    type: UPDATE_USER_PROFILED_STATUS_SUCCESS,
    // user
  }
}

export const update_user_profile_status_failure = (error:any)=>{
  return {
    type: UPDATE_USER_PROFILED_STATUS_FAILURE,
    error
  }
}