// import { toast } from "react-toastify"
import { CLOSE_ACTION_PANEL, CLOSE_APPLICATION_PANEL, CLOSE_COUPON_PANEL, CLOSE_DETAIL_PANEL, CLOSE_EDIT_ADDRESS_PANEL, CLOSE_FORM_PANEL, CLOSE_HOURLY_BOOKING_PANEL, CLOSE_IMAGE_PANEL, CLOSE_INDIVIDUAL_BOOKING_PANEL, CLOSE_LEFT_LANDING, CLOSE_LOCALIZER_PANEL, CLOSE_OPENING_PANEL, CLOSE_PAY_PANEL, CLOSE_POST_COMMENT_PANEL, CLOSE_POST_CREATE_PANEL, CLOSE_POST_MENU_PANEL, CLOSE_POST_STAT_PANEL, CLOSE_PROJECT_BOOKING_PANEL, CLOSE_PROJECT_PANEL, CLOSE_RIGHT_PROFILE, 
  HIDE_HEADER, 
  OPEN_ACTION_PANEL, 
  OPEN_APPLICATION_PANEL, 
  OPEN_COUPON_PANEL, 
  OPEN_COUPON_PANEL_FAILURE, 
  OPEN_COUPON_PANEL_SUCCESS, 
  OPEN_DETAIL_PANEL, 
  OPEN_EDIT_ADDRESS_PANEL, 
  OPEN_FORM_PANEL, 
  OPEN_HOURLY_BOOKING_PANEL, 
  OPEN_IMAGE_PANEL, 
  OPEN_INDIVIDUAL_BOOKING_PANEL, 
  OPEN_LEFT_LANDING, OPEN_LOCALIZER_PANEL, OPEN_OPENING_PANEL, OPEN_PAY_PANEL, OPEN_POST_COMMENT_PANEL, OPEN_POST_CREATE_PANEL, OPEN_POST_MENU_PANEL, OPEN_POST_STAT_PANEL, OPEN_PROJECT_BOOKING_PANEL, OPEN_PROJECT_PANEL, OPEN_RIGHT_PROFILE, SET_FOOTER_CLOSE, 
  SET_FOOTER_OPEN, SHOW_TOAST_MESSAGE } from "./type"

export const open_right_profile=()=>{
return {
  type: OPEN_RIGHT_PROFILE
}
}

export const open_left_landing=()=>{
  return {
    type: OPEN_LEFT_LANDING
  }
}

export const close_right_profile=()=>{
  return {
    type: CLOSE_RIGHT_PROFILE
  }
}

export const close_left_landing=()=>{
  return {
    type: CLOSE_LEFT_LANDING
  }
}

export const show_toast_message=(message:string)=>{
  return {
    type: SHOW_TOAST_MESSAGE,
    message:message
  }
} 

export const show_toast_message_success=(message:string)=>{

  return {
    type: SHOW_TOAST_MESSAGE,
    message:message,

  }
} 

export const show_toast_message_failure=(error:string)=>{


  return {
    type: SHOW_TOAST_MESSAGE,
    error:error
  }
} 

export const set_footer_open=()=>{
  return {
    type: SET_FOOTER_OPEN
  }
}

export const set_footer_close=()=>{
  return {
    type: SET_FOOTER_CLOSE
  }
}

export const open_individual_booking_panel=(booking_item:any)=>{
  return{
    type: OPEN_INDIVIDUAL_BOOKING_PANEL,
    booking_item
  }
}

export const close_individual_booking_panel=()=>{
  return{
    type: CLOSE_INDIVIDUAL_BOOKING_PANEL
  }
}

export const open_project_booking_panel=(booking_item:any)=>{
  return{
    type: OPEN_PROJECT_BOOKING_PANEL,
    booking_item
  }
}

export const close_project_booking_panel=()=>{
  return{
    type: CLOSE_PROJECT_BOOKING_PANEL
  }
}

export const open_opening_panel=(opening:any)=>{
  return {
    type:OPEN_OPENING_PANEL,
    opening
  }
}

export const close_opening_panel=()=>{
  return {
    type:CLOSE_OPENING_PANEL
  }
}

export const open_edit_address_panel=(address:any)=>{
  return {
    type:OPEN_EDIT_ADDRESS_PANEL,
    address
  }
}

