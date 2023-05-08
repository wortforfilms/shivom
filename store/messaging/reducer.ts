import { SET_CIRCLE, SET_CIRCLE_FAILURE, SET_CIRCLE_SUCCESS, SET_CONTACT_LIST, SET_CONTACT_LIST_FAILURE, SET_CONTACT_LIST_SUCCESS, SET_INVITES, SET_INVITES_FAILURE, SET_INVITES_SUCCESS, SET_MESSAGES, SET_MESSAGES_FAILURE, SET_MESSAGES_SUCCESS, SET_ROOM, SET_ROOM_FAILURE, SET_ROOM_SUCCESS, SET_SUGGESTED, SET_SUGGESTED_FAILURE, SET_SUGGESTED_SUCCESS } from "./type"

export type MessageingState = {
  room:{
    roomId:string,
    room_type:string,
    from:number,
    messages:[
      {
        from:number,
        to:number,
        read:boolean,
        matter:{}
      }
    ]  
  }
  messages:[]
  invites_by_user:[]
  invites_for_user:[]
  suggested:[]
  contacts:[]
  circle:[]
  error: {},
  loading: boolean
}

export const messagingState: MessageingState = {
  room:{
    roomId:"",
    room_type:"",
    from:0,
    messages:[
      {
        from:0,
        to:0,
        read:false,
        matter:{}
      }
    ]  
  },
  messages:[],
  invites_by_user:[],
  invites_for_user:[],
  suggested:[],
  contacts:[],
  circle:[],
  error: {},
  loading: false
}


export const messagingReducer = (state = messagingState, action: any) => {

switch (action.type) {
  case SET_MESSAGES:
      return {
        ...state,
        loading: true
      }

    case SET_MESSAGES_SUCCESS:
      return {
        ...state,
        messages:action.messages,
        loading: false
      }
      case SET_MESSAGES_FAILURE:
        return {
          ...state,
          error:action.error,
          loading: false
        }
        case SET_ROOM:
          return {
            ...state,
            loading: true
          }
        
        case SET_ROOM_SUCCESS:
          return {
            ...state,
            room:action.room,
            loading: false
          }
          case SET_ROOM_FAILURE:
            return {
              ...state,
              error:action.error,
              loading: false
            }
            case SET_INVITES:
              return {
                ...state,
                loading: true
              }
            
            case SET_INVITES_SUCCESS:
              return {
                ...state,
                invites_by_user:action.invites_by_user,
                invites_for_user:action.invites_for_user,
                loading: false
              }
              case SET_INVITES_FAILURE:
                return {
                  ...state,
                  error:action.error,
                  loading: false
                }
                case SET_CONTACT_LIST:
                  return {
                    ...state,
                    loading: true
                  }
                
                case SET_CONTACT_LIST_SUCCESS:
                  return {
                    ...state,
                    contact_list:action.contact_list,
                    loading: false
                  }
                  case SET_CONTACT_LIST_FAILURE:
                    return {
                      ...state,
                      error:action.error,
                      loading: false
                    }
        
                    case SET_SUGGESTED:
                      return {
                        ...state,
                        loading: true
                      }
                    
                    case SET_SUGGESTED_SUCCESS:
                      return {
                        ...state,
                        suggested:action.suggested,
                        loading: false
                      }
                      case SET_SUGGESTED_FAILURE:
                        return {
                          ...state,
                          error:action.error,
                          loading: false
                        }

                        case SET_CIRCLE:
                          return {
                            ...state,
                            loading: true
                          }
                        
                        case SET_CIRCLE_SUCCESS:
                          return {
                            ...state,
                            circle:action.circle,
                            loading: false
                          }
                          case SET_CIRCLE_FAILURE:
                            return {
                              ...state,
                              error:action.error,
                              loading: false
                            }  
  default:
    return state;
}

}