
import { Box } from "@react-three/drei";
import { createSlice } from "@reduxjs/toolkit";


const gameSlice=createSlice({
  name:'games',
  initialState:{
    state:false,
    current_games:[
      {
        type:"AgnibANa",
        started_at:"",
        amount:"",
        players:[],
        box:""
      },
      {
        type:"Lakshmi",
        started_at:"",
        amount:"",
        players:[],
        box:""
      },
      {
        type:"SaptRishi",
        started_at:"",
        amount:"",
        players:[],
        box:""
      },
      {
        type:"Navgrah",
        started_at:"",
        amount:"",
        players:[],
        box:""
      },
      {
        type:"Nakzastra",
        started_at:"",
        amount:"",
        players:[],
        box:""
      }
    ],


    winers:[]
  



  },
  reducers:{
    getGames:(id)=>{
      id
    },
    openGamesCreatePanel:(state:any)=>{
      state.state=true;
      state.create_news_panel= true;
    },
    closeGamesCreatePanel:(state:any)=>{
      state.state=true;
      state.create_news_panel= false;
    },
    openGamesEditPanel:(state:any,action:any)=>{
      state.state=true;
      state.edit_new_panel= true;
      state.new_edit=action.payload
    },
    closeGamesEditPanel:(state:any)=>{
      state.state=true;
      state.edit_new_panel= false;
      state.news_draft={
        title:"",
        description:"",
        category:"",
        type:"",
        image:"",
        icon:"",
        emoji:"",
        action:{}
      }

    },
    setGames:(state,action)=>{
      state.state=true;

    },
    editGames:(state,action)=>{
      state.state=true;

    },
    createGamesDraft:(state,action)=>{
      state.state=true;

    },
    postGamesDraft:(state,action)=>{
      state.state=true;

    },
  }
})

export const {getGames, createGamesDraft,postGamesDraft,openGamesCreatePanel,openGamesEditPanel,closeGamesEditPanel,closeGamesCreatePanel
  }=gameSlice.actions

export const selectGamessState=(earth:any)=>earth?.news?.state
export const selectGamess=(earth:any)=>earth?.news?.news



export default gameSlice.reducer



// कलाया	f.	kalAyA	speciesofdUrvA-grass	
// 


// Your results for species:
// जाति	f.	jAti	species	BV
// जात	n.	jAta	species	
// बब्बूलजाति	f.	babbUlajAti	Acaciaspecies[Bot.]
// type of news 
// title 
// content
// source
// pin
// images[]
// videos[]
// comments
// posts_stats

// happy_news 
// achievers_club_asia
// collection -> on localhost -> poll hourly at localhost 
// create feed with source info 
// local 
// pin based news 
// news origin 
// district // pin // area // city // state // country // continent // planet // world
// ISRO : moon news // mars news // earth news 
// non algo interaction based honest list
// featured case

// collector
// district collection


// get latest news
// /api/collect/news/imdb/latest
// /api/collect/news/bollywoodhungama
// /api/collect/news/weekepidia
// 

// 
// /api/
// 
// box office
// new film release
// new {type} release 
// poll {position} change
// 