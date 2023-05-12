// events 
// system user circle recommended
// event types 
// user-> new : upgrade : reward : online : offline 
// compant -> new : upgrade : rewa
// job-> new : expire: selection: shortlisting : completed : rated 
// market-> new : release : order : sale : review : rating : 
// creation: -> book story screenplay production pre on-ground post release
// news -> latest boxoffice upcoming this_day_that_year this_day_history
// media_stock_exchange TV_stock_exchange star_stock_exchange crew_stock_exchange

// recommemded
// 

import { createSlice } from "@reduxjs/toolkit";


const eventSlice=createSlice({
  name:'calender',
  initialState:{
    state:false,
    day_count:['31','28','31','30','31','30','31','31','30','31','30','31'],
    day_count0:['31','29','31','30','31','30','31','31','30','31','30','31'],
    months:['january','febuary','march','april','may','june','july','august','september','october','november','december'],
    view:"select_year",
    current_time:{
      date:new Date().getDate(),
      month:new Date().getMonth(),
      year:new Date().getFullYear(),
      hour:new Date().getHours(),
      minute:new Date().getMinutes(),
      second:new Date().getSeconds(),
      milisecond:new Date().getMilliseconds()
    },
    in_view:{
      year_in_view:"",
      month_in_view:"",
      date_in_view:"",
      hour_in_view:"",
      minute_in_view:"",
      milisecond_in_view:""
    }
  },
  reducers:{
    setView:(state:any,action:{payload:any})=>{
      state.state=true,
      state.view=action.payload
    },
    setCurrentTime:(state:any)=>{
      state.state=true,
      state.current_time={
        date:new Date().getDate(),
        month:new Date().getMonth(),
        year:new Date().getFullYear(),
        hour:new Date().getHours(),
        minute:new Date().getMinutes(),
        second:new Date().getSeconds(),
        milisecond:new Date().getMilliseconds()
      }
    },
    setYear:(state:any,action:{payload:any})=>{
      state.state=true,
      state.in_view={
        ...state.in_view,
        year_in_view:action.payload
      }
    },
    setMonth:(state:any,action:{payload:any})=>{
      state.state=true,
      state.in_view={
        ...state.in_view,
        month_in_view:action.payload
      }
    },
    setDate:(state:any,action:{payload:any})=>{
      state.state=true,
      state.in_view={
        ...state.in_view,
        date_in_view:action.payload
      }
    },
    setHour:(state:any,action:{payload:any})=>{
      state.state=true,
      state.in_view={
        ...state.in_view,
        hour_in_view:action.payload
      }
    },
    setMinute:(state:any,action:{payload:any})=>{
      state.state=true,
      state.in_view={
        ...state.in_view,
        minute_in_view:action.payload
      }
    },
  }
})

export const {
setCurrentTime,setView,setYear,setMonth,setHour,setMinute,setDate
  }=eventSlice.actions

export const selectCalenderState=(earth:any)=>earth?.calender?.state
export const selectCurrent=(earth:any)=>earth?.calender?.current_time
export const selectView=(earth:any)=>earth?.calender?.in_view

export default eventSlice.reducer

