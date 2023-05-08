import { SET_MESSAGES, SET_MESSAGES_FAILURE, SET_MESSAGES_SUCCESS } from "./type"

export const set_messages=(messages:any)=>{
  return {
    type:SET_MESSAGES,
    messages
  }
}

export const set_messages_success=(messages:any)=>{
  return {
    type:SET_MESSAGES_SUCCESS,
    messages
  }
}

export const set_messages_failure=(error:any)=>{
  return {
    type:SET_MESSAGES_FAILURE,
    error
  }
}

import { SET_ROOM, SET_ROOM_FAILURE, SET_ROOM_SUCCESS } from "./type"

export const set_room=(room:any)=>{
  return {
    type:SET_ROOM,
    room
  }
}

export const set_room_success=(room:any)=>{
  return {
    type:SET_ROOM_SUCCESS,
    room
  }
}

export const set_room_failure=(error:any)=>{
  return {
    type:SET_ROOM_FAILURE,
    error
  }
}

import { SET_INVITES, SET_INVITES_FAILURE, SET_INVITES_SUCCESS } from "./type"

export const set_invites=(invites_for_user:any,invites_by_user:any)=>{
  return {
    type:SET_INVITES,
    invites_for_user,
    invites_by_user
  }
}

export const set_invites_success=(invites_for_user:any,invites_by_user:any)=>{
  return {
    type:SET_INVITES_SUCCESS,
    invites_for_user,
    invites_by_user
  }
}

export const set_invites_failure=(error:any)=>{
  return {
    type:SET_INVITES_FAILURE,
    error
  }
}

import { SET_CONTACT_LIST, SET_CONTACT_LIST_FAILURE, SET_CONTACT_LIST_SUCCESS } from "./type"

export const set_contact_list=(contact_list:any)=>{
  return {
    type:SET_CONTACT_LIST,
    contact_list
  }
}

export const set_contact_list_success=(contact_list:any)=>{
  return {
    type:SET_CONTACT_LIST_SUCCESS,
    contact_list
  }
}

export const set_contact_list_failure=(error:any)=>{
  return {
    type:SET_CONTACT_LIST_FAILURE,
    error
  }
}

import { SET_SUGGESTED, SET_SUGGESTED_FAILURE, SET_SUGGESTED_SUCCESS } from "./type"

export const set_suggested=(suggested:any)=>{
  return {
    type:SET_SUGGESTED,
    suggested
  }
}

export const set_suggested_success=(suggested:any)=>{
  return {
    type:SET_SUGGESTED_SUCCESS,
    suggested
  }
}

export const set_suggested_failure=(error:any)=>{
  return {
    type:SET_SUGGESTED_FAILURE,
    error
  }
}

import { SET_CIRCLE, SET_CIRCLE_FAILURE, SET_CIRCLE_SUCCESS } from "./type"

export const set_circle=(circle:any)=>{
  return {
    type:SET_CIRCLE,
    circle
  }
}

export const set_circle_success=(circle:any)=>{
  return {
    type:SET_CIRCLE_SUCCESS,
    circle
  }
}

export const set_circle_failure=(error:any)=>{
  return {
    type:SET_CIRCLE_FAILURE,
    error
  }
}

