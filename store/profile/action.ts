import { CREATE_PROFILE, CREATE_PROFILE_FAILURE, CREATE_PROFILE_SUCCESS, RESET_PROFILE, UPDATE_PROFILE, UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_SUCCESS } from "./type"





export const create_profile=(profile: any)=>{
  return {
    type: CREATE_PROFILE,
    profile
  }
}

export const create_profile_success=(profile: any)=>{
  return {
    type: CREATE_PROFILE_SUCCESS,
    profile
  }
}

export const create_profile_failure=(error: any)=>{
  return {
    type: CREATE_PROFILE_FAILURE,
    error
  }
}



export const update_profile=(profile: any)=>{
  return {
    type: UPDATE_PROFILE,
    profile
  }
}

export const update_profile_success=(profile: any)=>{
  return {
    type: UPDATE_PROFILE_SUCCESS,
    profile
  }
}

export const update_profile_failure=(error: any)=>{
  return {
    type: UPDATE_PROFILE_FAILURE,
    error
  }
}

export const reset_profile=()=>{
  return {
    type: RESET_PROFILE 
  }
}