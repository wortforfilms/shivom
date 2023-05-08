import {SET_SUBSCRIPTIONS,SET_SUBSCRIPTIONS_SUCCESS,
    SET_SUBSCRIPTIONS_FAILURE, GET_SUBSCRIPTIONS, 
    GET_SUBSCRIPTIONS_SUCCESS, GET_SUBSCRIPTIONS_FAILURE, 
    UPDATE_FILMBOX_SUBSCRIPTIONS, UPDATE_FILMBOX_SUBSCRIPTIONS_SUCCESS, UPDATE_FILMBOX_SUBSCRIPTIONS_FAILURE, 
    UPDATE_CREWBOX_SUBSCRIPTIONS, UPDATE_CREWBOX_SUBSCRIPTIONS_SUCCESS, UPDATE_CREWBOX_SUBSCRIPTIONS_FAILURE, 
    UPDATE_COINBOX_SUBSCRIPTIONS, UPDATE_COINBOX_SUBSCRIPTIONS_SUCCESS, UPDATE_COINBOX_SUBSCRIPTIONS_FAILURE, 
    UPDATE_CASTBOX_SUBSCRIPTIONS, UPDATE_CASTBOX_SUBSCRIPTIONS_FAILURE, UPDATE_CASTBOX_SUBSCRIPTIONS_SUCCESS, 
    UPDATE_HODBOX_SUBSCRIPTIONS, UPDATE_HODBOX_SUBSCRIPTIONS_FAILURE, UPDATE_HODBOX_SUBSCRIPTIONS_SUCCESS, 
    UPDATE_LPBOX_SUBSCRIPTIONS, UPDATE_LPBOX_SUBSCRIPTIONS_FAILURE, UPDATE_LPBOX_SUBSCRIPTIONS_SUCCESS, CREATE_COMPANY, CREATE_COMPANY_SUCCESS, CREATE_COMPANY_FAILURE, UPDATE_COMPANY, UPDATE_COMPANY_SUCCESS, UPDATE_COMPANY_FAILURE, RESET_SUBSCRIPTION

} from './type'

export const set_subscriptions=(subscriptions: any)=>{
    return {
      type: SET_SUBSCRIPTIONS,
      subscriptions
    }
  }
  
  export const set_subscriptions_success=(subscriptions: any)=>{
    // console.log('---->subscriptions set',subscriptions)
    return {
      type: SET_SUBSCRIPTIONS_SUCCESS,
      subscriptions
    }
  }
  
  export const set_subscriptions_failure=(error:any)=>{
    return {
      type: SET_SUBSCRIPTIONS_FAILURE,
      error
    }
  }

  export const get_subscriptions=(subscriptions: any)=>{
    return {
      type: GET_SUBSCRIPTIONS,
      subscriptions
    }
  }
  
  export const get_subscriptions_success=(subscriptions: any)=>{
    return {
      type: GET_SUBSCRIPTIONS_SUCCESS,
      subscriptions
    }
  }
  
  export const get_subscriptions_failure=(error:any)=>{
    return {
      type: GET_SUBSCRIPTIONS_FAILURE,
      error
    }
  }


  export const update_filmbox_subscriptions=(filmbox: any)=>{
    return {
      type: UPDATE_FILMBOX_SUBSCRIPTIONS,
      filmbox
    }
  }
  
  export const update_filmbox_subscriptions_success=(filmbox: any)=>{
    return {
      type: UPDATE_FILMBOX_SUBSCRIPTIONS_SUCCESS,
      filmbox
    }
  }
  
  export const update_filmbox_subscriptions_failure=(error:any)=>{
    return {
      type: UPDATE_FILMBOX_SUBSCRIPTIONS_FAILURE,
      error
    }
  }

  export const update_crewbox_subscriptions=(crewbox: any)=>{
    return {
      type: UPDATE_CREWBOX_SUBSCRIPTIONS,
      crewbox
    }
  }
  
  export const update_crewbox_subscriptions_success=(crewbox: any)=>{
    return {
      type: UPDATE_CREWBOX_SUBSCRIPTIONS_SUCCESS,
      crewbox
    }
  }
  
  export const update_crewbox_subscriptions_failure=(error:any)=>{
    return {
      type: UPDATE_CREWBOX_SUBSCRIPTIONS_FAILURE,
      error
    }
  }

  export const update_coinbox_subscriptions=(coinbox: any)=>{
    return {
      type: UPDATE_COINBOX_SUBSCRIPTIONS,
      coinbox
    }
  }
  
  export const update_coinbox_subscriptions_success=(coinbox: any)=>{
    return {
      type: UPDATE_COINBOX_SUBSCRIPTIONS_SUCCESS,
      coinbox
    }
  }
  
  export const update_coinbox_subscriptions_failure=(error:any)=>{
    return {
      type: UPDATE_COINBOX_SUBSCRIPTIONS_FAILURE,
      error
    }
  }

  export const update_castbox_subscriptions=(castbox: any)=>{
    return {
      type: UPDATE_CASTBOX_SUBSCRIPTIONS,
      castbox
    }
  }
  
  export const update_castbox_subscriptions_success=(castbox: any)=>{
    return {
      type: UPDATE_CASTBOX_SUBSCRIPTIONS_SUCCESS,
      castbox
    }
  }
  
  export const update_castbox_subscriptions_failure=(error:any)=>{
    return {
      type: UPDATE_CASTBOX_SUBSCRIPTIONS_FAILURE,
      error
    }
  }

  export const update_hodbox_subscriptions=(hodbox: any)=>{
    return {
      type: UPDATE_HODBOX_SUBSCRIPTIONS,
      hodbox
    }
  }
  
  export const update_hodbox_subscriptions_success=(hodbox: any)=>{
    return {
      type: UPDATE_HODBOX_SUBSCRIPTIONS_SUCCESS,
      hodbox
    }
  }
  
  export const update_hodbox_subscriptions_failure=(error:any)=>{
    return {
      type: UPDATE_HODBOX_SUBSCRIPTIONS_FAILURE,
      error
    }
  }

  export const update_lpbox_subscriptions=(lpbox: any)=>{
    return {
      type: UPDATE_LPBOX_SUBSCRIPTIONS,
      lpbox
    }
  }
  
  export const update_lpbox_subscriptions_success=(lpbox: any)=>{
    return {
      type: UPDATE_LPBOX_SUBSCRIPTIONS_SUCCESS,
      lpbox
    }
  }
  
  export const update_lpbox_subscriptions_failure=(error:any)=>{
    return {
      type: UPDATE_LPBOX_SUBSCRIPTIONS_FAILURE,
      error
    }
  }

  export const create_company=(company:any)=>{
    return {
      type: CREATE_COMPANY,
      company

    }
  }

  export const create_company_success=(company:any)=>{
    return {
      type: CREATE_COMPANY_SUCCESS,
      company

    }
  }

  export const create_company_failure=(error:any)=>{
    return {
      type: CREATE_COMPANY_FAILURE,
      error

    }
  }

  export const update_company=(company:any)=>{
    return {
      type: UPDATE_COMPANY,
      company

    }
  }

  export const update_company_success=(company:any)=>{
    return {
      type: UPDATE_COMPANY_SUCCESS,
      company

    }
  }

  export const update_company_failure=(error:any)=>{
    return {
      type: UPDATE_COMPANY_FAILURE,
      error

    }
  }


  export const reset_subscription=()=>{
    return {
      type: RESET_SUBSCRIPTION
    }
  }