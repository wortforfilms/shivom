import { GET_NOTIFICATIONS, GET_NOTIFICATIONS_SUCCESS, GET_NOTIFICATIONS_FAILURE } from "./type"

export type NotificationState = {
  notifications:[
    {
      notificationBy: {
        first_name:String,
        id: String
      }  
      notificationFor: String,    
      notificationMessage: String,
      notificationType:    String,
      notificationAction: String
    }
  ],
  loading: Boolean,
  error: Object
}

export const notificationState:NotificationState={
notifications:[
{
  notificationBy: {
    first_name:"String",
    id: "String"
  },  
  notificationFor: "String",    
  notificationMessage: "String",
  notificationType:    "String",
  notificationAction: "String"
}
],
loading: false,
error: {}
}

export const notificationReducer=(state=notificationState, action: any)=>{

  switch(action.type){
    case GET_NOTIFICATIONS:
      return {
        ...state,
        loading: true
      }
      case GET_NOTIFICATIONS_SUCCESS:
        return {
          ...state,
          loading: false,
          notifications: action.notifications
        }   

        case GET_NOTIFICATIONS_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.error
          };

        default:
        return state;
  }
}