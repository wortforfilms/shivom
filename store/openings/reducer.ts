import { GET_USER_APPLICATIONS, GET_USER_APPLICATIONS_FAILURE, GET_USER_APPLICATIONS_SUCCESS, SET_OPENINGS, SET_OPENINGS_FAILURE, SET_OPENINGS_SUCCESS, UPDATE_USER_APPLICATIONS, UPDATE_USER_APPLICATIONS_FAILURE, UPDATE_USER_APPLICATIONS_SUCCESS } from "./type"

export type OpeningState = {
  openings:[],
  user_openngs:[],
  project_openings:[
   {
    id:"",
    cast:[],
    crew:[],
    talent:[],
    hod:[],
    co_producer:[],
    service_provider:[]
  }
  ],
  applications:[]
  loading: Boolean,
  error: Object
}

export const openingState:OpeningState={
openings:[],
user_openngs:[],
project_openings:[
  {
    id:"",
    cast:[],
    crew:[],
    talent:[],
    hod:[],
    co_producer:[],
    service_provider:[]
  }
],
applications:[],
loading: false,
error: {}
}


export const openingsReducer=(state=openingState, action: any)=>{

  switch(action.type){
    case SET_OPENINGS:
      return {
        ...state,
        loading: true
      }
      case SET_OPENINGS_SUCCESS:
        return {
          ...state,
          loading: false,
          openings: action.openings
        }   

        case SET_OPENINGS_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.error
          };

        case GET_USER_APPLICATIONS:
          return {
            ...state,
            loading: true,
          };

          case GET_USER_APPLICATIONS_SUCCESS:
            return {
              ...state,
              loading: false,
            applications: action.applications

            }
            case GET_USER_APPLICATIONS_FAILURE:
              return {
                ...state,
                loading: false,
                error: action.error
              }   
              case UPDATE_USER_APPLICATIONS:
                return {
                  ...state,
                  loading: true,
                };
      
                case UPDATE_USER_APPLICATIONS_SUCCESS:
                  return {
                    ...state,
                    loading: false,
                applications: action.applications
      
                  }
                  case UPDATE_USER_APPLICATIONS_FAILURE:
                    return {
                      ...state,
                      loading: false,
                      error: action.error
                    } 

        default:
        return state;



  }
}