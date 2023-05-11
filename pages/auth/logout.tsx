// import { TitleCard } from '@/display/card/TitleCard'
import { signout } from '@/store/auth/action'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { LinkButton } from '../advertise'
import { reset_profile } from '@/store/profile/action'
import { reset_subscription } from '@/store/subscription/action'
import { reset_projects } from '@/store/project/action'
import { reset_wallet } from '@/store/wallet/action'

const LogOut = (props:any) => {
  const {initialReduxState}=props
  const earth:typeof initialReduxState=useSelector(state=>state)
const dispatch=useDispatch()
  useEffect(() => {
    let mount=true
  if(mount){
    fetch('/api/auth/logout',{method:"POST"})
    dispatch(signout({}))
    dispatch(reset_profile())
    dispatch(reset_subscription())
    dispatch(reset_projects())
    dispatch(reset_wallet())
  }
    return () => {
      mount=false
    }
  }, [])
  
  return (
    <div className='m-auto w-full p-4'>     
      {/* <TitleCard
      heading="Successfully logged out!!!"
      description="Thankyou for using The Line Producer.. Keep creating.."
      />
      <LinkButton text="Goto Home" link="/"/> */}
      </div>
  )
}

export default LogOut