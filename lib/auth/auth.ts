import Iron from '@hapi/iron'
// import { errorT } from '../../components/forms/auth/Register'
import { MAX_AGE, setTokenCookie, getTokenCookie } from './auth-cookies'
// import { errorT } from '@/display/toast'
// import { errorT } from '@/display/toast'


const TOKEN_SECRET = process.env.TOKEN_SECRET

export async function setLoginSession(res:any, session:any) {
  try {
    const createdAt = Date.now()
    console.log("setting session->")
  
    // Create a session object with a max age that we can validate later
    const obj = { ...session, createdAt, maxAge: MAX_AGE }
    if(TOKEN_SECRET){
  
      const token = await Iron.seal(obj, TOKEN_SECRET, Iron.defaults)
      
      setTokenCookie(res, token)
    }
  } catch (error) {
    // errorT(`${error}`)
    console.log("error",error)
  }

}

export async function getLoginSession(req:any) {

  try {
    console.log("getting session->")
    const token = getTokenCookie(req)
  
    if (!token) return {message: "no user found"}
  
    if(TOKEN_SECRET){
  
      const session = await Iron.unseal(token, TOKEN_SECRET, Iron.defaults)
      const expiresAt = session.createdAt + session.maxAge * 1000
      // console.log('-----> get session lib',session)
      // Validate the expiration date of the session
      if (Date.now() > expiresAt) {
        // errorT("Session Expired")
        console.log('session expired')
        // throw new Error('Session expired')
      }
      
      return session
    }
  } catch (error) {
    // errorT(error)
    console.log('session error',error)

  }




}