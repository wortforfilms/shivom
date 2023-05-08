


// first origin 
// payment
// gift
// earned 

import { REFILL_WALLET, REFILL_WALLET_SUCCESS, REFILL_WALLET_FAILURE, FIRST_INIT_WALLET, FIRST_INIT_WALLET_FAILURE, FIRST_INIT_WALLET_SUCCESS, GET_WALLET, GET_WALLET_FAILURE, GET_WALLET_SUCCESS, RESET_WALLET } from "./type"

// 
export type WalletState = {
  wallet:[
    {
      token:string,
      via:string,
      origin:number,
      status:[]
    }
  ],
  active:[],
  consumed:[],
  payments:[]
  loading: Boolean,
  error: Object
}

export const walletState:WalletState={
wallet:[
  {
     token:"",
      via:"",
      origin:0,
      status:[]
  }
],
active:[],
consumed:[],
payments:[],
loading: false,
error: {}
}

export const _walletReducer=(state=walletState,action:any)=>{
  switch(action.type){

        case FIRST_INIT_WALLET:
      return {
        ...state,
        loading: true
      }
      case FIRST_INIT_WALLET_SUCCESS:
        return {
          ...state,
          loading: false,
          wallet: action.wallet
        }   

        case FIRST_INIT_WALLET_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.error
          };

    case REFILL_WALLET:
      return {
        ...state,
        loading: true
      }
      case REFILL_WALLET_SUCCESS:
        return {
          ...state,
          loading: false,
          wallet: action.wallet
        }   

        case REFILL_WALLET_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.error
          };
              case GET_WALLET:
      return {
        ...state,
        loading: true
      }
      case GET_WALLET_SUCCESS:
        return {
          ...state,
          loading: false,
          wallet: action.wallet
        }   

        case GET_WALLET_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.error
          };

          case RESET_WALLET:
            return {
              ...walletState
            }

        default:
        return state;
  }
}