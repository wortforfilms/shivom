import { CREATE_SHOP, CREATE_SHOP_FAILURE, CREATE_SHOP_SUCCESS, UPDATE_SHOP, UPDATE_SHOP_FAILURE, UPDATE_SHOP_SUCCESS } from "./type"





export const create_shop=(shop: any)=>{
  return {
    type: CREATE_SHOP,
    shop
  }
}

export const create_shop_success=(shop: any)=>{
  return {
    type: CREATE_SHOP_SUCCESS,
    shop
  }
}

export const create_shop_failure=(error:any)=>{
  return {
    type: CREATE_SHOP_FAILURE,
    error
  }
}



export const update_shop=(shop: any)=>{
  return {
    type: UPDATE_SHOP,
    shop
  }
}

export const update_shop_success=(shop: any)=>{
  return {
    type: UPDATE_SHOP_SUCCESS,
    shop
  }
}

export const update_shop_failure=(error:any)=>{
  return {
    type: UPDATE_SHOP_FAILURE,
    error
  }
}