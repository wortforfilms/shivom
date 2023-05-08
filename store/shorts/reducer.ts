import {
  CREATE_SHORT,
  CREATE_SHORT_FAILURE,
  CREATE_SHORT_SUCCESS,
  UPDATE_SHORT,
  UPDATE_SHORT_FAILURE,
  UPDATE_SHORT_SUCCESS,
} from "./type";

export type ShortState = {
  short_on_screen: {
    type:string
    data:string
  };
  
  shorts:[]
  loading: boolean;
  error: object;
};

export const shortState: ShortState = {
  short_on_screen: {
    type:"",
    data:""
  },

  shorts:[],
  loading: false,
  error: {},
};

export const shortReducer = (state = shortState, action:any) => {
  switch (action.type) {
    case CREATE_SHORT:
      return {
        ...state,
        loading: true,
      };
    case CREATE_SHORT_SUCCESS:
      return {
        ...state,
        loading: false,
        short: action.short,
      };
    case CREATE_SHORT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case UPDATE_SHORT:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_SHORT_SUCCESS:
      return {
        ...state,
        loading: false,
        short: action.short,
      };
    case UPDATE_SHORT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
