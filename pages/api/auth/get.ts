import { getLoginSession } from '../../../lib/auth/auth'
import { findUserFromAuth } from "@/lib/auth/action/findUserFromAuth"


export default async function user(req:any, res:any) {
  console.log(
    req.cookies,'---req', req.headers?.cookie
  )
  try {
    if(req.cookies && req.headers?.cookie){

      const session = await getLoginSession(req)

        if(session && session.meessage!=="no user found"){
          
          const una=session.user[0].username
          if(session.user[0].username){
            
            
            const user = (session && (await findUserFromAuth(una))) ?? null
            
            return res.status(200).json({ user })
          }
      }
} else {
  return res.status(207).json({ message:"Welcome guest user!! You need to login to unlock all features. 🚀 " })

}
  } catch (error) {
    return  res.status(500).end('Authentication token giving error, please refresh to resolve. 🚀')
  }
}