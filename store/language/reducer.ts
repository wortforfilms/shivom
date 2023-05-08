import {
  CREATE_LANGUAGE,
  CREATE_LANGUAGE_FAILURE,
  CREATE_LANGUAGE_SUCCESS,
  SELECT_LANGUAGE,
  SELECT_LANGUAGE_FAILURE,
  SELECT_LANGUAGE_SUCCESS,
  UPDATE_LANGUAGE,
  UPDATE_LANGUAGE_FAILURE,
  UPDATE_LANGUAGE_SUCCESS,
} from "./type";

export type LanguageState = {
  language: {

  };
  letters:[]
  words:{
    letters:[]
  }
  sentece:{
    words:[]
  }
  data:{}
  loading: boolean;
  error: object;
};

export const languageState: LanguageState = {
  language: "",
  letters:[],
  words:{
    letters:[]
  },
  sentece:{
    words:[]
  },
  data:{},
  loading: false,
  error: {},
};

export const languageReducer = (state = languageState, action: any) => {
  switch (action.type) {
    case CREATE_LANGUAGE:
      return {
        ...state,
        loading: true,
      };
    case CREATE_LANGUAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        language: action.language,
      };
    case CREATE_LANGUAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case UPDATE_LANGUAGE:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_LANGUAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        language: action.language,
      };
    case UPDATE_LANGUAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };


    case SELECT_LANGUAGE:
      return {
        ...state,
        loading: true,
      };
    case SELECT_LANGUAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        language: action.language,
        data: action.data
      };
    case SELECT_LANGUAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };



    
    default:
      return state;
  }
};