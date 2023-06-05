import { UserRegistrationForm } from "@/form/forms/auth/RegistrationForm"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { BsEmojiWink } from "react-icons/bs"
import { useSelector } from "react-redux"
import Image from "next/image"
import { MixLinks } from "./login"
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
    <Image
src="/img/om-71gQJPwz8gL._UL1500_2000x.png"
alt="logo"
width={100}
height={100}
className="w-48 p-2 m-auto mt-4 -mb-12"
    />
  
<UserRegistrationForm/>

<MixLinks/>  
  </div>
}

export default Register


// Some recent entries:
// निरङ्ग-विपत्र	n.	niraGga-vipatra	blankbill[Com.]	
// कौमार	adj.	kaumAra	virgin[anat.]	
// निक्षिपति{नि- क्षिप्}	verb 6	nikSipati[ni- kSip]	deliver[goods]	
// तापन	n.	tApana	bath[Chem. for regulating temperature]	
// अयंकस्यअश्वः?	sent.	ayaMkasyaazvaH?	Whosehorseisthis?	
