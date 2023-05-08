import { CREATE_NOTIFICATION, GET_NOTIFICATIONS, GET_NOTIFICATIONS_SUCCESS, GET_NOTIFICATIONS_FAILURE, CREATE_NOTIFICATION_SUCCESS, CREATE_NOTIFICATION_FAILURE } from "./type"

export const get_notifications=(userId:  any)=>{
  return {
    type: GET_NOTIFICATIONS,
    userId
  }
}

export const get_notifications_success=(notifications: any)=>{
  return {
    type: GET_NOTIFICATIONS_SUCCESS,
    notifications
  }
}


export const get_notifications_failure=(error: any)=>{
  return {
    type: GET_NOTIFICATIONS_FAILURE,
    error
  }
}


export const create_notification=(userId:  any)=>{
  return {
    type: CREATE_NOTIFICATION,
    userId
  }
}

export const create_notification_success=(notifications: any)=>{
  return {
    type: CREATE_NOTIFICATION_SUCCESS,
    notifications
  }
}


export const create_notifications_failure=(error: any)=>{
  return {
    type: CREATE_NOTIFICATION_FAILURE,
    error
  }
}
