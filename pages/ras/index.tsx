import { supabase } from "@/lib/Store"
import { useEffect, useState } from "react"
import { BiBook, BiCircleQuarter } from "react-icons/bi"
import { BsTranslate } from "react-icons/bs"
import { FcFeedIn } from "react-icons/fc"
import NakApp from "../galaxy/rashi"
import { errorT, notify, success } from "@/components/toast"
import { faker } from "@faker-js/faker"
import { useRouter } from "next/router"
import { languages_ } from "@/constants/earth/languages_"
import { Brahmiplate } from "@/components/classes/brahmi"


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
const router=useRouter()
const {st}=router.query

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



  return <div className="p-4 min-h-[90vh] h-full">
    <div className="h-12"></div>
    <div className="flex flex-row gap-4 text-center mb-4">

    {
      [
        {label:"Create",icon:<BiCircleQuarter/>},
        {label:"Translate",icon:<BsTranslate/>},
        {label:"Feed",icon:<FcFeedIn/>},
        {label:"AmarmAlaa",icon:<BiBook/>}

    ].map((step,index)=>{
        return <div key={index} className={`${stp===step.label?"bg-gray-300 ":"bg-white"} p-2 cursor-pointer hover:bg-yellow-300 rounded-t-lg`}
        onClick={()=>{setStp(step.label)}}
        >
        <div className="text-3xl p-1 text-center">{step.icon}</div>
          <div className="text-xs">{step.label}</div>
        </div>
      })
    }
    </div>

  {stp==='' &&  <NakApp/>}
  {stp==='AmarmAlaa' &&  <div>
    <div className="flex flex-row gap-2 mb-2">
    {
      ['Zoo.','Bot.','Phy.','Chem.'].map((wrd,index)=>{
        return <div key={index} className="text-sm bg-gray-700 text-white shadow-lg rounded-lg p-2 ">{wrd}</div>
      })
    }</div>
    <div className="flex gap-2 flex-row flex-wrap">
    {
      mala && mala.length>0 && faker.helpers.arrayElements(mala,27).map((ma:any,index:number)=>{
        return <div key={index} className="p-2 bg-white shadow-lg w-100">
          {ma.string}--{ma.type} 
          <hr/>
          {ma.string.split('').map((i:any,index:number)=>`${Brahmiplate[i.charCodeAt(0)-2303]!==undefined?Brahmiplate[i.charCodeAt(0)-2303]:i.charCodeAt(0)<2303?i:i.charCode(0)}`)}
          <hr/>
          {ma.translitions[0].en}
          <hr/>
          {ma.translations[0].en}
          </div>
      })
    }
    </div></div>}
  {stp==='Translate' &&  <Translate/>}
  {stp==='Feed' && <Feeder />}
  {stp==='Create' && <PostCreator/>}

  </div>
}

export default Ras

const PostCreator=()=>{
  return <div className="w-full flex flex-col gap-2 bg-gray-400 p-2">
  <input className="w-full p-2 " placeholder="Enter title"/>
  <textarea className="w-full p-2  " rows={16}/>
  <div className="flex flex-row gap-2 justify-around">
  <div className="bg-orange-600 text-white shadow-lg rounded-lg p-1">Preview</div>
  <div className="bg-green-600 text-white shadow-lg rounded-lg p-1">Save</div>
  <div className="bg-gray-600 text-white shadow-lg rounded-lg p-1">Release</div>
  </div>
  </div>
}


