import { UserRegistrationForm } from "@/form/forms/auth/RegistrationForm"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useSelector } from "react-redux"

const Register =(props:any)=>{

  const {initialReduxState}=props
  const earth:typeof initialReduxState=useSelector(state=>state)
  const router=useRouter()
  useEffect(() => {
    let mount=true
    if(mount){
      if(!earth?.auth?.authenticated){
        return
      } else{
        router.back()
      }
    }
  
    return () => {
      mount=false
    }
  }, [earth?.auth])
  

  return <div className="p-4 max-w-2xl m-auto">
    <div className="h-8"></div>

  
<UserRegistrationForm/>


  
  </div>
}

export default Register