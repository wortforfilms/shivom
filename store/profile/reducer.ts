import {
  CREATE_PROFILE,
  CREATE_PROFILE_FAILURE,
  CREATE_PROFILE_SUCCESS,
  RESET_PROFILE,
  UPDATE_PROFILE,
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_SUCCESS,
} from "./type";

export type ProfileState = {
  profile: {
    first_name: string;
    adhar:string;
    last_name: string;
    middle_name: string;
    gender: string;
    roles: string[];
    phone: string;
    date_of_birth: string;
    image:string,
    biomed:boolean
  };
  loading: boolean;
  error: object;
};

export const profileState: ProfileState = {
  profile: {
    first_name: "",
    last_name: "",
    middle_name: "",
    adhar:"",
    gender: "",
    roles: [],
    phone: "",
    date_of_birth: "19979/01/14",
    image:"",
    biomed:false
  },
  loading: false,
  error: {},
};

export const profileReducer = (state = profileState, action:any) => {
  switch (action.type) {
    case CREATE_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case CREATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: action.profile,
      };
    case CREATE_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case UPDATE_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: action.profile,
      };
    case UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
      case RESET_PROFILE:
        return {
          ...state,
          profile: {}
        };

    default:
      return state;
  }
};
