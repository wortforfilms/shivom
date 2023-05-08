import { APPLY_ON_OPENING, CLOSE_OPENING, DELETE_OPENING, GET_USER_APPLICATIONS, GET_USER_APPLICATIONS_FAILURE, GET_USER_APPLICATIONS_SUCCESS, IGNORE_OPENING, REJECT_CANDIDTATE, REPORT_OPENING, SELECT_CANDIDTATE, SET_OPENINGS, SET_OPENINGS_FAILURE, SET_OPENINGS_SUCCESS, SHORTLIST_CANDIDTATE, UPDATE_USER_APPLICATIONS, UPDATE_USER_APPLICATIONS_FAILURE, UPDATE_USER_APPLICATIONS_SUCCESS } from "./type"

export const set_opening=(openings:any)=>{
  return {
    type:SET_OPENINGS,
    openings
  }
}

export const set_opening_success=(openings:any)=>{
  return {
    type:SET_OPENINGS_SUCCESS,
    openings
  }
}

export const set_opening_failure=(error:any)=>{
  return {
    type:SET_OPENINGS_FAILURE,
    error
  }
}

export const apply_on_opening=(id:any)=>{
  return {
    type: APPLY_ON_OPENING,
    id
  }
}

export const ignore_opening=(id:any)=>{
  return {
    type: IGNORE_OPENING,
    id
  }
}

export const report_opening=(id:any)=>{
  return {
    type: REPORT_OPENING,
    id
  }
}

export const delete_opening=(id:any)=>{
  return {
    type: DELETE_OPENING,
    id
  }
}

export const shortlist_candidate=(opening_id:any,userId:any)=>{
  return {
    type: SHORTLIST_CANDIDTATE,
    opening_id,
    userId
  }
}

export const reject_candidate=(opening_id:any,userId:any)=>{
  return {
    type: REJECT_CANDIDTATE,
    opening_id,
    userId
  }
}

export const select_candidate=(opening_id:any,userId:any)=>{
  return {
    type: SELECT_CANDIDTATE,
    opening_id,
    userId
  }
}

export const close_candidate=(opening_id:any)=>{
  return {
    type: CLOSE_OPENING,
    opening_id
  }
}



export const get_user_applications=(applications:any)=>{
  return {
    type:GET_USER_APPLICATIONS,
    applications
  }
}

export const get_user_applications_success=(applications:any)=>{
  return {
    type:GET_USER_APPLICATIONS,
    applications
  }
}

export const get_user_applications_failure=(error:any)=>{
  return {
    type:GET_USER_APPLICATIONS_SUCCESS,
    error
  }
}

export const update_user_applications=(applications:any)=>{
  return {
    type:UPDATE_USER_APPLICATIONS,
    applications
  }
}

export const update_user_applications_success=(applications:any)=>{
  return {
    type:UPDATE_USER_APPLICATIONS_SUCCESS,
    applications
  }
}

export const update_user_applications_failure=(error:any)=>{
  return {
    type:UPDATE_USER_APPLICATIONS_FAILURE,
    error
  }
}