import { supabase } from "@/lib/Store"
import { useEffect, useState } from "react"
import { BiBook, BiCircleQuarter } from "react-icons/bi"
import { BsTranslate } from "react-icons/bs"
import { FcCalculator, FcFeedIn } from "react-icons/fc"
import NakApp from "../galaxy/rashi"
import { errorT, notify, success } from "@/components/toast"
import { faker } from "@faker-js/faker"
import { useRouter } from "next/router"
import { languages_ } from "@/constants/earth/languages_"
import { Brahmiplate } from "@/components/classes/brahmi"
import { FaAlgolia } from "react-icons/fa"
import { shArdA } from "@/components/classes/shArdA"
import { Feeder, PostCreator, Translate } from "@/public/ras/hkd"
import { range } from "@/util/createRange"
import { GrKeyboard } from "react-icons/gr"

const communicator='@'
const restriction=[{issue:"",conndition:"",blaim:'',resolve:(git:any)=>{task:"commit before push => build before push CI/CD"}}]
// ccid->kdh
// aadhaa 
const fix=[{commits:[{issue:"",resolve:()=>{},fix:"¿?"},{},{}]}]
const  get_shabda=async()=>{
  const {data,error}=await supabase.from('अमृत').select('*').neq('type','sent.')
  return {data,error}
}

const  get_amar=async()=>{
  const {data,error}=await supabase.from('अमृत').select('*').neq('type','sent.')
  return {data,error}
}

const Ras=()=>{

const [stp,setStp]=useState<any>('')
const [mala,setMala]=useState<any>(null)
const [recent_entries,setRecentEnteries]=useState<any>(null)
// note: @smart move
// \\ ::: 
const router=useRouter()
const {st}=router.query

// shiv ling
// uqn :: 
useEffect(() => {
  let mount=true
  if(mount &&  st){
    setStp(st)
  }

  return () => {
    mount=false
  }
}, [st])


useEffect(() => {
  let mount=true
  if(mount){
    get_amar().then(res=>{
      console.log("first",res)
      setMala(res.data)
    }).catch((error)=>console.log(error))
  }

  return () => {
    mount=false
  }
}, [])

const [filters,setFilters]=useState<any>(null)

  return <div className="p-4 min-h-[90vh] h-full">
    <div className="h-12"></div>
    <div className="flex flex-row overflow-x-scroll gap-4 text-center mb-4">

    {
      [
        // {label:"Create",icon:<BiCircleQuarter/>},
        {label:"Translate",icon:<BsTranslate/>},
        {label:"Feed",icon:<FcFeedIn/>},
        {label:"AmarmAlaa",icon:<BiBook/>},
        // {label:"Algo-liå¬ˆ/* Ò dne ¿doe */",icon:<FaAlgolia/>},
        {label:"Calculator",icon:<FcCalculator/>},
        {label:"Keyboard",icon:<GrKeyboard/>}

    ].map((step,index)=>{
        return <div key={index} className={`${stp===step.label?"bg-gray-300 ":"bg-white"} p-2 cursor-pointer hover:bg-yellow-300 text-center rounded-t-lg`}
        onClick={()=>{setStp(step.label)}}
        >
        <div className="text-3xl p-1 text-center m-auto">{step.icon}</div>
          <div className="text-xs text-center">{step.label}</div>
        </div>
      })
    }
    </div>

 {stp==="Calculator" && <div className="flex flex-row">
  <Calculator/>
  </div>
  }
   {stp==="Keyboard" && <div className="flex flex-row">
  <Graph/>
  </div>
  }
  {stp==='' &&  <NakApp/>}
  {/* {stp==='' &&  <NakApp/>} */}
  {stp==='AmarmAlaa' &&  <div>
    <div className="flex flex-row gap-2 mb-2">
    {
      ['Zoo.','Bot.','Phy.','Chem.'].map((wrd,index)=>{
        return <div key={index} className="text-sm bg-gray-700 text-white shadow-lg rounded-lg p-2 "
        onClick={()=>{
          setFilters((s:any)=>s?[wrd,...s]:[wrd])

        }}
        >{wrd}</div>
      })
    }
     {'𑖀'.charCodeAt(1)}
    
    </div>
    {
      mala?.map((res:any,index:number)=>{
if(res.translitions[0].en.includes('Bot'))
        return res.translitions[0].en

      })
    }
        {
      mala?.map((res:any,index:number)=>{
if(res.translitions[0].en.includes('Bot'))
        return res.translitions[0].br

      })
    }
        {
      mala?.map((res:any,index:number)=>{
if(res.translitions[0].en.includes('['))
        return res.translations[0].en

      })
    }
    <div className="flex gap-2 flex-row  h-100 overflow-y-scroll">
    {
      mala && mala.length>0 && faker.helpers.arrayElements(mala,27).map((ma:any,index:number)=>{
        return <div key={index} className="p-2 bg-white shadow-lg w-100">
          {ma.string}--{ma.type} 
          <hr/>
          {ma.string.split('').map((i:any,index:number)=>`${Brahmiplate[i.charCodeAt(0)-2303]!==undefined?Brahmiplate[i.charCodeAt(0)-2303]:i.charCodeAt(0)<2303?i:i.charCode(0)}`)}
          <hr/>
          {ma.string.split('').map((i:any,index:number)=>`${shArdA[i.charCodeAt(0)-2303]!==undefined?shArdA[i.charCodeAt(0)-2303]:i.charCodeAt(0)<2303?i:i.charCode(0)}`)}
          <hr/>
          {ma.translitions[0].en}
          <hr/>
          {ma.translations[0].en}
          </div>
      })
    }
    </div>
    
    </div>}
  {stp==='Translate' &&  <Translate/>}
  {stp==='Feed' && <Feeder />}
  {stp==='Create' && <PostCreator/>}

  </div>
}

