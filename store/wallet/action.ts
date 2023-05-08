import { FIRST_INIT_WALLET, FIRST_INIT_WALLET_FAILURE, FIRST_INIT_WALLET_SUCCESS, GET_WALLET, GET_WALLET_FAILURE, GET_WALLET_SUCCESS, REFILL_WALLET, REFILL_WALLET_FAILURE, REFILL_WALLET_SUCCESS, RESET_WALLET } from "./type"

export const first_init_wallet=(wallet:any)=>{
  return {
    type:FIRST_INIT_WALLET,
    wallet
  }
}


export const first_init_wallet_success=(wallet:any)=>{
  return {
    type:FIRST_INIT_WALLET_SUCCESS,
    wallet
  }
}

export const first_init_wallet_failure=(error:any)=>{
  return {
    type:FIRST_INIT_WALLET_FAILURE,
    error
  }
}

export const get_wallet=(wallet:any)=>{
  return {
    type:GET_WALLET,
    wallet
  }
}


export const get_wallet_success=(wallet:any)=>{
  return {
    type:GET_WALLET_SUCCESS,
    wallet
  }
}

export const get_wallet_failure=(error:any)=>{
  return {
    type:GET_WALLET_FAILURE,
    error
  }
}

export const refill_wallet=(wallet:any)=>{
  return {
    type:REFILL_WALLET,
    wallet
  }
}


export const refill_wallet_success=(wallet:any)=>{
  return {
    type:REFILL_WALLET_SUCCESS,
    wallet
  }
}

export const refill_wallet_failure=(error:any)=>{
  return {
    type:REFILL_WALLET_FAILURE,
    error
  }
}

export const reset_wallet=()=>{
  return {
    type: RESET_WALLET
  }
}