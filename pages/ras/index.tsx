import { supabase } from "@/lib/Store"
import { useState } from "react"
import { BiCircleQuarter } from "react-icons/bi"
import { BsTranslate } from "react-icons/bs"
import { FcFeedIn } from "react-icons/fc"
import NakApp from "../galaxy/rashi"

const feed_am=async(d:any)=>{
  const {data,error}=await supabase.from('').select('*').insert([{
    word:d[0],
    type:d[1],
    language:'sanskrut',
    translition:{en:d[2]},
    translation:{en:d[3]},

  }])
}
const Ras=()=>{

const [stp,setStp]=useState<any>('')
  return <div className="p-4 min-h-[90vh] h-full">
    <div className="h-12"></div>
    <div className="flex flex-row gap-4 text-center mb-4">

    {
      [
        {label:"Create",icon:<BiCircleQuarter/>},
        {label:"Translate",icon:<BsTranslate/>},
        {label:"Feed",icon:<FcFeedIn/>}

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


  const [processed,setProcessed]=useState<any>('')

 

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
<div className="w-100 text-center text-white p-2 bg-pink-500 rounded-lg shadow-lg">
    Enter      
</div>
</div>
}

const Translate=(props:any)=>{
  const [string,setString]=useState<any>('')
  const [results,setResults]=useState<any>('')

  const create_feed=async(str:any)=>{

    await fetch(`/api/get/${str}`,{
      method:'GET'
    }).then(res=>res.json()).then(data=>{
      console.log(data,'---=>')
    })
  }


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
      to:<select>
      {
        ["English","Sanskrut","Hindi"].map((lng,index)=>{
          return <option key={index}>{lng}</option>
        })
      }
    </select>
    </div>
    </div>
<div className="flex flex-col sm:flex-row gap-4">

    <input className="w-full bg-gray-300 mt-2 p-1" placeholder="Search here"/>
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