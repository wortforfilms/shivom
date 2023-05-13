import passport from 'passport'
import nextConnect from 'next-connect'
import { localStrategy } from '@/lib/auth/passport-local'
import { setLoginSession } from '@/lib/auth/auth'
import { findUserFromAuth } from "@/lib/auth/action/findUserFromAuth"

export const authenticate = (method:any, req:any, res:any) =>
  new Promise((resolve, reject) => {
    passport.authenticate(method, { session: false }, (error, token) => {
      if (error) {
        console.log("issue====>", error)
        reject(error)
      } else {
        resolve(token)
      }
    })(req, res)
  })

passport.use(localStrategy)

export default nextConnect()
  .use(passport.initialize())
  .post(async (req:any, res:any) => {
    try {
      const user:any = await authenticate('local', req, res)
      const session = { ...user }
      await setLoginSession(res, session)

      const u = await findUserFromAuth(session.user[0].username)
      res.status(200).send({ done: true, user:u })
    } catch (error:any) {
      console.error(error)
      res.status(401).send(error.message)
    }
  })