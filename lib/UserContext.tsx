import { createContext } from 'react'

const ctx ={
    signOut:()=>{}, 
    user:{
      email:"",
      id:0
    }, 
    authLoaded:false,
    userRoles:[]
}
const UserContext = createContext(ctx)

export default UserContext
