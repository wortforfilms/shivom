
import {CREATE_PROJECT_INFO, CREATE_PROJECT_SCRIPT
,CREATE_PROJECT_SCRIPT_FAILURE, CREATE_PROJECT_SCRIPT_SUCCESS, CREATE_PROJECT_INFO_SUCCESS, CREATE_PROJECT_INFO_FAILURE,

CREATE_PROJECT_POSTER, CREATE_PROJECT_POSTER_SUCCESS, CREATE_PROJECT_POSTER_FAILURE, CREATE_PROJECT, CREATE_PROJECT_SUCCESS, CREATE_PROJECT_FAILURE, SET_USER_PROJECTS, SET_USER_PROJECTS_SUCCESS, SET_USER_PROJECTS_FAILURE, RESET_PROJECTS

} from './type'

import {UPDATE_PROJECT_INFO, UPDATE_PROJECT_SCRIPT
  ,UPDATE_PROJECT_SCRIPT_FAILURE, UPDATE_PROJECT_SCRIPT_SUCCESS, UPDATE_PROJECT_INFO_SUCCESS, UPDATE_PROJECT_INFO_FAILURE,
  
  UPDATE_PROJECT_POSTER, UPDATE_PROJECT_POSTER_SUCCESS, UPDATE_PROJECT_POSTER_FAILURE, UPDATE_PROJECT, UPDATE_PROJECT_SUCCESS, UPDATE_PROJECT_FAILURE
  
  } from './type'

  import {REMOVE_PROJECT_INFO, REMOVE_PROJECT_SCRIPT
    ,REMOVE_PROJECT_SCRIPT_FAILURE, REMOVE_PROJECT_SCRIPT_SUCCESS, REMOVE_PROJECT_INFO_SUCCESS, REMOVE_PROJECT_INFO_FAILURE,
    
    REMOVE_PROJECT_POSTER, REMOVE_PROJECT_POSTER_SUCCESS, REMOVE_PROJECT_POSTER_FAILURE, REMOVE_PROJECT, REMOVE_PROJECT_SUCCESS, REMOVE_PROJECT_FAILURE
    
    } from './type'

export const set_user_projects=(projects: any)=>{
      return {
        type: SET_USER_PROJECTS,
        projects
      }
    }
    
export const set_user_projects_success=(projects: any)=>{
      return {
        type: SET_USER_PROJECTS_SUCCESS,
        projects
      }
    }
    
export const set_user_projects_failure=(error:any)=>{
      return {
        type: SET_USER_PROJECTS_FAILURE,
        error
      }
    }


export const create_project=(project: any)=>{
  return {
    type: CREATE_PROJECT,
    project
  }
}

export const create_project_success=(project: any)=>{
  return {
    type: CREATE_PROJECT_SUCCESS,
    project
  }
}

export const create_project_failure=(error:any)=>{
  return {
    type: CREATE_PROJECT_FAILURE,
    error
  }
}

export const create_project_script=(project_script: any)=>{
  return {
    type: CREATE_PROJECT_SCRIPT,
    project_script
  }
}

export const create_project_script_success=(project_script: any)=>{
  return {
    type: CREATE_PROJECT_SCRIPT_SUCCESS,
    project_script
  }
}

export const create_project_script_failure=(error:any)=>{
  return {
    type: CREATE_PROJECT_SCRIPT_FAILURE,
    error
  }
}

export const create_project_info=(project_info: any)=>{
  return {
    type: CREATE_PROJECT_INFO,
    project_info
  }
}

export const create_project_info_success=(project_info: any)=>{
  return {
    type: CREATE_PROJECT_INFO_SUCCESS,
    project_info
  }
}

export const create_project_info_failure=(error:any)=>{
  return {
    type: CREATE_PROJECT_INFO_FAILURE,
    error
  }
}

export const create_project_poster=(project_poster: any)=>{
  return {
    type: CREATE_PROJECT_POSTER,
    project_poster
  }
}

