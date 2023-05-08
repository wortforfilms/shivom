import { FEED_DEVICE, FEED_DEVICE_FAILURE, FEED_DEVICE_SUCCESS, FEED_LOCAL_DEVICE, FEED_LOCAL_DEVICE_FAILURE, FEED_LOCAL_DEVICE_SUCCESS, UPDATE_DEVICE, UPDATE_DEVICE_FAILURE, UPDATE_DEVICE_SIZE, UPDATE_DEVICE_SIZE_FAILURE, UPDATE_DEVICE_SIZE_SUCCESS, UPDATE_DEVICE_SUCCESS } from "./type"

export const feed_device=(device:any)=>{
  // console.log(device,'---- in action')
  return {
    type: FEED_DEVICE,
    device
  }
}

export const feed_device_success=(device:any)=>{
  return {
    type: FEED_DEVICE_SUCCESS,
    device
  }
}

export const feed_device_failure=(error: any)=>{
  return {
    type: FEED_DEVICE_FAILURE,
    error
  }
}


export const feed_local_device=(local_device:any)=>{
  // console.log(device,'---- in action')
  return {
    type: FEED_LOCAL_DEVICE,
    local_device
  }
}

export const feed_local_device_success=(local_device:any)=>{
  return {
    type: FEED_LOCAL_DEVICE_SUCCESS,
    local_device
  }
}

export const feed_loval_device_failure=(error: any)=>{
  return {
    type: FEED_LOCAL_DEVICE_FAILURE,
    error
  }
}

export const update_device=(device:any)=>{
  // console.log(device,'---- in action')
  return {
    type: UPDATE_DEVICE,
    device
  }
}

export const update_device_success=(device:any)=>{
  return {
    type: UPDATE_DEVICE_SUCCESS,
    device
  }
}

export const update_device_failure=(error: any)=>{
  return {
    type: UPDATE_DEVICE_FAILURE,
    error
  }
}

export const update_device_size=(size:any)=>{

  return {
    type: UPDATE_DEVICE_SIZE,
    size
  }
}

export const update_device_size_success=(size:any)=>{
  return {
    type: UPDATE_DEVICE_SIZE_SUCCESS,
    size
  }
}

export const update_device_size_failure=(error: any)=>{
  return {
    type: UPDATE_DEVICE_SIZE_FAILURE,
    error
  }
}