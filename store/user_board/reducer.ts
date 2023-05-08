import { SET_USER_APPLICATIONS, SET_USER_APPLICATIONS_FAILURE, SET_USER_APPLICATIONS_SUCCESS, SET_USER_CAST_OPENINGS, SET_USER_CAST_OPENINGS_FAILURE, SET_USER_CAST_OPENINGS_SUCCESS, SET_USER_CREW_OPENINGS, SET_USER_CREW_OPENINGS_FAILURE, SET_USER_CREW_OPENINGS_SUCCESS, SET_USER_HIRINGS, SET_USER_HIRINGS_FAILURE, SET_USER_HIRINGS_SUCCESS, SET_USER_HOD_OPENINGS, SET_USER_HOD_OPENINGS_FAILURE, SET_USER_HOD_OPENINGS_SUCCESS, SET_USER_ITEM_SALES, SET_USER_ITEM_SALES_FAILURE, SET_USER_ITEM_SALES_SUCCESS, SET_USER_PROJECTS, SET_USER_PROJECTS_FAILURE, SET_USER_PROJECTS_SUCCESS, SET_USER_PURCHASES, SET_USER_PURCHASES_FAILURE, SET_USER_PURCHASES_SUCCESS, SET_USER_RENTALS, SET_USER_RENTALS_FAILURE, SET_USER_RENTALS_SUCCESS, SET_USER_RENTAL_BOOKINGS, SET_USER_RENTAL_BOOKINGS_FAILURE, SET_USER_RENTAL_BOOKINGS_SUCCESS, SET_USER_SERVICE_BOOKINGS, SET_USER_SERVICE_BOOKINGS_FAILURE, SET_USER_SERVICE_BOOKINGS_SUCCESS, SET_USER_STORIES, SET_USER_STORIES_FAILURE, SET_USER_STORIES_SUCCESS, SET_USER_TLP_COINS, SET_USER_TLP_COINS_FAILURE, SET_USER_TLP_COINS_SUCCESS } from "./type"





export type UserBoardState = {
    tlp_coins: {
        total: number,
        used: number,
        earned: number,
        wallet: number,
        recieved: number,
        pro_coins: number,
        TLPC: [{
            created_at: string,
            created_by: number,
            gifted_by: number,
            earned_by: string,
            token: string,
            status: string,
            used_for: string
        }]
    },
    user_projects: [],
    user_stories: [],
    user_applications: {
        cast: [],
        crew: [],
        hod: []
    },
    user_cast_openings:[],
    user_crew_openins:[],
    user_hod_openings:[],

    user_hirings_expense:[],
    user_purchases_expense:[],
    user_rentals_expense:[],

    user_item_sales_income:[],
    user_service_bookings_income:[],
    user_rental_bookings_income:[],

    // user_expense: {
    //     hirings: [],
    //     purchases: [],
    //     rentals: []
    // },
    // user_income: {
    //     item_sales: [],
    //     service_bookings: [],
    //     rental_bookings: []
    // }
    loading: boolean,
    error: object
}

 const userBoardState:UserBoardState={
    tlp_coins: {
        total: 0,
        used: 0,
        earned: 0,
        wallet: 0,
        recieved: 0,
        pro_coins: 0,
        TLPC: [{
            created_at: "",
            created_by: 0,
            gifted_by: 0,
            earned_by: "string",
            token: "string",
            status: "string",
            used_for: "string"
        }]
    },
    user_projects: [],
    user_stories: [],

    user_applications: {
        cast: [],
        crew: [],
        hod: []
    },
    user_cast_openings:[],
    user_crew_openins:[],
    user_hod_openings:[],

    user_hirings_expense:[],
    user_purchases_expense:[],
    user_rentals_expense:[],

    user_item_sales_income:[],
    user_service_bookings_income:[],
    user_rental_bookings_income:[],
    // user_openings: {
    //     cast: [],
    //     crew: [],
    //     hod: []
    // },
    // user_expense: {
    //     hirings: [],
    //     purchases: [],
    //     rentals: []
    // },
    // user_income: {
    //     item_sales: [],
    //     service_bookings: [],
    //     rental_bookings: []
    // },
    loading: false,
    error: {}

}

