import {
  AUTHENTICATE,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  SIGNOUT,
  SIGNOUT_FAILURE,
  SIGNOUT_SUCCESS,
  UPDATE_USER_PROFILED_STATUS,
  UPDATE_USER_PROFILED_STATUS_FAILURE,
  UPDATE_USER_PROFILED_STATUS_SUCCESS,
} from './type';

export const authState: AuthState = {
  user: {},
  authenticated: false,
  accessToken: '',
  sessionToken: '',
  loading: false,
  error: '',
  resetRequestSuccess: false,
  expiredToken: false,
};

export type AuthState = {
  user: object;
  authenticated: boolean;
  accessToken: string;
  sessionToken: string;
  error: string;
  loading: boolean;
  resetRequestSuccess: boolean;
  expiredToken: boolean;
};

export const authReducer = (state = authState, action:any) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        authenticated: true,
        accessToken: action.accessToken,
        user: action.user,
      };

    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

      case AUTHENTICATE:
        return {
          ...state,
          loading: false,
          authenticated: true,
          accessToken: action.access_token,
          user: action.user,

        }

    case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      // console.log(action,'check')
      return {
        ...state,
        loading: false,
        authenticated:true,
        sessionToken: action.sessionToken,
        user: action.user,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

      case SIGNOUT:
        return {
          ...state,
          loading: true,
        };
      case SIGNOUT_SUCCESS:
        // console.log(action,'check')
        return {
          ...state,
          loading: false,
          user:"",
          sessionToken:"",
          authenticated:false,
        };
      case SIGNOUT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };

        case UPDATE_USER_PROFILED_STATUS:
          return {
            ...state,
            loading: true,
          };
        case UPDATE_USER_PROFILED_STATUS_SUCCESS:
          // console.log(action,'check')
          return {
            ...state,
            loading: false,
            authenticated:true,
            user: {...state.user, profiled: true},
          };
        case UPDATE_USER_PROFILED_STATUS_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.error,
          };

    default:
      return state;
  }
};
