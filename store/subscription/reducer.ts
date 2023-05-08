import { CREATE_COMPANY, CREATE_COMPANY_FAILURE, CREATE_COMPANY_SUCCESS, GET_SUBSCRIPTIONS, GET_SUBSCRIPTIONS_FAILURE, GET_SUBSCRIPTIONS_SUCCESS, 
    RESET_SUBSCRIPTION, 
    SET_SUBSCRIPTIONS, SET_SUBSCRIPTIONS_FAILURE, SET_SUBSCRIPTIONS_SUCCESS, 
    UPDATE_CASTBOX_SUBSCRIPTIONS, UPDATE_CASTBOX_SUBSCRIPTIONS_FAILURE, 
    UPDATE_CASTBOX_SUBSCRIPTIONS_SUCCESS, UPDATE_COINBOX_SUBSCRIPTIONS, UPDATE_COINBOX_SUBSCRIPTIONS_FAILURE, 
    UPDATE_COINBOX_SUBSCRIPTIONS_SUCCESS, UPDATE_COMPANY, UPDATE_COMPANY_FAILURE, UPDATE_COMPANY_SUCCESS, UPDATE_CREWBOX_SUBSCRIPTIONS, UPDATE_CREWBOX_SUBSCRIPTIONS_FAILURE, 
    UPDATE_CREWBOX_SUBSCRIPTIONS_SUCCESS, UPDATE_FILMBOX_SUBSCRIPTIONS, UPDATE_FILMBOX_SUBSCRIPTIONS_FAILURE, 
    UPDATE_FILMBOX_SUBSCRIPTIONS_SUCCESS, UPDATE_HODBOX_SUBSCRIPTIONS, UPDATE_HODBOX_SUBSCRIPTIONS_FAILURE,  UPDATE_HODBOX_SUBSCRIPTIONS_SUCCESS,
    UPDATE_LPBOX_SUBSCRIPTIONS, UPDATE_LPBOX_SUBSCRIPTIONS_FAILURE, UPDATE_LPBOX_SUBSCRIPTIONS_SUCCESS

} from "./type";

