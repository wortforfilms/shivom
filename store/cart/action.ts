import { ADD_TO_CART, REMOVE_FROM_CART,ADD_QUANTITY, REMOVE_QUANTITY, RESET_AFTER_INVOICE, RESET_AFTER_SIGNOUT, SET_DELIVERY_ADDRESS, SET_DELIVERY_ADDRESS_SUCCESS, SET_DELIVERY_ADDRESS_FAILURE, SET_USER_ADDRESSES, SET_USER_ADDRESSES_SUCCESS, SET_USER_ADDRESSES_FAILURE } from "./types";

export const add_to_cart = (id:any,title:string,price:any,images:any,pr_type:any) =>{
    console.log('trace id',id,title,price,pr_type)
    return {
        type: ADD_TO_CART,
        id,
        title,
        price,
        images,
        pr_type
    }
}

export const remove_from_cart_ = (id:any) =>{
    return {
        type: REMOVE_FROM_CART,
        id
    }
}

export const add_quantity = (id:any) =>{
    return{
        type: ADD_QUANTITY,
        id,
     
    }
}

export const remove_quantity = (id:any) =>{
    return{
        type: REMOVE_QUANTITY,
        id,
     
    }
}


export const reset_cart = () =>{
    return{
        type: RESET_AFTER_INVOICE,
        
     
    }
}

export const remove_cart = () =>{
    return{
        type: RESET_AFTER_SIGNOUT,
        
     
    }
}

export const set_delivery_address=(address:any)=>{
    return {
        type: SET_DELIVERY_ADDRESS,
        address
    }
}

export const set_delivery_address_success=(address:any)=>{
    return {
        type: SET_DELIVERY_ADDRESS_SUCCESS,
        address
    }
}

export const set_delivery_address_failure=(error:any)=>{
    return {
        type: SET_DELIVERY_ADDRESS_FAILURE,
        error
    }
}




export const set_user_addresses=(addresses:any)=>{
    return {
        type: SET_USER_ADDRESSES,
        addresses
    }
}

export const set_user_addresses_success=(addresses:any)=>{
    return {
        type: SET_USER_ADDRESSES_SUCCESS,
        addresses
    }
}

export const set_user_addresses_failure=(error:any)=>{
    return {
        type: SET_USER_ADDRESSES_FAILURE,
        error
    }
}