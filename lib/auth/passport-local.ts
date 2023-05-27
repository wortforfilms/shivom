import Local from 'passport-local'
import { validatePassword } from "./action/validatePassword"
import { findUserForAuth } from "./action/findUserForAuth"


export const localStrategy = new Local.Strategy(function (
  username:any,
  password:any,
  done:any
) {
  console.log("first")
  findUserForAuth(username )
    .then((user:any) => {
      console.log(user,'------>y')
      if (user && validatePassword(user, password)) {
        done(null, user)
      } else {
        done(new Error('Invalid username and password combination'))
      }
    })
    .catch((error) => {
      console.log("first error trace")
      done(error)
    })
})