export const create_project_poster_success=(project_poster: any)=>{
  return {
    type: CREATE_PROJECT_POSTER_SUCCESS,
    project_poster
  }
}

export const create_project_poster_failure=(error:any)=>{
  return {
    type: CREATE_PROJECT_POSTER_FAILURE,
    error
  }
}

export const update_project=(project: any)=>{
  return {
    type: UPDATE_PROJECT,
    project
  }
}

export const update_project_success=(project: any)=>{
  return {
    type: UPDATE_PROJECT_SUCCESS,
    project
  }
}

export const update_project_failure=(error:any)=>{
  return {
    type: UPDATE_PROJECT_FAILURE,
    error
  }
}

export const update_project_script=(project_script: any)=>{
  return {
    type: UPDATE_PROJECT_SCRIPT,
    project_script
  }
}

export const update_project_script_success=(project_script: any)=>{
  return {
    type: UPDATE_PROJECT_SCRIPT_SUCCESS,
    project_script
  }
}

export const update_project_script_failure=(error:any)=>{
  return {
    type: UPDATE_PROJECT_SCRIPT_FAILURE,
    error
  }
}

export const update_project_info=(project_info: any)=>{
  return {
    type: UPDATE_PROJECT_INFO,
    project_info
  }
}

export const update_project_info_success=(project_info: any)=>{
  return {
    type: UPDATE_PROJECT_INFO_SUCCESS,
    project_info
  }
}

export const update_project_info_failure=(error:any)=>{
  return {
    type: UPDATE_PROJECT_INFO_FAILURE,
    error
  }
}

export const update_project_poster=(project_poster: any)=>{
  return {
    type: UPDATE_PROJECT_POSTER,
    project_poster
  }
}

export const update_project_poster_success=(project_poster: any)=>{
  return {
    type: UPDATE_PROJECT_POSTER_SUCCESS,
    project_poster
  }
}

export const update_project_poster_failure=(error:any)=>{
  return {
    type: UPDATE_PROJECT_POSTER_FAILURE,
    error
  }
}


export const remove_project=(project: any)=>{
  return {
    type: REMOVE_PROJECT,
    project
  }
}

export const remove_project_success=(project: any)=>{
  return {
    type: REMOVE_PROJECT_SUCCESS,
    project
  }
}

export const remove_project_failure=(error:any)=>{
  return {
    type: REMOVE_PROJECT_FAILURE,
    error
  }
}

export const remove_project_script=(project_script: any)=>{
  return {
    type: REMOVE_PROJECT_SCRIPT,
    project_script
  }
}

export const remove_project_script_success=(project_script: any)=>{
  return {
    type: REMOVE_PROJECT_SCRIPT_SUCCESS,
    project_script
  }
}

export const remove_project_script_failure=(error:any)=>{
  return {
    type: REMOVE_PROJECT_SCRIPT_FAILURE,
    error
  }
}

export const remove_project_info=(project_info: any)=>{
  return {
    type: REMOVE_PROJECT_INFO,
    project_info
  }
}

export const remove_project_info_success=(project_info: any)=>{
  return {
    type: REMOVE_PROJECT_INFO_SUCCESS,
    project_info
  }
}

export const remove_project_info_failure=(error:any)=>{
  return {
    type: REMOVE_PROJECT_INFO_FAILURE,
    error
  }
}

export const remove_project_poster=(project_poster: any)=>{
  return {
    type: REMOVE_PROJECT_POSTER,
    project_poster
  }
}

export const remove_project_poster_success=(project_poster: any)=>{
  return {
    type: REMOVE_PROJECT_POSTER_SUCCESS,
    project_poster
  }
}

export const remove_project_poster_failure=(error:any)=>{
  return {
    type: REMOVE_PROJECT_POSTER_FAILURE,
    error
  }
}

export const reset_projects=()=>{
  return {
    type: RESET_PROJECTS
  }
}