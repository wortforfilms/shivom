

import { CREATE_SHORT, CREATE_SHORT_FAILURE, CREATE_SHORT_SUCCESS, REMOVE_SHORT, REMOVE_SHORT_FAILURE, REMOVE_SHORT_SUCCESS, UPDATE_SHORT, UPDATE_SHORT_FAILURE, UPDATE_SHORT_SUCCESS } from "./type"

export const create_short=(short: any)=>{
  return {
    type: CREATE_SHORT,
    short
  }
}

export const create_short_success=(short: any)=>{
  return {
    type: CREATE_SHORT_SUCCESS,
    short
  }
}

export const create_short_failure=(error:any)=>{
  return {
    type: CREATE_SHORT_FAILURE,
    error
  }
}



export const update_short=(short: any)=>{
  return {
    type: UPDATE_SHORT,
    short
  }
}

export const update_short_success=(short: any)=>{
  return {
    type: UPDATE_SHORT_SUCCESS,
    short
  }
}

export const update_short_failure=(error:any)=>{
  return {
    type: UPDATE_SHORT_FAILURE,
    error
  }
}



export const remove_short=(short: any)=>{
  return {
    type: REMOVE_SHORT,
    short
  }
}

export const remove_short_success=(short: any)=>{
  return {
    type: REMOVE_SHORT_SUCCESS,
    short
  }
}

export const remove_short_failure=(error:any)=>{
  return {
    type: REMOVE_SHORT_FAILURE,
    error
  }
}