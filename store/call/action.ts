import { CREATE_ANSWER, CREATE_ANSWER_FAILURE, CREATE_ANSWER_SUCCESS, 
  CREATE_OFFER, CREATE_OFFER_SUCCESS, CREATE_OFFER_FAILURE, REJECT_OFFER, REJECT_OFFER_SUCCESS, REJECT_OFFER_FAILURE, START_CALL, START_CALL_SUCCESS, START_CALL_FAILURE, END_CALL, END_CALL_SUCCESS, END_CALL_FAILURE } from "./type"

export const create_answer=(payload:any)=>{
  return {
    type: CREATE_ANSWER,
    payload
  }
}

export const create_answer_success=(answer:any)=>{
  return {
    type: CREATE_ANSWER_SUCCESS,
    answer
  }
}

export const create_answer_failure=(error:any)=>{
  return {
    type: CREATE_ANSWER_FAILURE,
    error
  }
}

export const create_offer=(payload:any)=>{
  return {
    type: CREATE_OFFER,
    payload
  }
}

export const create_offer_success=(offer:any)=>{
  return {
    type: CREATE_OFFER_SUCCESS,
    offer
  }
}

export const create_offer_failure=(error:any)=>{
  return {
    type: CREATE_OFFER_FAILURE,
    error
  }
}

export const reject_offer=(payload:any)=>{
  return {
    type: REJECT_OFFER,
    payload
  }
}

export const reject_offer_success=(offer:any)=>{
  return {
    type: REJECT_OFFER_SUCCESS,
    offer
  }
}

export const reject_offer_failure=(error:any)=>{
  return {
    type: REJECT_OFFER_FAILURE,
    error
  }
}

export const start_call=(payload:any)=>{
  return {
    type: START_CALL,
    payload
  }
}

export const start_call_success=(call:any)=>{
  return {
    type: START_CALL_SUCCESS,
    call
  }
}

export const start_call_failure=(error:any)=>{
  return {
    type: START_CALL_FAILURE,
    error
  }
}

export const end_call=(payload:any)=>{
  return {
    type: END_CALL,
    payload
  }
}

export const end_call_success=(call:any)=>{
  return {
    type: END_CALL_SUCCESS,
    call
  }
}

export const end_call_failure=(error:any)=>{
  return {
    type: END_CALL_FAILURE,
    error
  }
}