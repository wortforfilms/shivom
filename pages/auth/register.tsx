import { UserRegistrationForm } from "@/form/forms/auth/RegistrationForm"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { BsEmojiWink } from "react-icons/bs"
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

Nome
      -form-input-schema-fields-type
    Logy
      -mediA_@media
      <input type="search" placeholder="Ask!!"/>
      I and my shadows
      -__U ¨¨u\|» {<BsEmojiWink/>} 

      "User Shadows :: Rahu Ketu"<br/>
      // concern -medical
      // detected::predicted::probable::
      // cure:: food _{"asv"}
      // G V
      
       physical financial intelectual social
// get   
  </div>
}

export default Register


// Some recent entries:
// निरङ्ग-विपत्र	n.	niraGga-vipatra	blankbill[Com.]	
// कौमार	adj.	kaumAra	virgin[anat.]	
// निक्षिपति{नि- क्षिप्}	verb 6	nikSipati[ni- kSip]	deliver[goods]	
// तापन	n.	tApana	bath[Chem. for regulating temperature]	
// अयंकस्यअश्वः?	sent.	ayaMkasyaazvaH?	Whosehorseisthis?	