export const userBoardReducer = (state = userBoardState, action: any) => {
    switch (action.type) {
        case SET_USER_TLP_COINS:
            return {
                ...state,
                loading: true
            }
        case SET_USER_TLP_COINS_SUCCESS:
            return {
                ...state,
                tlp_coins: action.tlp_coins,
                loading: false
            }
        case SET_USER_TLP_COINS_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case SET_USER_CAST_OPENINGS:
            return {
                ...state,
                loading: true
            }
        case SET_USER_CAST_OPENINGS_SUCCESS:
            return {
                ...state,
                user_cast_openings: action.cast_openings ,

                loading: false
            }
        case SET_USER_CAST_OPENINGS_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case SET_USER_CREW_OPENINGS:
            return {
                ...state,
                loading: true
            }
        case SET_USER_CREW_OPENINGS_SUCCESS:
            return {
                ...state,
                user_crew_openings:action.crew_openings ,
                loading: false
            }
        case SET_USER_CREW_OPENINGS_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case SET_USER_HOD_OPENINGS:
            return {
                ...state,
                loading: true
            }
        case SET_USER_HOD_OPENINGS_SUCCESS:
            return {
                ...state,
                user_hod_openings: action.hod_openings ,
                loading: false
            }
        case SET_USER_HOD_OPENINGS_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            }

        case SET_USER_APPLICATIONS:
            return {
                ...state,
                loading: true
            }
        case SET_USER_APPLICATIONS_SUCCESS:
            return {
                ...state,
                user_applications: action.applications,
                loading: false
            }
        case SET_USER_APPLICATIONS_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case SET_USER_STORIES:
            return {
                ...state,
                loading: true
            }
        case SET_USER_STORIES_SUCCESS:
            return {
                ...state,
                user_stories: action.stories,
                loading: false
            }
        case SET_USER_STORIES_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case SET_USER_PROJECTS:
            return {
                ...state,
                loading: true
            }
        case SET_USER_PROJECTS_SUCCESS:
            return {
                ...state,
                user_projects: action.projects,
                loading: false
            }
        case SET_USER_PROJECTS_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            }

        case SET_USER_HIRINGS:
            return {
                ...state,
                loading: true
            }
        case SET_USER_HIRINGS_SUCCESS:
            return {
                ...state,
                user_hirings_expense:  action.hirings,
                loading: false
            }
        case SET_USER_HIRINGS_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case SET_USER_PURCHASES:
            return {
                ...state,
                loading: true
            }
        case SET_USER_PURCHASES_SUCCESS:
            return {
                ...state,
                user_purchases_expense: action.purchases,
                loading: false
            }
        case SET_USER_PURCHASES_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            }

        case SET_USER_RENTALS:
            return {
                ...state,
                loading: true
            }
        case SET_USER_RENTALS_SUCCESS:
            return {
                ...state,
                user_rentals_expense:  action.rentals ,
                loading: false
            }
        case SET_USER_RENTALS_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            }


            case SET_USER_ITEM_SALES:
    return {
        ...state,
        loading:true
    }
    case SET_USER_ITEM_SALES_SUCCESS:
        return {
            ...state,
            user_item_sales_income:action.item_sales,
            loading:false
        }
        case SET_USER_ITEM_SALES_FAILURE:
        return {
            ...state,
            error:action.error,
            loading:false
        }

        case SET_USER_SERVICE_BOOKINGS:
    return {
        ...state,
        loading:true
    }
    case SET_USER_SERVICE_BOOKINGS_SUCCESS:
        return {
            ...state,
            user_service_bookings_income:action.service_bookings,
            loading:false
        }
        case SET_USER_SERVICE_BOOKINGS_FAILURE:
        return {
            ...state,
            error:action.error,
            loading:false
        }

        case SET_USER_RENTAL_BOOKINGS:
    return {
        ...state,
        loading:true
    }
    case SET_USER_RENTAL_BOOKINGS_SUCCESS:
        return {
            ...state,
            user_rental_booking_income:action.rental_bookings,
            loading:false
        }
        case SET_USER_RENTAL_BOOKINGS_FAILURE:
        return {
            ...state,
            error:action.error,
            loading:false
        }
        
        default:
            return {

                ...state
            }
            break;
    }
}