export default Ras

// // ->

const Calculator=()=>{
  return <div className="w-96 h-full m-auto flex flex-col bg-gray-200 p-6 shadow-lg">
    <div className="w-full bg-white h-24 p-2 mb-4"></div>
    <div className="flex flex-row">
{/* const {"Sol".charCodeAt(0)} */}
    <div className="flex flex-row-reverse flex-wrap mb-4 gap-2">

      {
        [1,2,3,4,5,6,7,8,9].map((nn,n)=>{
          return <div key={n} className="w-1/4 h-12 m-auto p-1 bg-white">{nn}</div>
        })
      }
    </div>
    <div className="flex flex-row flex-wrap mb-4 gap-2">

      {
        [0].map((nn,n)=>{
          return <div key={n} className="w-12 h-12 bg-red-400 m-auto p-1 bg-white">{nn}</div>
        })
      }
    </div>
    </div>
    {[

  [82,83,3],
  [83,101,4],
  [101,103,6],
  [103,104,6],
  [104,113,4],

 


].map((comb,index)=>{
  return  <div className="flex flex-row flex-wrap mb-4 gap-2" key={index}>

  {
    Brahmiplate.slice(comb[0],comb[1]).map((nn,n)=>{
      return <div key={n} className={`w-1/${comb[2]} text-center  h-12 m-auto p-1 bg-white`}>{nn}</div>
    })
  }
</div>
})}

    <div className="flex flex-row flex-wrap mb-4 gap-2">

{
  ['+','-','/','*','√','º','x','≈','◊','æ'].map((nn,n)=>{
    return <div key={n} className="w-12 h-12 m-auto p-1 bg-white">{nn}</div>
  })
}
</div>

  
  </div>
}

const Graph=()=>{
  return <div className="w-96 sm:w-96 flex flex-col m-auto h-full bg-gray-200 p-4 shadow-lg">


{[
  [0,6,2],
  [6,22,3],
  [22,42,6],
  [42,43,6],
  [43,48,6],
  [48,49,6],
  [49,51,6],
  [51,54,6],
  [54,55,6],
  [55,59,6],
  [59,60,6],
  [60,61,4],
  [61,62,4],
  [62,82,3],
  [82,83,3],
  [83,101,4],
  [101,103,6],
  [103,104,6],
  [104,113,4]
].map((comb,index)=>{
  return  <div className="flex flex-row flex-wrap mb-4 w-full gap-2" key={index}>

  {
    Brahmiplate.slice(comb[0],comb[1]).map((nn,n)=>{
      return <div key={n} className={`w-${(100/comb[2])}% text-center  h-12 m-auto p-1 bg-white`}>{nn}</div>
    })
  }
</div>
})}


  </div>
}

// =><≠
// 

// *  1. Page Transitions (priority)
// *  2. Page Preloader (priority)
// *  3. Structure
// *  4. Navigation Menus
// *  5. Fonts
// *  6. Forms and Buttons
// *  7. General (transitions, sections, images, reusable style classes)
// *  8. Overrides / Enhances
// *  9. Hero Section
// * 10. CTA Section V1
// * 11. Portfolio Section
// * 12. About Us Section
// * 13. Quote Section
// * 14. Services Section
// * 15. CTA Section V2
// * 16. Skills Section
// * 17. Contact Us
// * 18. Footer
// * 19. Custom Animations, Effects & Decorations
// * 20. PAGE: Portfolio Item
// * 21. PAGE: Service Item
// * 22. Media Queries
// * 23. Dark Mode Switch