export type SubscriptionState = {
  company:{

  },
      castbox:{
      label:string,
        active: boolean,
        step:string,
        subscription_type: string,
        active_till: string,
        payment_id:string
      },
      crewbox:{
      label:string,
      step:string,

        active: false,
        subscription_type: string,
        active_till: string,
        payment_id:string,
        roles:[],
        renumrations:[]
      },
      filmbox:{
      label:string,
      step:string,

        active: boolean,
        subscription_type: string,
        active_till: string,
        payment_id:string
      },
      coinbox:{
        label:string,
        step:string,
        active: boolean,
        subscription_type: string,
        active_till: string,
        payment_id:string
      },
      lpbox:{
      label:string,
      step:string,

        active: boolean,
        subscription_type: string,
        active_till: string,
        payment_id:string
      },
      hodbox:{
      label:string,
      step:string,

        active: boolean,
        subscription_type: string,
        active_till: string,
        payment_id:string,
        roles:[],
        renumrations:[]
      }
    loading: boolean;
    error: object;
  };

  export const subscriptionState:SubscriptionState={
    company:{},
    castbox:{
      label:"Cast Box",
        active: false,
        step:"await init",
        subscription_type: "",
        active_till: "",
        payment_id:""
      },
      crewbox:{
      label:"Crew Box",
      step:"await init",

        active: false,
        subscription_type: "",
        active_till: "",
        payment_id:"",
        roles:[],
        renumrations:[]
      },
      filmbox:{
      label:"Film Box",
      step:"await init",

        active: false,
        subscription_type: "",
        active_till: "",
        payment_id:""
      },
      coinbox:{
      label:"Coin Box",
      step:"await init",

        active: false,
        subscription_type: "",
        active_till: "",
        payment_id:""
      },
      lpbox:{
      label:"Lp Box",
      step:"await init",

        active: false,
        subscription_type: "",
        active_till: "",
        payment_id:""
      },
      hodbox:{
      label:"HOD Box",
      step:"await init",

        active: false,
        subscription_type: "",
        active_till: "",
        payment_id:"",
        roles:[],
        renumrations:[]
      },
    loading: false,
    error: {}
  }

  export const subscriptionReducer = (state = subscriptionState, action:any) => {
    switch (action.type) {
      case GET_SUBSCRIPTIONS:
        return {
          ...state,
          loading: true,
        };
      case GET_SUBSCRIPTIONS_SUCCESS:
        return {
          ...state,
          loading: false,
          ...action.subscriptions
        };
      case GET_SUBSCRIPTIONS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
        
        case SET_SUBSCRIPTIONS:
            return {
              ...state,
              loading: true,
            };
          case SET_SUBSCRIPTIONS_SUCCESS:
            // console.log(action,'--------->track subs')
            return {
              ...state,
              loading: false,
              ...action.subscriptions

            };
          case SET_SUBSCRIPTIONS_FAILURE:
            return {
              ...state,
              loading: false,
              error: action.error,
            };
            
            case GET_SUBSCRIPTIONS:
                return {
                  ...state,
                  loading: true,
                };
              case GET_SUBSCRIPTIONS_SUCCESS:
                return {
                  ...state,
                  loading: false,
                  ...action.subscriptions

                };
              case GET_SUBSCRIPTIONS_FAILURE:
                return {
                  ...state,
                  loading: false,
                  error: action.error,
                };
                          
            case UPDATE_FILMBOX_SUBSCRIPTIONS:
                return {
                  ...state,
                  loading: true,
                };
              case UPDATE_FILMBOX_SUBSCRIPTIONS_SUCCESS:
                return {
                  ...state,
                  loading: false,
                  filmbox: action.filmbox,
                };
              case UPDATE_FILMBOX_SUBSCRIPTIONS_FAILURE:
                return {
                  ...state,
                  loading: false,
                  error: action.error,
                };

            case UPDATE_CASTBOX_SUBSCRIPTIONS:
                return {
                  ...state,
                  loading: true,
                };
              case UPDATE_CASTBOX_SUBSCRIPTIONS_SUCCESS:
                return {
                  ...state,
                  loading: false,
                  castbox: action.castbox,
                };
              case UPDATE_CASTBOX_SUBSCRIPTIONS_FAILURE:
                return {
                  ...state,
                  loading: false,
                  error: action.error,
                };
    
                case UPDATE_CREWBOX_SUBSCRIPTIONS:
                    return {
                      ...state,
                      loading: true,
                    };
                  case UPDATE_CREWBOX_SUBSCRIPTIONS_SUCCESS:
                    return {
                      ...state,
                      loading: false,
                      crewbox: action.crewbox,
                    };
                  case UPDATE_CREWBOX_SUBSCRIPTIONS_FAILURE:
                    return {
                      ...state,
                      loading: false,
                      error: action.error,
                    };
        
                    case UPDATE_HODBOX_SUBSCRIPTIONS:
                        return {
                          ...state,
                          loading: true,
                        };
                      case UPDATE_HODBOX_SUBSCRIPTIONS_SUCCESS:
                        return {
                          ...state,
                          loading: false,
                          hodbox: action.hodbox,
                        };
                      case UPDATE_HODBOX_SUBSCRIPTIONS_FAILURE:
                        return {
                          ...state,
                          loading: false,
                          error: action.error,
                        };
            
                        case UPDATE_LPBOX_SUBSCRIPTIONS:
                            return {
                              ...state,
                              loading: true,
                            };
                          case UPDATE_LPBOX_SUBSCRIPTIONS_SUCCESS:
                            return {
                              ...state,
                              loading: false,
                              lpbox: action.lpbox,
                            };
                          case UPDATE_LPBOX_SUBSCRIPTIONS_FAILURE:
                            return {
                              ...state,
                              loading: false,
                              error: action.error,
                            };
                
                            case UPDATE_COINBOX_SUBSCRIPTIONS:
                                return {
                                  ...state,
                                  loading: true,
                                };
                              case UPDATE_COINBOX_SUBSCRIPTIONS_SUCCESS:
                                return {
                                  ...state,
                                  loading: false,
                                  coinbox: action.coinbox,
                                };
                              case UPDATE_COINBOX_SUBSCRIPTIONS_FAILURE:
                                return {
                                  ...state,
                                  loading: false,
                                  error: action.error,
                                };

                                case CREATE_COMPANY:
                                  return {
                                    ...state,
                                    loading:true
                                  }
                                  case CREATE_COMPANY_SUCCESS:
                                  return {
                                    ...state,
                                    company:action.company,
                                    loading:false
                                  }
                                  case CREATE_COMPANY_FAILURE:
                                    return {
                                      ...state,
                                      error:action.error,
                                      loading:false
                                    }
                                    case UPDATE_COMPANY:
                                      return {
                                        ...state,
                                        loading:true
                                      }
                                      case UPDATE_COMPANY_SUCCESS:
                                      return {
                                        ...state,
                                        company:action.company,
                                        loading:false
                                      }
                                      case UPDATE_COMPANY_FAILURE:
                                        return {
                                          ...state,
                                          error:action.error,
                                          loading:false
                                        }
                                  case RESET_SUBSCRIPTION:
                                    return {...subscriptionState}
                            
                          
                            default:
        return state;
    }
  };