import { useState } from "react"

const Device=(props:any)=>{
  
  const {initialReduxState}=props
  const earth:typeof initialReduxState=useState()


  return <div>
    Device: {"ADDG"} 

  </div>
}

export default Device