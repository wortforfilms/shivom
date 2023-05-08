import { SET_CURRENCY, SET_CURRENCY_FAILURE, SET_CURRENCY_RATES, SET_CURRENCY_RATES_FAILURE, SET_CURRENCY_RATES_SUCCESS, SET_CURRENCY_SUCCESS, SET_LOCAL_CONTACTS, SET_LOCAL_CONTACTS_FAILURE, SET_LOCAL_CONTACTS_SUCCESS, SET_LOCAL_REGION, SET_LOCAL_REGION_FAILURE, SET_LOCAL_REGION_SUCCESS } from "./type"


export const set_local_region=(local_region:any,device_ip_address:any,device_pin:[])=>{
    return {
        type:SET_LOCAL_REGION,
    local_region,
    device_ip_address,
    device_pin
    }
}

export const set_local_region_success=(local_region:any,device_ip_address:any,device_pin:[])=>{
    return {
        type:SET_LOCAL_REGION_SUCCESS,
        local_region,
        device_ip_address,
        device_pin
    }
}

export const set_local_region_failure=(error:any)=>{
    return {
        type:SET_LOCAL_REGION_FAILURE,
    error
    }
}

export const set_currency=(currency:any)=>{
    return {
        type: SET_CURRENCY,
        currency
    }

}

export const set_currency_success=(currency:any)=>{
    return {
        type: SET_CURRENCY_SUCCESS,
        currency
    }

}

export const set_currency_failure=(error:any)=>{
    return {
        type: SET_CURRENCY_FAILURE,
        error
    }
}


export const set_currency_rates=(rates:any)=>{
    return {
        type: SET_CURRENCY_RATES,
        rates
    }

}

export const set_currency_rates_success=(rates:any)=>{
    return {
        type: SET_CURRENCY_RATES_SUCCESS,
        rates
    }

}

export const set_currency_rates_failure=(error:any)=>{
    return {
        type: SET_CURRENCY_RATES_FAILURE,
        error
    }
}


export const set_local_contacts=(rates:any)=>{
    return {
        type: SET_LOCAL_CONTACTS,
        rates
    }

}

export const set_local_contactss_success=(contacts:any)=>{
    return {
        type: SET_LOCAL_CONTACTS_SUCCESS,
        contacts
    }

}

export const set_local_contacts_failure=(error:any)=>{
    return {
        type: SET_LOCAL_CONTACTS_FAILURE,
        error
    }
}