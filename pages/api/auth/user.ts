import { getLoginSession } from '../../../lib/auth/auth'
import { findUser } from "@/lib/auth/action/findUser"

export default async function user(req:any, res:any) {
  try {
    const session = await getLoginSession(req)

    console.log("sessionn",session)
    const user = await (session && (await findUser(session))) ?? null

    res.status(200).json({ user })
  } catch (error) {
    console.error(error)
    res.status(500).end('Authentication token is invalid, please log in')
  }
}