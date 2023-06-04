import { supabase } from "@/lib/Store"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const feed_string=async(string:any,language:any)=>{
  const {data,error}= await supabase.from('अमृत').select('*').insert([{
string:string,
language:language
  }])
}

const Adead=()=>{

  const router=useRouter()
  const {string}=router.query

  const [mrut,setMrut]=useState<any>(null)

  useEffect(() => {
    let mount=true
    if(mount){
      // detect string properties
      // language type
      // ...[]9(ª·)º‚
      // 
      // find string existance in amrut
      // set if found
      // create entry if not found
      // set created 
    }
  
    return () => {
      mount=false
    }
  }, [string])
  
  return <div className="flex flex-row gap-2">
    <div>
    <div>{mrut.string}</div>
    <div>{mrut.description}</div>
    </div>
    <div>
      <textarea placeholder="Enter feed"/>
      <div className="bg-pink-500 p-2 rounded-lg">Enter</div>
    </div>
  </div>
}

export default Adead



// तरण	n.	taraNa	swimming[sport]	
// शववाहन	n.	zavavAhana	gurney[amer.]	
// वङ्ग	m.	vaGga	Bengal[Geogr.]	
// तलायति{तलाय}	verb denom.	talAyati[talAya]	sole[a shoe]	
// परस्परोपकार	m.	parasparopakAra	alliance[mil.]	
