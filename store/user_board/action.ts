import { SET_USER_APPLICATIONS, SET_USER_APPLICATIONS_SUCCESS, SET_USER_CAST_OPENINGS, SET_USER_CAST_OPENINGS_SUCCESS, SET_USER_CREW_OPENINGS, SET_USER_CREW_OPENINGS_SUCCESS, SET_USER_HIRINGS, SET_USER_HIRINGS_SUCCESS, SET_USER_HOD_OPENINGS, SET_USER_HOD_OPENINGS_SUCCESS, SET_USER_ITEM_SALES, SET_USER_ITEM_SALES_SUCCESS, SET_USER_PROJECTS, SET_USER_PROJECTS_SUCCESS, SET_USER_PURCHASES, SET_USER_PURCHASES_SUCCESS, SET_USER_RENTALS, SET_USER_RENTALS_SUCCESS, SET_USER_RENTAL_BOOKINGS, SET_USER_RENTAL_BOOKINGS_SUCCESS, SET_USER_SERVICE_BOOKINGS, SET_USER_SERVICE_BOOKINGS_SUCCESS, SET_USER_STORIES, SET_USER_STORIES_SUCCESS, SET_USER_TLP_COINS, SET_USER_TLP_COINS_SUCCESS } from "./type"

export const set_user_tlp_coins=(tlp_coins:any)=>{
    return {
        type: SET_USER_TLP_COINS,
        tlp_coins
    }
}

export const set_user_tlp_coins_success=(tlp_coins:any)=>{
    return {
        type: SET_USER_TLP_COINS_SUCCESS,
        tlp_coins
    }
}

export const set_user_tlp_coins_failure=(error:any)=>{
    return {
        type: SET_USER_TLP_COINS_SUCCESS,
        error
    }
}

export const set_user_cast_openings=(cast_openings:any)=>{
    return {
        type: SET_USER_CAST_OPENINGS,
        cast_openings
    }
}

export const set_user_cast_openings_success=(cast_openings:any)=>{
    return {
        type: SET_USER_CAST_OPENINGS_SUCCESS,
        cast_openings
    }
}

export const set_user_cast_openings_failure=(error:any)=>{
    return {
        type: SET_USER_CAST_OPENINGS_SUCCESS,
        error
    }
}

export const set_user_crew_openings=(crew_openings:any)=>{
    return {
        type: SET_USER_CREW_OPENINGS,
        crew_openings
    }
}

export const set_user_crew_openings_success=(crew_openings:any)=>{
    return {
        type: SET_USER_CREW_OPENINGS_SUCCESS,
        crew_openings
    }
}

export const set_user_crew_openings_failure=(error:any)=>{
    return {
        type: SET_USER_CREW_OPENINGS_SUCCESS,
        error
    }
}

export const set_user_hod_openings=(hod_openings:any)=>{
    return {
        type: SET_USER_HOD_OPENINGS,
        hod_openings
    }
}

export const set_user_hod_openings_success=(hod_openings:any)=>{
    return {
        type: SET_USER_HOD_OPENINGS_SUCCESS,
        hod_openings
    }
}

export const set_user_hod_openings_failure=(error:any)=>{
    return {
        type: SET_USER_HOD_OPENINGS_SUCCESS,
        error
    }
}

export const set_user_applications=(applications:any)=>{
    return {
        type: SET_USER_APPLICATIONS,
        applications
    }
}

export const set_user_applications_success=(applications:any)=>{
    return {
        type: SET_USER_APPLICATIONS_SUCCESS,
        applications
    }
}

export const set_user_applications_failure=(error:any)=>{
    return {
        type: SET_USER_APPLICATIONS_SUCCESS,
        error
    }
}

export const set_user_stories=(stories:any)=>{
    return {
        type: SET_USER_STORIES,
        stories
    }
}

export const set_user_stories_success=(stories:any)=>{
    return {
        type: SET_USER_STORIES_SUCCESS,
        stories
    }
}

export const set_user_stories_failure=(error:any)=>{
    return {
        type: SET_USER_STORIES_SUCCESS,
        error
    }
}

export const set_user_projects=(projects:any)=>{
    return {
        type: SET_USER_PROJECTS,
        projects
    }
}

export const set_user_projects_success=(projects:any)=>{
    return {
        type: SET_USER_PROJECTS_SUCCESS,
        projects
    }
}

export const set_user_projects_failure=(error:any)=>{
    return {
        type: SET_USER_PROJECTS_SUCCESS,
        error
    }
}

export const set_user_hirings=(hirings:any)=>{
    return {
        type: SET_USER_HIRINGS,
        hirings
    }
}

export const set_user_hirings_success=(hirings:any)=>{
    return {
        type: SET_USER_HIRINGS_SUCCESS,
        hirings
    }
}

export const set_user_hirings_failure=(error:any)=>{
    return {
        type: SET_USER_HIRINGS_SUCCESS,
        error
    }
}

export const set_user_purchases=(purchases:any)=>{
    return {
        type: SET_USER_PURCHASES,
        purchases
    }
}

export const set_user_purchases_success=(purchases:any)=>{
    return {
        type: SET_USER_PURCHASES_SUCCESS,
        purchases
    }
}

export const set_user_purchases_failure=(error:any)=>{
    return {
        type: SET_USER_PURCHASES_SUCCESS,
        error
    }
}

export const set_user_rentals=(rentals:any)=>{
    return {
        type: SET_USER_RENTALS,
        rentals
    }
}

export const set_user_rentals_success=(rentals:any)=>{
    return {
        type: SET_USER_RENTALS_SUCCESS,
        rentals
    }
}

export const set_user_rentals_failure=(error:any)=>{
    return {
        type: SET_USER_RENTALS_SUCCESS,
        error
    }
}

export const set_user_item_sales=(item_sales:any)=>{
    return {
        type: SET_USER_ITEM_SALES,
        item_sales
    }
}

export const set_user_item_sales_success=(item_sales:any)=>{
    return {
        type: SET_USER_ITEM_SALES_SUCCESS,
        item_sales
    }
}

export const set_user_item_sales_failure=(error:any)=>{
    return {
        type: SET_USER_ITEM_SALES_SUCCESS,
        error
    }
}

export const set_user_service_bookings=(service_bookings:any)=>{
    return {
        type: SET_USER_SERVICE_BOOKINGS,
        service_bookings
    }
}

export const set_user_service_bookings_success=(service_bookings:any)=>{
    return {
        type: SET_USER_SERVICE_BOOKINGS_SUCCESS,
        service_bookings
    }
}

export const set_user_service_bookings_failure=(error:any)=>{
    return {
        type: SET_USER_SERVICE_BOOKINGS_SUCCESS,
        error
    }
}


export const set_user_rental_bookings=(rental_bookings:any)=>{
    return {
        type: SET_USER_RENTAL_BOOKINGS,
        rental_bookings
    }
}

export const set_user_rental_bookings_success=(rental_bookings:any)=>{
    return {
        type: SET_USER_RENTAL_BOOKINGS_SUCCESS,
        rental_bookings
    }
}

export const set_user_rental_bookings_failure=(error:any)=>{
    return {
        type: SET_USER_RENTAL_BOOKINGS_SUCCESS,
        error
    }
}