
import {
  CREATE_PROJECT_INFO, CREATE_PROJECT_SCRIPT
  , CREATE_PROJECT_SCRIPT_FAILURE, CREATE_PROJECT_SCRIPT_SUCCESS, CREATE_PROJECT_INFO_SUCCESS, CREATE_PROJECT_INFO_FAILURE,

  CREATE_PROJECT_POSTER, CREATE_PROJECT_POSTER_SUCCESS, CREATE_PROJECT_POSTER_FAILURE, CREATE_PROJECT, CREATE_PROJECT_SUCCESS, CREATE_PROJECT_FAILURE, SET_USER_PROJECTS, SET_USER_PROJECTS_SUCCESS, SET_USER_PROJECTS_FAILURE, RESET_PROJECTS

} from './type'

import {
  UPDATE_PROJECT_INFO, UPDATE_PROJECT_SCRIPT
  , UPDATE_PROJECT_SCRIPT_FAILURE, UPDATE_PROJECT_SCRIPT_SUCCESS, UPDATE_PROJECT_INFO_SUCCESS, UPDATE_PROJECT_INFO_FAILURE,

  UPDATE_PROJECT_POSTER, UPDATE_PROJECT_POSTER_SUCCESS, UPDATE_PROJECT_POSTER_FAILURE, UPDATE_PROJECT, UPDATE_PROJECT_SUCCESS, UPDATE_PROJECT_FAILURE

} from './type'




export type ProjectState = {
  project_on_screen: {
    type: string
    data: string
    info: {},
    poster: string
  };

  projects: []
  loading: boolean;
  error: object;
};

export const projectState: ProjectState = {
  project_on_screen: {
    type: "",
    data: "",

    info: {},
    poster: ""
  },

  projects: [],
  loading: false,
  error: {},
};



export const projectReducer = (state = projectState, action: any) => {
  switch (action.type) {
    case CREATE_PROJECT:
      return {
        ...state,
        loading: true,
      };
    case CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: action.projects,
      };
    case CREATE_PROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

case SET_USER_PROJECTS:
  return {
    ...state,
    loading:true
  }

  case SET_USER_PROJECTS_SUCCESS:
  return {
    ...state,
    projects: action.projects,
    loading:false
  }

  case SET_USER_PROJECTS_FAILURE:
    return {
      ...state,
      error: action.error,
      loading:false
    }

    case UPDATE_PROJECT:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        project_on_screen: action.project,
      };
    case UPDATE_PROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case CREATE_PROJECT_INFO:
      return {
        ...state,
        loading: true,
      };
    case CREATE_PROJECT_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        project_on_screen: { ...state.project_on_screen, info: action.project_info }
      };
    case CREATE_PROJECT_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case UPDATE_PROJECT_INFO:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PROJECT_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        project_on_screen: { ...state.project_on_screen, info: action.project_info }

      };
    case UPDATE_PROJECT_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case CREATE_PROJECT_SCRIPT:
      return {
        ...state,
        loading: true,
      };
    case CREATE_PROJECT_SCRIPT_SUCCESS:
      return {
        ...state,
        loading: false,
        project_on_screen: { ...state.project_on_screen, data: action.project_script }

      };
    case CREATE_PROJECT_SCRIPT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case UPDATE_PROJECT_SCRIPT:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PROJECT_SCRIPT_SUCCESS:
      return {
        ...state,
        loading: false,
        project_on_screen: { ...state.project_on_screen, data: action.project_script }

      };
    case UPDATE_PROJECT_SCRIPT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case CREATE_PROJECT_POSTER:
      return {
        ...state,
        loading: true,
      };
    case CREATE_PROJECT_POSTER_SUCCESS:
      return {
        ...state,
        loading: false,
        project_on_screen: { ...state.project_on_screen, poster: action.project_poster }

      };
    case CREATE_PROJECT_POSTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case UPDATE_PROJECT_POSTER:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PROJECT_POSTER_SUCCESS:
      return {
        ...state,
        loading: false,
        project_on_screen: { ...state.project_on_screen, poster: action.project_poster }

      };
    case UPDATE_PROJECT_POSTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

      case RESET_PROJECTS:
        return {
          ...projectState
        }

    default:
      return state;
  }
};