export const close_edit_address_panel=()=>{
  return {
    type:CLOSE_EDIT_ADDRESS_PANEL
  }
}

export const open_image_panel=(image:any)=>{
  return {
    type:OPEN_IMAGE_PANEL,
    image
  }
}

export const close_image_panel=()=>{
  return {
    type:CLOSE_IMAGE_PANEL
  }
}

export const open_detail_panel=(object:any)=>{
  return {
    type:OPEN_DETAIL_PANEL,
    object
  }
}

export const close_detail_panel=()=>{
  return {
    type:CLOSE_DETAIL_PANEL
  }
}


export const open_action_panel=(messages:any, actions:any)=>{
  return{
    type: OPEN_ACTION_PANEL,
    messages,
    actions
  }
}

export const close_action_panel=()=>{
  return{
    type: CLOSE_ACTION_PANEL
  }
}


export const open_pay_panel=(messages:any, actions:any)=>{
  return{
    type: OPEN_PAY_PANEL,
    messages,
    actions
  }
}

export const close_pay_panel=()=>{
  return{
    type: CLOSE_PAY_PANEL
  }
}


export const open_project_panel=()=>{
  return{
    type: OPEN_PROJECT_PANEL,
 
  }
}

export const close_project_panel=()=>{
  return{
    type: CLOSE_PROJECT_PANEL
  }
}


export const open_application_panel=(active_opening:any)=>{
  return{
    type: OPEN_APPLICATION_PANEL,
    active_opening
 
  }
}

export const close_application_panel=()=>{
  return{
    type: CLOSE_APPLICATION_PANEL
  }
}

export const open_post_stat_panel=(post_stat:any)=>{
  return{
    type: OPEN_POST_STAT_PANEL,
    post_stat
 
  }
}

export const close_post_stat_panel=()=>{
  return{
    type: CLOSE_POST_STAT_PANEL

  }
}



export const open_post_comment_panel=(comments:any, parent_id:any)=>{
  return{
    type: OPEN_POST_COMMENT_PANEL,
    comments,
    parent_id
  }
}


export const close_post_comment_panel=()=>{
  return{
    type: CLOSE_POST_COMMENT_PANEL

  }
}



export const open_hourly_booking_panel=(hourly_booking_item:any)=>{
  return{
    type: OPEN_HOURLY_BOOKING_PANEL,
    hourly_booking_item
 
  }
}

export const close_hourly_booking_panel=()=>{
  return{
    type: CLOSE_HOURLY_BOOKING_PANEL
  }
}

export const open_form_panel=(form:any)=>{
  return{
    type: OPEN_FORM_PANEL,
    form
 
  }
}

export const close_form_panel=()=>{
  return{
    type: CLOSE_FORM_PANEL
  }
}



export const hide_header=(hide:any)=>{
  return{
    type: HIDE_HEADER,
    hide
  }
}

export const hide_footer=(hide:any)=>{
  return{
    type: HIDE_HEADER,
    hide
  }
}


export const open_coupon_panel=()=>{
  console.log("first reached")
  return{
    type: OPEN_COUPON_PANEL,
 
  }
}

export const open_coupon_panel_success=()=>{

  return{
    type: OPEN_COUPON_PANEL_SUCCESS,
 
  }
}

export const open_coupon_panel_failure=()=>{

  return{
    type: OPEN_COUPON_PANEL_FAILURE,
 
  }
}

export const close_coupon_panel=()=>{
  return{
    type: CLOSE_COUPON_PANEL
  }
}


export const open_localizer_panel=()=>{
  return{
    type: OPEN_LOCALIZER_PANEL,
 
  }
}

export const close_localizer_panel=()=>{
  return{
    type: CLOSE_LOCALIZER_PANEL
  }
}

export const open_post_create_panel=()=>{
  return{
    type: OPEN_POST_CREATE_PANEL,
 
  }
}

export const close_post_create_panel=()=>{
  return{
    type: CLOSE_POST_CREATE_PANEL
  }
}

export const open_post_menu_panel=(option:any)=>{
  return{
    type: OPEN_POST_MENU_PANEL,
    option 
  }
}

export const close_post_menu_panel=()=>{
  return{
    type: CLOSE_POST_MENU_PANEL
  }
}