const Feeder=(props:any)=>{
const {earth}=props

  const [processed,setProcessed]=useState<any>('')

  const auto_save=async(deviceId:any)=>{
    const {data,error}=await supabase.from('post').select('*').eq('device_id',deviceId)
    return {data,error}
  }
  const check_entry=async(d:any)=>{
    const {data,error}=await supabase.from('अमृत').select('*').eq(`string, ${d[0]}`).eq(``)
    return {data,error}
  }

  const save=async(d:any)=>{

    const {data,error}=await supabase.from('अमृत').insert([{
      string:d[0],
      type:d[1],
      language:'sanskrut',
      translitions:[{en:d[2]}],
      translations:[{en:d[3]}],
      notes:[d[4]]
    }
    ]).select('*')
    return {data,error}
  }



  useEffect(() => {
    let mount=true
    const ti=()=>setInterval(()=>{
      // auto_save(earth?.device?.id)
      success('times for information')
    },12000)
    if(mount ){

      // ti()
    }
  
    return () => {
      mount=false
      clearInterval(ti())
    }
  }, [])
  

 

return   <div className="p-4 bg-gray-300 rounded-lg shadow-lg">

<textarea placeholder="Enter Feed" rows={12} className="w-full p-2"
onChange={(e:any)=>{
  const col=e.target.value
  const pr=col.split('\n')
  console.log(pr.map((li:string,index:number)=>{
    return li.split('\t')
  }),'---=> pr')
  setProcessed(pr.map((li:string,index:number)=>{
    return li.split('\t')
  }))
}}
/>
<div className="w-100 text-center text-white p-2 bg-pink-500 rounded-lg shadow-lg"
onClick={()=>{
  processed.map((li:any)=>{
    save(li).then(res=>{
      // notify('success adding')
      console.log('--=>',res)
    }).catch(error=>{
      console.log(error)
      // errorT("unsuccess")
    }
      )
  })
}}
>
    Enter      
</div>
</div>
}


const Translate=(props:any)=>{
  const [string,setString]=useState<any>('')
  const [results,setResults]=useState<any>('')
  const [processing,setProcessing]=useState(false)

  const create_feed=async(str:any)=>{

    await fetch(`/api/get/${str}`,{
      method:'GET'
    }).then(res=>res.json()).then(data=>{
      console.log(data,'---=>')
    })
  }

  const find_from_amar=async(str:any)=>{
    const {data,error}=await supabase.from('अमृत').select('*').textSearch('translitions -> en',str)
    return {data,error}
  }

  // nont_any
  // astro_samaya_{mesh:maish} rAma raMA 
  // roop : 
  // tense _ present _past _future
  // shabda roop
  // mAtrA akshara 
  // $sSÍß ¢››ÆÚ»»
  // {countries:[country language currency]}
  // {string []}
  // {kavach}
  // {}{}{}
  // {}{}
  // {}
  // |»«
  // |.≥˘under lookup|
  // lookup ::
  // versionnn:: shrirAma
  // ziva 
  // treat as guest
  // {"learnsannskrit.cc"}
  // \\  {}

  useEffect(() => {
    let mount=true
    if(mount && string.length>1){
      find_from_amar(string)
    }
  
    return () => {
      mount=false
    }
  }, [string])
  


  return <div className="p-2 mb-6 w-full bg-white shadow-lg">
    <div className="flex flex-row justify-between">

    <div>
      from:<select>
      {
        ["English","Sanskrut","Hindi"].map((lng,index)=>{
          return <option key={index}>{lng}</option>
        })
      }
    </select>
    </div>
    <div>
      to:<select className="w-[50vw] overflow-hidden">
      {
        [...languages_].map((lng,index)=>{
          return <option key={index} className="flex flex-row flex-wrap gap-2">{lng.map((hi,den)=>{
            return <div key={den}>{hi}</div>
          })}</option>
        })
      }
    </select>
    </div>
    </div>
<div className="flex flex-col sm:flex-row gap-4">
    <input className="w-full bg-gray-300 mt-2 p-1" placeholder="Search here"
    onChange={(e:any)=>{
      setString(e.target.value)
    }}
    />
    <div className="w-100 p-2 bg-blue-500 text-white mt-4 text-center rounded-lg shadow-lg">Translate</div>
</div>
{
  results && <div className="w-full p-1">
    {
      results.map((d:any,index:number)=>{
        return <div  key={index} className="flex flex-row w-full gap-2">
          <div>d[0]</div>
          <div>d[1]</div>
          <div>d[2]</div>
          <div>d[3]</div>
          <div>d[4]</div>
        </div>
      })
    }
  </div>
}

  </div>
}

// float window
// message of success dissapearence vibration 
// sound buzzer success sound
// zoom -> success 
// wrong -> 
// transition time {}
// 
// 